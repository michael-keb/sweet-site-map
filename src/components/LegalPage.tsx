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
          <div className="max-w-3xl mx-auto">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-6">{eyebrow}</p>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight leading-[1.05]">{title}</h1>
          </div>
        </div>
      </section>
      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-6 md:px-12">
          <div
            className="
              max-w-3xl mx-auto
              [&_h1]:hidden
              [&_h2]:text-3xl [&_h2]:md:text-4xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-foreground [&_h2]:mt-14 [&_h2]:mb-5
              [&_h3]:text-xl [&_h3]:md:text-2xl [&_h3]:font-bold [&_h3]:tracking-tight [&_h3]:text-foreground [&_h3]:mt-10 [&_h3]:mb-3
              [&_p]:text-lg [&_p]:text-gray-700 [&_p]:leading-relaxed [&_p]:my-5
              [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-5 [&_ul]:space-y-2
              [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:my-5 [&_ol]:space-y-2
              [&_li]:text-lg [&_li]:text-gray-700 [&_li]:leading-relaxed [&_li]:pl-1
              [&_li::marker]:text-gray-400
              [&_li_p]:my-2
              [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:opacity-80
              [&_strong]:text-foreground [&_strong]:font-semibold
              [&_blockquote]:border-l-4 [&_blockquote]:border-gray-300 [&_blockquote]:pl-5 [&_blockquote]:my-6 [&_blockquote]:text-gray-600
              [&_img]:max-w-full [&_img]:h-auto [&_img]:rounded-lg [&_img]:my-6 [&_img]:shadow-sm
              [&_mark]:bg-yellow-100 [&_mark]:text-foreground
              [&_table]:w-full [&_table]:border-collapse [&_table]:my-8
              [&_th]:text-left [&_th]:text-sm [&_th]:font-semibold [&_th]:text-foreground [&_th]:border [&_th]:border-gray-200 [&_th]:p-3 [&_th]:align-top
              [&_td]:text-base [&_td]:text-gray-700 [&_td]:border [&_td]:border-gray-200 [&_td]:p-3 [&_td]:align-top
            "
          >
            {children}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);
