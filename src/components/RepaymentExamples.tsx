import {
  repaymentDisclaimer,
  repaymentExamples,
  repaymentFormulas,
} from "@/data/productFacts";

interface Props {
  className?: string;
}

export const RepaymentExamples = ({ className = "" }: Props) => (
  <section className={className}>
    <div className="max-w-3xl mb-12">
      <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-6">Repayments</p>
      <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
        How repayments work.
      </h2>
      <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
        Repayments are linked to your income above a $50,000 threshold and aligned to your pay
        cycle — weekly or fortnightly.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
      {repaymentFormulas.map((item) => (
        <div key={item.cycle} className="p-6 bg-gray-50 rounded-2xl">
          <p className="text-sm uppercase tracking-[0.15em] text-gray-500 mb-2">{item.cycle}</p>
          <p className="text-base font-medium text-foreground font-mono">{item.formula}</p>
        </div>
      ))}
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      {repaymentExamples.map((example) => (
        <div key={example.title} className="p-8 md:p-10 bg-foreground text-background rounded-2xl">
          <p className="text-sm uppercase tracking-[0.15em] text-background/60 mb-3">
            Example · {example.salary}
          </p>
          <h3 className="text-xl md:text-2xl font-bold mb-4 tracking-tight">{example.title}</h3>
          <p className="text-base leading-relaxed text-background/80">{example.narrative}</p>
        </div>
      ))}
    </div>

    <p className="text-sm text-gray-500 leading-relaxed">{repaymentDisclaimer}</p>
  </section>
);
