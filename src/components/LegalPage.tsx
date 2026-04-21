import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: string;
  children: ReactNode;
}

export const LegalPage = ({ eyebrow = "Legal", title, children }: Props) => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <main>
      <section className="pt-40 pb-12 md:pt-48 md:pb-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-6">{eyebrow}</p>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight leading-[1.05]">{title}</h1>
          </div>
        </div>
      </section>
      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto prose prose-lg prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-a:text-accent">
            {children}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);
