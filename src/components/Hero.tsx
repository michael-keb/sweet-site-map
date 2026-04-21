import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-office.jpg";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: { text: string; link: string };
  secondaryCTA?: { text: string; link: string };
  backgroundImage?: string;
  compact?: boolean;
}

const Hero = ({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  compact = false,
}: HeroProps) => {
  const bgImage = backgroundImage || heroImage;

  return (
    <section className="relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className={`max-w-3xl ${compact ? 'py-24' : 'py-32 md:py-40'}`}>
          {subtitle && (
            <div className="inline-block mb-4 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full">
              <span className="text-sm font-medium text-accent-foreground">{subtitle}</span>
            </div>
          )}
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            {title}
          </h1>
          
          {description && (
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl">
              {description}
            </p>
          )}

          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-4">
              {primaryCTA && (
                <Button asChild size="lg" variant="default">
                  <Link to={primaryCTA.link}>{primaryCTA.text}</Link>
                </Button>
              )}
              {secondaryCTA && (
                <Button asChild size="lg" variant="outline" className="bg-background/10 border-primary-foreground/30 text-primary-foreground hover:bg-background/20">
                  <Link to={secondaryCTA.link}>{secondaryCTA.text}</Link>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
