import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SignUpData } from "@/types/signup";

const step1Schema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().min(10, "Phone number must be at least 10 digits").max(20),
  location: z.string().min(1, "Please select your location"),
  otherState: z.string().optional(),
  workEligibility: z.string().min(1, "Please select work eligibility"),
});

type Step1Data = z.infer<typeof step1Schema>;

interface Step1Props {
  onNext: (data: Partial<SignUpData>) => void;
  initialData?: Partial<SignUpData>;
}

export const Step1BasicInfo = ({ onNext, initialData }: Step1Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Step1Data>({
    resolver: zodResolver(step1Schema),
    defaultValues: initialData,
  });

  const location = watch("location");

  const onSubmit = (data: Step1Data) => {
    onNext(data);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-bold mb-3 text-foreground">Basic Information</h2>
        <p className="text-muted-foreground">Let's start with some basic details about you</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
        <div className="space-y-3">
          <Label htmlFor="fullName" className="text-base">Full Name</Label>
          <Input
            id="fullName"
            {...register("fullName")}
            placeholder="Enter your full name"
            className="text-base"
          />
          {errors.fullName && (
            <p className="text-sm text-destructive">{errors.fullName.message}</p>
          )}
        </div>

        <div className="space-y-3">
          <Label htmlFor="email" className="text-base">Email</Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="your@email.com"
            className="text-base"
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-3">
          <Label htmlFor="phone" className="text-base">Phone</Label>
          <Input
            id="phone"
            type="tel"
            {...register("phone")}
            placeholder="+61 xxx xxx xxx"
            className="text-base"
          />
          {errors.phone && (
            <p className="text-sm text-destructive">{errors.phone.message}</p>
          )}
        </div>

        <div className="space-y-4">
          <Label className="text-base">Where are you located?</Label>
          <RadioGroup defaultValue={initialData?.location} className="space-y-3">
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="VIC" id="vic" {...register("location")} />
              <Label htmlFor="vic" className="font-normal cursor-pointer">
                Australia (Victoria)
              </Label>
            </div>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="other-state" id="other-state" {...register("location")} />
              <Label htmlFor="other-state" className="font-normal cursor-pointer">
                Australia (other state)
              </Label>
            </div>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="outside" id="outside" {...register("location")} />
              <Label htmlFor="outside" className="font-normal cursor-pointer">
                Outside Australia
              </Label>
            </div>
          </RadioGroup>
          {location === "other-state" && (
            <Input
              {...register("otherState")}
              placeholder="Which state?"
              className="mt-4"
            />
          )}
          {errors.location && (
            <p className="text-sm text-destructive">{errors.location.message}</p>
          )}
        </div>

        <div className="space-y-4">
          <Label className="text-base">Are you eligible to work in Australia?</Label>
          <RadioGroup defaultValue={initialData?.workEligibility} className="space-y-3">
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="citizen-pr" id="citizen" {...register("workEligibility")} />
              <Label htmlFor="citizen" className="font-normal cursor-pointer">
                Yes - Citizen/PR
              </Label>
            </div>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="visa" id="visa" {...register("workEligibility")} />
              <Label htmlFor="visa" className="font-normal cursor-pointer">
                Yes - Valid work visa
              </Label>
            </div>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="no" id="no-eligibility" {...register("workEligibility")} />
              <Label htmlFor="no-eligibility" className="font-normal cursor-pointer">
                No
              </Label>
            </div>
          </RadioGroup>
          {errors.workEligibility && (
            <p className="text-sm text-destructive">{errors.workEligibility.message}</p>
          )}
        </div>

        <div className="flex justify-end pt-8">
          <Button type="submit" size="lg" className="px-12">
            Continue
          </Button>
        </div>
      </form>
    </div>
  );
};
