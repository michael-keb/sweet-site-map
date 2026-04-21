import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { SignUpData } from "@/types/signup";

const step2Schema = z.object({
  employmentStatus: z.string().min(1, "Please select employment status"),
  currentRole: z.string().optional(),
  careerGoal: z.string().min(1, "Please select career goal"),
  targetRole: z.string().min(2, "Please enter target role").max(100),
  whySquad: z.string().min(1, "Please select reason"),
  whyIncomeShare: z.array(z.string()).min(1, "Please select at least one option"),
  whyIncomeShareOther: z.string().optional(),
});

type Step2Data = z.infer<typeof step2Schema>;

interface Step2Props {
  onNext: (data: Partial<SignUpData>) => void;
  onBack: () => void;
  initialData?: Partial<SignUpData>;
}

export const Step2Background = ({ onNext, onBack, initialData }: Step2Props) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Step2Data>({
    resolver: zodResolver(step2Schema),
    defaultValues: {
      ...initialData,
      whyIncomeShare: initialData?.whyIncomeShare || [],
    },
  });

  const employmentStatus = watch("employmentStatus");
  const whyIncomeShare = watch("whyIncomeShare");

  const toggleIncomeShareOption = (option: string) => {
    const current = whyIncomeShare || [];
    if (current.includes(option)) {
      setValue("whyIncomeShare", current.filter((o) => o !== option));
    } else {
      setValue("whyIncomeShare", [...current, option]);
    }
  };

  const onSubmit = (data: Step2Data) => {
    onNext(data);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-bold mb-3 text-foreground">Your Background & Goals</h2>
        <p className="text-muted-foreground">Help us understand your current situation and career aspirations</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
        <div className="space-y-4">
          <Label className="text-base">Current employment status</Label>
          <RadioGroup defaultValue={initialData?.employmentStatus} className="space-y-3">
            {["Employed full-time", "Employed part-time", "Unemployed / seeking work", "Student", "Other"].map((status) => (
              <div key={status} className="flex items-center space-x-3">
                <RadioGroupItem
                  value={status}
                  id={status}
                  {...register("employmentStatus")}
                />
                <Label htmlFor={status} className="font-normal cursor-pointer">
                  {status}
                </Label>
              </div>
            ))}
          </RadioGroup>
          {errors.employmentStatus && (
            <p className="text-sm text-destructive">{errors.employmentStatus.message}</p>
          )}
        </div>

        {(employmentStatus?.includes("Employed") || employmentStatus === "Other") && (
          <div className="space-y-3">
            <Label htmlFor="currentRole" className="text-base">Current role/industry</Label>
            <Input
              id="currentRole"
              {...register("currentRole")}
              placeholder="e.g., Sales Manager, Retail Worker"
              className="text-base"
            />
          </div>
        )}

        <div className="space-y-4">
          <Label className="text-base">What's your career goal after Squad Institute?</Label>
          <RadioGroup defaultValue={initialData?.careerGoal} className="space-y-3">
            {[
              "Switch to tech (from another field)",
              "Advance in current tech career",
              "Start tech business",
              "Return to work after career break",
              "Other"
            ].map((goal) => (
              <div key={goal} className="flex items-center space-x-3">
                <RadioGroupItem value={goal} id={goal} {...register("careerGoal")} />
                <Label htmlFor={goal} className="font-normal cursor-pointer">
                  {goal}
                </Label>
              </div>
            ))}
          </RadioGroup>
          {errors.careerGoal && (
            <p className="text-sm text-destructive">{errors.careerGoal.message}</p>
          )}
        </div>

        <div className="space-y-3">
          <Label htmlFor="targetRole" className="text-base">Target role after completion</Label>
          <Input
            id="targetRole"
            {...register("targetRole")}
            placeholder="e.g., Product Manager, Data Analyst, Software Developer"
            className="text-base"
          />
          {errors.targetRole && (
            <p className="text-sm text-destructive">{errors.targetRole.message}</p>
          )}
        </div>

        <div className="space-y-4">
          <Label className="text-base">Why Squad Institute?</Label>
          <RadioGroup defaultValue={initialData?.whySquad} className="space-y-3">
            {[
              "Want to transition careers",
              "Can't afford upfront tuition",
              "Like income-contingent payment structure",
              "Recommended by someone",
              "Other"
            ].map((reason) => (
              <div key={reason} className="flex items-center space-x-3">
                <RadioGroupItem value={reason} id={reason} {...register("whySquad")} />
                <Label htmlFor={reason} className="font-normal cursor-pointer">
                  {reason}
                </Label>
              </div>
            ))}
          </RadioGroup>
          {errors.whySquad && (
            <p className="text-sm text-destructive">{errors.whySquad.message}</p>
          )}
        </div>

        <div className="space-y-4">
          <Label className="text-base">What attracts you to income-share model?</Label>
          <p className="text-sm text-muted-foreground">Select all that apply</p>
          <div className="space-y-3">
            {[
              "Pay nothing if I don't succeed",
              "Payments scaled to my income",
              "No upfront cost barrier",
              "Risk-sharing with Squad Institute"
            ].map((option) => (
              <div key={option} className="flex items-center space-x-3">
                <Checkbox
                  id={option}
                  checked={whyIncomeShare?.includes(option)}
                  onCheckedChange={() => toggleIncomeShareOption(option)}
                />
                <Label htmlFor={option} className="font-normal cursor-pointer">
                  {option}
                </Label>
              </div>
            ))}
          </div>
          {errors.whyIncomeShare && (
            <p className="text-sm text-destructive">{errors.whyIncomeShare.message}</p>
          )}
        </div>

        <div className="flex justify-between pt-8">
          <Button type="button" variant="outline" onClick={onBack} size="lg">
            Back
          </Button>
          <Button type="submit" size="lg" className="px-12">
            Continue
          </Button>
        </div>
      </form>
    </div>
  );
};
