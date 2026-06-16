import { productFacts } from "@/data/productFacts";

interface Props {
  className?: string;
  compact?: boolean;
}

export const ProductKeyFacts = ({ className = "", compact = false }: Props) => (
  <section className={className}>
    <div className={compact ? "mb-6" : "max-w-3xl mb-12"}>
      <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4 md:mb-6">Key facts</p>
      <h2
        className={`font-bold text-foreground tracking-tight ${
          compact ? "text-2xl md:text-3xl" : "text-4xl md:text-5xl"
        }`}
      >
        The plan at a glance.
      </h2>
    </div>

    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-200 rounded-2xl overflow-hidden">
      {productFacts.map((fact, index) => (
        <div
          key={fact.label}
          className={`bg-background ${compact ? "p-5 md:p-6" : "p-8 md:p-10"} ${
            index === 0 ? "sm:col-span-2 bg-gray-50/80" : ""
          }`}
        >
          <dt className="text-sm uppercase tracking-[0.15em] text-gray-500 mb-2 md:mb-3">
            {fact.label}
          </dt>
          <dd
            className={`font-semibold text-foreground leading-snug ${
              index === 0 ? "text-xl md:text-2xl" : "text-lg md:text-xl"
            }`}
          >
            {fact.value}
          </dd>
        </div>
      ))}
    </dl>
  </section>
);
