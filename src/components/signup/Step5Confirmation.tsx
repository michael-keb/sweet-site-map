import { CheckCircle2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SignUpData } from "@/types/signup";

interface Step5Props {
  formData: Partial<SignUpData>;
}

export const Step5Confirmation = ({ formData }: Step5Props) => {
  // Calculate expected decision date (48 hours from now)
  const decisionDate = new Date();
  decisionDate.setHours(decisionDate.getHours() + 48);
  const formattedDate = decisionDate.toLocaleDateString("en-AU", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-16 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle2Icon className="h-20 w-20 text-primary" />
        </div>
        <h2 className="text-4xl font-bold mb-4 text-foreground">Application Submitted</h2>
        <p className="text-lg text-muted-foreground">
          Thanks {formData.fullName}! We've received your application.
        </p>
      </div>

      <div className="space-y-12">
        <div className="space-y-8">
          <h3 className="text-xl font-semibold text-center">What happens next</h3>
          
          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-lg">
                1
              </div>
              <div className="pt-1">
                <h4 className="font-semibold mb-1">Document verification</h4>
                <p className="text-sm text-muted-foreground">
                  We'll verify your documents and financial snapshot (12 hours)
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-lg">
                2
              </div>
              <div className="pt-1">
                <h4 className="font-semibold mb-1">Suitability assessment</h4>
                <p className="text-sm text-muted-foreground">
                  We'll assess whether the income-share arrangement is suitable for your circumstances (12 hours)
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-lg">
                3
              </div>
              <div className="pt-1">
                <h4 className="font-semibold mb-1">Decision</h4>
                <p className="text-sm text-muted-foreground">
                  You'll receive an email with our decision (within 48 hours)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 bg-muted/50 rounded-lg border border-border/50 text-center">
          <p className="font-semibold mb-2">Expected decision</p>
          <p className="text-primary text-lg">{formattedDate}</p>
        </div>

        <div className="text-center space-y-3 text-sm text-muted-foreground">
          <p>
            Email sent to: <span className="font-medium text-foreground">{formData.email}</span>
          </p>
          <p>
            Check your inbox for a confirmation email with next steps
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Button asChild size="lg" className="px-12">
            <Link to="/">Return to Home</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="px-12">
            <Link to="/contact">Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
