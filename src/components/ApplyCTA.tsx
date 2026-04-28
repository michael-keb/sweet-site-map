import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface Props {
  className?: string;
  variant?: "default" | "muted";
}

export const ApplyCTA = ({ className = "", variant = "default" }: Props) => {
  const isMuted = variant === "muted";
  return (
    <section
      className={`py-24 ${isMuted ? "bg-gray-50" : "bg-foreground text-background"} ${className}`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className={`text-3xl md:text-5xl font-bold mb-6 tracking-tight ${
              isMuted ? "text-foreground" : ""
            }`}
          >
            Start the program. Pay later.
          </h2>
          <p
            className={`text-lg md:text-xl mb-4 leading-relaxed ${
              isMuted ? "text-gray-500" : "opacity-80"
            }`}
          >
            A short, honest application. A clear answer. Program fees paid direct to the Institute, weekly or fortnightly instalments to us.
          </p>
          <p
            className={`text-sm mb-10 ${
              isMuted ? "text-gray-500" : "opacity-70"
            }`}
          >
            Applying for the program ≠ final loan approval. You can apply for finance before you're enrolled.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant={isMuted ? "default" : "secondary"}
              className="text-base"
            >
              <Link to="/apply">Apply for financing</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className={
                isMuted
                  ? "text-base"
                  : "text-base bg-transparent border-background/30 text-background hover:bg-background hover:text-foreground"
              }
            >
              <Link to="/contact">Talk to us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
