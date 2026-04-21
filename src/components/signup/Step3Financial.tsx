import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SignUpData } from "@/types/signup";

const step3Schema = z.object({
  currentIncome: z.string().min(1, "Please select income range"),
  incomeAmount: z.number().optional(),
  housingType: z.string().min(1, "Please select housing type"),
  housingCost: z.number().optional(),
  monthlyEssentials: z.number().min(0, "Please enter monthly essentials"),
  dependents: z.string().min(1, "Please select dependents"),
  dependentsCount: z.number().optional(),
  hasDebts: z.boolean(),
  totalMonthlyDebt: z.number().min(0).default(0),
  affordabilityCheck: z.string().min(1, "Please select affordability option"),
});

type Step3Data = z.infer<typeof step3Schema>;

interface Step3Props {
  onNext: (data: Partial<SignUpData>) => void;
  onBack: () => void;
  initialData?: Partial<SignUpData>;
}

export const Step3Financial = ({ onNext, onBack, initialData }: Step3Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Step3Data>({
    resolver: zodResolver(step3Schema),
    defaultValues: initialData,
  });

  const hasDebts = watch("hasDebts");
  const currentIncome = watch("currentIncome");

  const onSubmit = (data: Step3Data) => {
    onNext(data);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-bold mb-3 text-foreground">Financial Snapshot</h2>
        <p className="text-muted-foreground">This helps us ensure the income-share arrangement is suitable for your circumstances</p>
      </div>

      <div className="mb-12 p-6 bg-muted/50 rounded-lg border border-border/50">
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">Why we ask:</span> Australian law requires us to assess whether the income-share arrangement is suitable for your financial circumstances. This protects you from entering agreements you can't afford.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-16">
        <div className="space-y-8">
          <h3 className="text-xl font-semibold">Current Income</h3>
          
          <div className="space-y-4">
            <Label className="text-base">What's your current income situation?</Label>
            <RadioGroup defaultValue={initialData?.currentIncome} className="space-y-3">
              {[
                "Unemployed (receiving Centrelink)",
                "Student (no income)",
                "Under $30k/year",
                "$30k - $40k",
                "$40k - $50k",
                "$50k - $60k",
                "$60k+"
              ].map((range) => (
                <div key={range} className="flex items-center space-x-3">
                  <RadioGroupItem value={range} id={range} {...register("currentIncome")} />
                  <Label htmlFor={range} className="font-normal cursor-pointer">
                    {range}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            {errors.currentIncome && (
              <p className="text-sm text-destructive">{errors.currentIncome.message}</p>
            )}
          </div>

          {currentIncome && !["Unemployed (receiving Centrelink)", "Student (no income)"].includes(currentIncome) && (
            <div className="space-y-3">
              <Label htmlFor="incomeAmount" className="text-base">Or enter exact annual gross income (optional)</Label>
              <Input
                id="incomeAmount"
                type="number"
                {...register("incomeAmount", { valueAsNumber: true })}
                placeholder="e.g., 45000"
              />
            </div>
          )}
        </div>

        <div className="space-y-8">
          <h3 className="text-xl font-semibold">Living Expenses</h3>
          
          <div className="space-y-4">
            <Label className="text-base">Your housing situation</Label>
            <RadioGroup defaultValue={initialData?.housingType} className="space-y-3">
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="family" id="family" {...register("housingType")} />
                <Label htmlFor="family" className="font-normal cursor-pointer">
                  Live with family/friends ($0 rent)
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="rent" id="rent" {...register("housingType")} />
                <Label htmlFor="rent" className="font-normal cursor-pointer">
                  Renting
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="own" id="own" {...register("housingType")} />
                <Label htmlFor="own" className="font-normal cursor-pointer">
                  Own home with mortgage
                </Label>
              </div>
            </RadioGroup>
            {errors.housingType && (
              <p className="text-sm text-destructive">{errors.housingType.message}</p>
            )}
          </div>

          <div className="space-y-3">
            <Label htmlFor="monthlyEssentials" className="text-base">Monthly essentials</Label>
            <p className="text-sm text-muted-foreground">Food, transport, utilities</p>
            <Input
              id="monthlyEssentials"
              type="number"
              {...register("monthlyEssentials", { valueAsNumber: true })}
              placeholder="e.g., 1500"
            />
            {errors.monthlyEssentials && (
              <p className="text-sm text-destructive">{errors.monthlyEssentials.message}</p>
            )}
          </div>

          <div className="space-y-4">
            <Label className="text-base">Do you support anyone financially?</Label>
            <RadioGroup defaultValue={initialData?.dependents} className="space-y-3">
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="none" id="none" {...register("dependents")} />
                <Label htmlFor="none" className="font-normal cursor-pointer">
                  No dependents
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="children" id="children" {...register("dependents")} />
                <Label htmlFor="children" className="font-normal cursor-pointer">
                  Yes - Children
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="other" id="other-dep" {...register("dependents")} />
                <Label htmlFor="other-dep" className="font-normal cursor-pointer">
                  Yes - Other dependents
                </Label>
              </div>
            </RadioGroup>
            {errors.dependents && (
              <p className="text-sm text-destructive">{errors.dependents.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-xl font-semibold">Existing Debts</h3>
          
          <div className="space-y-4">
            <Label className="text-base">Do you have any existing debts?</Label>
            <RadioGroup defaultValue={initialData?.hasDebts ? "yes" : "no"} className="space-y-3">
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="no" id="no-debts" {...register("hasDebts", { setValueAs: v => v === "yes" })} />
                <Label htmlFor="no-debts" className="font-normal cursor-pointer">
                  No debts or credit commitments
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="yes" id="yes-debts" {...register("hasDebts", { setValueAs: v => v === "yes" })} />
                <Label htmlFor="yes-debts" className="font-normal cursor-pointer">
                  Yes - I have debts
                </Label>
              </div>
            </RadioGroup>
          </div>

          {hasDebts && (
            <div className="space-y-3">
              <Label htmlFor="totalMonthlyDebt" className="text-base">Total monthly debt payments</Label>
              <Input
                id="totalMonthlyDebt"
                type="number"
                {...register("totalMonthlyDebt", { valueAsNumber: true })}
                placeholder="e.g., 500"
              />
              <p className="text-sm text-muted-foreground">
                Include credit cards, loans, but not HECS/HELP
              </p>
            </div>
          )}
        </div>

        <div className="p-8 bg-muted/50 rounded-lg border border-border/50 space-y-6">
          <h3 className="text-xl font-semibold">Income Share Estimate</h3>
          <p className="text-muted-foreground">
            Based on your info, IF you earn $75k after our program:
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li>→ Your income share: ~$1,667/month for 12 months</li>
            <li>→ You'd keep: $55,000 + whatever you earn after paying us</li>
            <li>→ IF you earn less than $55k: You pay $0 (automatic deferment)</li>
          </ul>

          <div className="space-y-4 mt-8">
            <Label className="text-base">Does this feel manageable for your situation?</Label>
            <RadioGroup defaultValue={initialData?.affordabilityCheck} className="space-y-3">
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="yes" id="afford-yes" {...register("affordabilityCheck")} />
                <Label htmlFor="afford-yes" className="font-normal cursor-pointer">
                  Yes, that seems affordable
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="unsure" id="afford-unsure" {...register("affordabilityCheck")} />
                <Label htmlFor="afford-unsure" className="font-normal cursor-pointer">
                  Not sure, need to think about it
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="concerned" id="afford-concerned" {...register("affordabilityCheck")} />
                <Label htmlFor="afford-concerned" className="font-normal cursor-pointer">
                  Concerned about affordability
                </Label>
              </div>
            </RadioGroup>
            {errors.affordabilityCheck && (
              <p className="text-sm text-destructive">{errors.affordabilityCheck.message}</p>
            )}
          </div>
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
