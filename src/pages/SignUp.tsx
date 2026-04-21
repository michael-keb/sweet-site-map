import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { StepIndicator } from "@/components/signup/StepIndicator";
import { Step1BasicInfo } from "@/components/signup/Step1BasicInfo";
import { Step2Background } from "@/components/signup/Step2Background";
import { Step3Financial } from "@/components/signup/Step3Financial";
import { Step4Documents } from "@/components/signup/Step4Documents";
import { Step5Confirmation } from "@/components/signup/Step5Confirmation";
import { SignUpData } from "@/types/signup";

const SignUp = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Partial<SignUpData>>({});

  const totalSteps = 5;

  const handleNext = (data: Partial<SignUpData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <Step1BasicInfo onNext={handleNext} initialData={formData} />;
      case 1:
        return <Step2Background onNext={handleNext} onBack={handleBack} initialData={formData} />;
      case 2:
        return <Step3Financial onNext={handleNext} onBack={handleBack} initialData={formData} />;
      case 3:
        return <Step4Documents onNext={handleNext} onBack={handleBack} initialData={formData} />;
      case 4:
        return <Step5Confirmation formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-1 py-32">
        <div className="container max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
              Start Your Journey
            </h1>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
              This takes about 15 minutes. We'll ask about your background and goals 
              to ensure our program is the right fit.
            </p>
          </div>

          <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />

          <div className="mt-12">{renderStep()}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignUp;
