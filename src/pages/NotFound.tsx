import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section className="pt-40 pb-24 md:pt-48 md:pb-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-6">404</p>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 tracking-tight leading-[1.05]">
                We couldn't find that page.
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 mb-10 leading-relaxed max-w-2xl">
                The link may be broken, or the page may have moved. Let's get you back on track.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-base">
                  <Link to="/">Back to home</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-base">
                  <Link to="/contact">Contact us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
