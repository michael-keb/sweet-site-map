import { useEffect, useRef, useState } from "react";

// Helper to get CSS variable as usable color for Canvas
const getCSSVariableColor = (variableName: string, alpha: number = 1): string => {
  const root = document.documentElement;
  const value = getComputedStyle(root).getPropertyValue(variableName).trim();

  // Parse HSL value (format: "0 0% 8%")
  const hslMatch = value.match(/(\d+\.?\d*)\s+(\d+\.?\d*)%\s+(\d+\.?\d*)%/);
  if (hslMatch) {
    const [, h, s, l] = hslMatch;
    return `hsla(${h}, ${s}%, ${l}%, ${alpha})`;
  }

  // Fallback to black with alpha
  return `rgba(0, 0, 0, ${alpha})`;
};

interface LiquidGlassProps {
  blur?: number;
  refraction?: number;
  viscosity?: "low" | "medium" | "high";
  animationSpeed?: number;
  interactive?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const LiquidGlass = ({
  blur = 10,
  refraction = 0.1,
  viscosity = "medium",
  animationSpeed = 1.2,
  interactive = true,
  className = "",
  children,
}: LiquidGlassProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 });
  const [isInView, setIsInView] = useState(false);

  const viscosityMap = {
    low: 0.05,
    medium: 0.03,
    high: 0.01,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isInView) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    // Noise function for liquid effect
    const noise = (x: number, y: number, t: number) => {
      const X = Math.floor(x) & 255;
      const Y = Math.floor(y) & 255;
      const T = Math.floor(t) & 255;

      const hash = (X * 374761393 + Y * 668265263 + T * 1274126177) & 0xffffffff;
      return (hash / 0xffffffff) * 2 - 1;
    };

    let time = 0;
    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      // Update mouse position with spring physics
      const springFactor = viscosityMap[viscosity];
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * springFactor;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * springFactor;

      time += 0.002 * animationSpeed;

      // Create liquid gradient with noise
      const gradient = ctx.createRadialGradient(
        mouseRef.current.x * width,
        mouseRef.current.y * height,
        0,
        mouseRef.current.x * width,
        mouseRef.current.y * height,
        Math.max(width, height) * 0.8,
      );

      // Animated colors with noise
      const noiseVal1 = noise(mouseRef.current.x * 2, mouseRef.current.y * 2, time);
      const noiseVal2 = noise(mouseRef.current.x * 3, mouseRef.current.y * 3, time * 1.5);

      const alpha1 = 0.3 + noiseVal1 * 0.05;
      const alpha2 = 0.2 + noiseVal2 * 0.03;

      gradient.addColorStop(0, getCSSVariableColor("--primary", alpha1));
      gradient.addColorStop(0.5, getCSSVariableColor("--primary", alpha2));
      gradient.addColorStop(1, getCSSVariableColor("--primary", 0));

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Add liquid distortion circles
      for (let i = 0; i < 3; i++) {
        const phase = time + i * Math.PI * 0.66;
        const x = width * (0.5 + Math.sin(phase * 0.5) * 0.3);
        const y = height * (0.5 + Math.cos(phase * 0.7) * 0.3);
        const radius = Math.min(width, height) * (0.2 + noise(i, time, phase) * 0.1);

        const circleGradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        circleGradient.addColorStop(0, getCSSVariableColor("--primary", 0.1 * refraction));
        circleGradient.addColorStop(1, getCSSVariableColor("--primary", 0));

        ctx.fillStyle = circleGradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Specular highlights
      const highlightGradient = ctx.createLinearGradient(0, 0, width, height);
      highlightGradient.addColorStop(0, "hsla(0, 0%, 100%, 0.1)");
      highlightGradient.addColorStop(0.5, "hsla(0, 0%, 100%, 0.05)");
      highlightGradient.addColorStop(1, "hsla(0, 0%, 100%, 0)");

      ctx.fillStyle = highlightGradient;
      ctx.fillRect(0, 0, width, height);

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", updateSize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isInView, blur, refraction, viscosity, animationSpeed]);

  useEffect(() => {
    if (!interactive) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseRef.current.targetX = (e.clientX - rect.left) / rect.width;
      mouseRef.current.targetY = (e.clientY - rect.top) / rect.height;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!containerRef.current || !e.touches[0]) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseRef.current.targetX = (e.touches[0].clientX - rect.left) / rect.width;
      mouseRef.current.targetY = (e.touches[0].clientY - rect.top) / rect.height;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [interactive]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* SVG Filters */}
      <svg className="absolute inset-0 w-0 h-0">
        <defs>
          <filter id="liquidGlassFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise">
              <animate attributeName="baseFrequency" values="0.01;0.015;0.01" dur="8s" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={refraction * 100}
              xChannelSelector="R"
              yChannelSelector="G"
            />
            <feGaussianBlur stdDeviation={blur / 10} />
          </filter>
        </defs>
      </svg>

      {/* Backdrop blur base */}
      <div
        className="absolute inset-0 bg-background/10"
        style={{
          backdropFilter: `blur(${blur}px) saturate(180%)`,
          WebkitBackdropFilter: `blur(${blur}px) saturate(180%)`,
        }}
      />

      {/* Liquid animation canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          filter: "url(#liquidGlassFilter)",
          mixBlendMode: "screen",
        }}
      />

      {/* Glass refraction overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(135deg, 
              hsla(210, 100%, 75%, 0.15) 0%,
              hsla(280, 100%, 75%, 0.1) 25%, 
              transparent 50%, 
              hsla(340, 100%, 75%, 0.08) 75%,
              hsla(var(--primary), 0.1) 100%
            )
          `,
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Edge glow (Fresnel effect) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(
              ellipse at top,
              hsla(var(--primary), 0.25) 0%,
              transparent 50%
            )
          `,
        }}
      />
    </div>
  );
};
