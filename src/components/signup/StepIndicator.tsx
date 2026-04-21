interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const stepLabels = [
  "Basic Info",
  "Background",
  "Finances",
  "Documents",
  "Submit"
];

export const StepIndicator = ({ currentStep, totalSteps }: StepIndicatorProps) => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div key={i} className="flex-1 flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                i <= currentStep
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {i + 1}
            </div>
            <span className={`text-xs mt-2 text-center hidden sm:block ${
              i <= currentStep ? "text-foreground font-medium" : "text-muted-foreground"
            }`}>
              {stepLabels[i]}
            </span>
            {i < totalSteps - 1 && (
              <div
                className={`absolute h-0.5 w-full transform translate-x-1/2 transition-all ${
                  i < currentStep ? "bg-primary" : "bg-muted"
                }`}
                style={{
                  width: `calc((100% - 2.5rem) / ${totalSteps - 1})`,
                  left: `calc(${(i * 100) / (totalSteps - 1)}% + 1.25rem)`,
                  top: "1.25rem"
                }}
              />
            )}
          </div>
        ))}
      </div>
      <div className="text-center text-sm text-muted-foreground mt-4">
        Step {currentStep + 1} of {totalSteps}
      </div>
    </div>
  );
};
