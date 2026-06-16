import { financingSteps } from "@/data/productFacts";

interface Props {
  className?: string;
  variant?: "default" | "dark";
}

export const HowFinancingWorks = ({ className = "", variant = "default" }: Props) => {
  const isDark = variant === "dark";

  return (
    <section className={className}>
      <div className="max-w-3xl mb-16">
        <p
          className={`text-sm uppercase tracking-[0.2em] mb-6 ${
            isDark ? "text-background/60" : "text-gray-500"
          }`}
        >
          How financing works
        </p>
        <h2
          className={`text-4xl md:text-5xl font-bold tracking-tight ${
            isDark ? "text-background" : "text-foreground"
          }`}
        >
          Four steps. No surprises.
        </h2>
      </div>

      <ol className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
        {financingSteps.map((step, i) => (
          <li key={step.title} className="flex gap-6">
            <span
              className={`text-3xl font-bold shrink-0 w-12 ${
                isDark ? "text-background/40" : "text-accent"
              }`}
            >
              0{i + 1}
            </span>
            <div>
              <h3
                className={`text-xl md:text-2xl font-bold mb-3 tracking-tight ${
                  isDark ? "text-background" : "text-foreground"
                }`}
              >
                {step.title}
              </h3>
              <p
                className={`text-base leading-relaxed ${
                  isDark ? "text-background/75" : "text-gray-600"
                }`}
              >
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};
