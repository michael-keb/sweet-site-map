import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { AddressAutocomplete } from "@/components/AddressAutocomplete";
import logo from "@/assets/squad-finance-logo.png";
import {
  User,
  IdCard,
  Landmark,
  CheckCircle2,
  Upload,
  ArrowLeft,
  ArrowRight,
  FileCheck2,
  Sparkles,
  Check,
  Camera,
  Image,
  FileText,
  Zap,
} from "lucide-react";

type PrimaryIdType = "passport" | "licence" | "immicard";
type SecondaryIdType = "medicare" | "birth" | "marriage" | "citizenship";

type FormState = {
  fullName: string;
  email: string;
  mobile: string;
  dob: string;
  maritalStatus: string;
  dependents: string;
  address: string;
  yearsAtAddress: string;
  previousAddress: string;
  primaryIdType: PrimaryIdType;
  primaryPassportNumber: string;
  primaryPassportExpiry: string;
  primaryPassportFullName: string;
  primaryLicenceNumber: string;
  primaryLicenceCardNumber: string;
  primaryLicenceExpiry: string;
  primaryLicenceState: string;
  primaryLicenceType: string;
  primaryImmicardNumber: string;
  primaryImmicardExpiry: string;
  primaryImmicardFullName: string;
  primaryFrontFile: string;
  primaryBackFile: string;
  primarySelfieFile: string;
  secondaryIdType: SecondaryIdType;
  secondaryMedicareNumber: string;
  secondaryMedicareFullName: string;
  secondaryMedicareExpiry: string;
  secondaryMedicareType: string;
  secondaryMedicareReference: string;
  secondaryRegistrationNumber: string;
  secondaryFrontFile: string;
  uploadMethod: "upload" | "openbanking";
  bankInstitution: string;
  bsb: string;
  accountNumber: string;
  statementFiles: string[];
  acceptTerms: boolean;
  creditConsent: boolean;
};

const initialState: FormState = {
  fullName: "",
  email: "",
  mobile: "",
  dob: "",
  maritalStatus: "",
  dependents: "",
  address: "",
  yearsAtAddress: "",
  previousAddress: "",
  primaryIdType: "passport",
  primaryPassportNumber: "",
  primaryPassportExpiry: "",
  primaryPassportFullName: "",
  primaryLicenceNumber: "",
  primaryLicenceCardNumber: "",
  primaryLicenceExpiry: "",
  primaryLicenceState: "",
  primaryLicenceType: "",
  primaryImmicardNumber: "",
  primaryImmicardExpiry: "",
  primaryImmicardFullName: "",
  primaryFrontFile: "",
  primaryBackFile: "",
  primarySelfieFile: "",
  secondaryIdType: "medicare",
  secondaryMedicareNumber: "",
  secondaryMedicareFullName: "",
  secondaryMedicareExpiry: "",
  secondaryMedicareType: "",
  secondaryMedicareReference: "",
  secondaryRegistrationNumber: "",
  secondaryFrontFile: "",
  uploadMethod: "openbanking",
  bankInstitution: "",
  bsb: "",
  accountNumber: "",
  statementFiles: [],
  acceptTerms: false,
  creditConsent: false,
};

const LOAN_AMOUNT = 20000;

const steps = [
  { id: 1, label: "About you", icon: User },
  { id: 2, label: "Primary ID", icon: IdCard },
  { id: 3, label: "Secondary ID", icon: IdCard },
  { id: 4, label: "Banking", icon: Landmark },
  { id: 5, label: "Review", icon: Sparkles },
] as const;

const TOTAL_STEPS = steps.length;

const stepIntro: Record<number, { title: string; subtitle: string }> = {
  1: { title: "About you", subtitle: "Your contact and personal details." },
  2: { title: "Primary identification", subtitle: "Passport, licence, or ImmiCard." },
  3: { title: "Secondary identification", subtitle: "One supporting document." },
  4: { title: "Banking", subtitle: "Connect your account or upload statements." },
  5: { title: "Review", subtitle: "Confirm and submit." },
};

const AU_BANKS = [
  "Commonwealth Bank",
  "Westpac",
  "NAB",
  "ANZ",
  "Macquarie",
  "ING",
  "Bendigo Bank",
  "Bankwest",
  "Suncorp",
  "St.George",
  "Other",
];

const AU_STATES = ["NSW", "VIC", "QLD", "WA", "SA", "TAS", "ACT", "NT"];

const LICENCE_TYPES = [
  "Full",
  "Provisional",
  "Learner",
  "Heavy rigid (HR)",
  "Heavy combination (HC)",
  "Multi combination (MC)",
  "Motorcycle",
  "Other",
];

const MEDICARE_CARD_TYPES = ["Green", "Blue", "Yellow", "Interim"];

const primaryLabel = (t: PrimaryIdType) =>
  t === "passport" ? "Passport" : t === "licence" ? "Driver's licence" : "ImmiCard";
const secondaryLabel = (t: SecondaryIdType) =>
  t === "medicare"
    ? "Medicare card"
    : t === "birth"
      ? "Birth certificate"
      : t === "marriage"
        ? "Marriage certificate"
        : "Citizenship certificate";

export const ApplyForm = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [reference] = useState(
    () => `SI-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`,
  );

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const formatBSB = (v: string) => {
    const d = v.replace(/\D/g, "").slice(0, 6);
    return d.length > 3 ? `${d.slice(0, 3)}-${d.slice(3)}` : d;
  };

  const canProceed = (): boolean => true;

  const handleNext = () => {
    if (!canProceed()) {
      toast({ title: "Incomplete", description: "Please complete the required fields to continue." });
      return;
    }
    setStep((s) => Math.min(TOTAL_STEPS, s + 1));
  };

  const handleBack = () => setStep((s) => Math.max(1, s - 1));

  const handleSubmit = () => {
    if (!canProceed()) return;
    setSubmitted(true);
  };

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    const names = Array.from(files).map((f) => f.name);
    update("statementFiles", [...form.statementFiles, ...names]);
  };

  const intro = stepIntro[step];
  const currentStep = steps[step - 1];
  const StepIcon = currentStep.icon;
  const progress = (step / TOTAL_STEPS) * 100;
  const showPreviousAddress =
    Number(form.yearsAtAddress) > 0 && Number(form.yearsAtAddress) < 2;

  if (submitted) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="rounded-[1.25rem] border border-gray-200/80 bg-white shadow-[0_24px_48px_hsla(0,0%,8%,0.08)] px-10 py-12 text-center max-w-md w-full">
          <div className="mx-auto w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center mb-6">
            <CheckCircle2 className="w-7 h-7 text-foreground stroke-[1.5]" />
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-3">
            Application received
          </h2>
          <p className="text-[15px] text-gray-500 max-w-sm mx-auto leading-relaxed mb-2">
            We will review your application and respond within one business day.
          </p>
          <p className="text-xs text-gray-400 font-mono tracking-wide mb-8">{reference}</p>
          <Button asChild size="lg" className="rounded-lg px-8 h-11 font-medium">
            <Link to="/">Return home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col rounded-[1.25rem] border border-gray-200/80 bg-white shadow-[0_24px_48px_hsla(0,0%,8%,0.08)] overflow-hidden ${step > 1 ? "h-full" : ""}`}>
      <div className="shrink-0 px-5 pt-5 pb-4 border-b border-gray-100">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-start gap-3 min-w-0">
            <img src={logo} alt="The Squad Institute Finance" className="h-10 w-10 shrink-0" />
            <div className="min-w-0">
              <h2 className="text-lg font-semibold tracking-tight text-foreground">The Squad Institute Finance</h2>
              <p className="text-xs text-gray-500 mt-0.5">Application · ${LOAN_AMOUNT.toLocaleString("en-AU")} flat · {TOTAL_STEPS} steps</p>
            </div>
          </div>
          <span className="text-[11px] text-gray-400 tabular-nums shrink-0">{step} / {TOTAL_STEPS}</span>
        </div>

        <div className="h-px bg-gray-100 relative mb-4">
          <div
            className="absolute left-0 top-0 h-px bg-foreground transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between gap-1">
          {steps.map((s) => {
            const done = s.id < step;
            const current = s.id === step;
            const Icon = s.icon;
            return (
              <div
                key={s.id}
                className={`flex flex-col items-center flex-1 min-w-0 transition-opacity duration-300 ${!done && !current ? "opacity-30" : ""}`}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center mb-1 transition-colors duration-300 ${
                    done
                      ? "bg-foreground text-background"
                      : current
                        ? "border border-foreground text-foreground"
                        : "border border-gray-200 text-gray-400"
                  }`}
                >
                  {done ? (
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  ) : (
                    <Icon className="w-3 h-3 stroke-[1.5]" />
                  )}
                </div>
                <span
                  className={`text-[9px] tracking-wide truncate w-full text-center ${current ? "font-medium text-foreground" : "text-gray-400"}`}
                >
                  {s.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="shrink-0 px-5 py-3 border-b border-gray-50 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg border border-gray-100 bg-gray-50/50 flex items-center justify-center shrink-0">
          <StepIcon className="w-3.5 h-3.5 text-foreground stroke-[1.5]" />
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold tracking-tight text-foreground">{intro.title}</h3>
          <p className="text-xs text-gray-500 truncate">{intro.subtitle}</p>
        </div>
      </div>

      <div className={`px-5 py-4 ${step > 1 ? "flex-1 min-h-0 overflow-hidden" : ""}`}>
        {step === 1 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-3 content-start">
            <Field label="Full name" required>
              <Input className="h-9 py-1.5 text-sm" value={form.fullName} onChange={(e) => update("fullName", e.target.value)} placeholder="Alex Morgan" maxLength={100} />
            </Field>
            <Field label="Email" required>
              <Input className="h-9 py-1.5 text-sm" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@example.com" maxLength={120} />
            </Field>
            <Field label="Mobile" required>
              <Input className="h-9 py-1.5 text-sm" type="tel" value={form.mobile} onChange={(e) => update("mobile", e.target.value)} placeholder="04XX XXX XXX" maxLength={20} />
            </Field>
            <Field label="Date of birth" required>
              <Input className="h-9 py-1.5 text-sm" type="date" value={form.dob} onChange={(e) => update("dob", e.target.value)} />
            </Field>
            <Field label="Relationship status" required>
              <Select value={form.maritalStatus} onValueChange={(v) => update("maritalStatus", v)}>
                <SelectTrigger className="h-9 py-1.5 text-sm"><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent>
                  {["Single", "Married", "De facto", "Separated", "Divorced", "Widowed"].map((t) => (
                    <SelectItem key={t} value={t}>{t}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
            <Field label="Dependents">
              <Input className="h-9 py-1.5 text-sm" type="number" min={0} max={20} value={form.dependents} onChange={(e) => update("dependents", e.target.value)} placeholder="0" />
            </Field>
            <Field label="Current address" required className="col-span-2 md:col-span-3">
              <AddressAutocomplete className="h-9 py-1.5 text-sm" value={form.address} onChange={(v) => update("address", v)} placeholder="Start typing your address" />
            </Field>
            <Field label="Years at address" required className="col-span-1 max-w-[9rem]">
              <Input className="h-9 py-1.5 text-sm" type="number" min={0} step="0.5" value={form.yearsAtAddress} onChange={(e) => update("yearsAtAddress", e.target.value)} placeholder="3" />
            </Field>
            {showPreviousAddress && (
              <Field label="Previous address" required hint="Less than 2 years at current address" className="col-span-2 md:col-span-3">
                <AddressAutocomplete className="h-9 py-1.5 text-sm" value={form.previousAddress} onChange={(v) => update("previousAddress", v)} placeholder="Previous address" />
              </Field>
            )}
          </div>
        )}

        {step === 2 && (
          <div className="h-full flex flex-col gap-3 min-h-0">
            <RadioGroup
              value={form.primaryIdType}
              onValueChange={(v) => update("primaryIdType", v as PrimaryIdType)}
              className="grid grid-cols-3 gap-2 shrink-0"
            >
              <DocTile compact selected={form.primaryIdType === "passport"} value="passport" title="Passport" sub="Any country" />
              <DocTile compact selected={form.primaryIdType === "licence"} value="licence" title="Licence" sub="Australian" />
              <DocTile compact selected={form.primaryIdType === "immicard"} value="immicard" title="ImmiCard" sub="Home Affairs" />
            </RadioGroup>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-2 shrink-0">
              {form.primaryIdType === "passport" && (
                <>
                  <Field label="Passport number" required className="col-span-2 md:col-span-1">
                    <Input className="h-9 py-1.5 text-sm" value={form.primaryPassportNumber} onChange={(e) => update("primaryPassportNumber", e.target.value)} maxLength={30} />
                  </Field>
                  <Field label="Passport expiry date">
                    <Input className="h-9 py-1.5 text-sm" type="date" value={form.primaryPassportExpiry} onChange={(e) => update("primaryPassportExpiry", e.target.value)} />
                  </Field>
                  <Field label="Full name on passport" required className="col-span-2 md:col-span-3">
                    <Input className="h-9 py-1.5 text-sm" value={form.primaryPassportFullName} onChange={(e) => update("primaryPassportFullName", e.target.value)} maxLength={100} />
                  </Field>
                </>
              )}
              {form.primaryIdType === "licence" && (
                <>
                  <Field label="Driver's licence number" required>
                    <Input className="h-9 py-1.5 text-sm" value={form.primaryLicenceNumber} onChange={(e) => update("primaryLicenceNumber", e.target.value)} maxLength={30} />
                  </Field>
                  <Field label="Driver's licence card number" required>
                    <Input className="h-9 py-1.5 text-sm" value={form.primaryLicenceCardNumber} onChange={(e) => update("primaryLicenceCardNumber", e.target.value)} maxLength={30} />
                  </Field>
                  <Field label="Driver's licence expiry">
                    <Input className="h-9 py-1.5 text-sm" type="date" value={form.primaryLicenceExpiry} onChange={(e) => update("primaryLicenceExpiry", e.target.value)} />
                  </Field>
                  <Field label="Driver's licence issue state">
                    <Select value={form.primaryLicenceState} onValueChange={(v) => update("primaryLicenceState", v)}>
                      <SelectTrigger className="h-9 py-1.5 text-sm"><SelectValue placeholder="Select" /></SelectTrigger>
                      <SelectContent>
                        {AU_STATES.map((s) => (
                          <SelectItem key={s} value={s}>{s}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field label="Driver's licence type">
                    <Select value={form.primaryLicenceType} onValueChange={(v) => update("primaryLicenceType", v)}>
                      <SelectTrigger className="h-9 py-1.5 text-sm"><SelectValue placeholder="Select" /></SelectTrigger>
                      <SelectContent>
                        {LICENCE_TYPES.map((t) => (
                          <SelectItem key={t} value={t}>{t}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </Field>
                </>
              )}
              {form.primaryIdType === "immicard" && (
                <>
                  <Field label="ImmiCard number" required className="col-span-2 md:col-span-1">
                    <Input className="h-9 py-1.5 text-sm" value={form.primaryImmicardNumber} onChange={(e) => update("primaryImmicardNumber", e.target.value)} maxLength={30} />
                  </Field>
                  <Field label="ImmiCard expiry date">
                    <Input className="h-9 py-1.5 text-sm" type="date" value={form.primaryImmicardExpiry} onChange={(e) => update("primaryImmicardExpiry", e.target.value)} />
                  </Field>
                  <Field label="Full name on ImmiCard" required className="col-span-2 md:col-span-3">
                    <Input className="h-9 py-1.5 text-sm" value={form.primaryImmicardFullName} onChange={(e) => update("primaryImmicardFullName", e.target.value)} maxLength={100} />
                  </Field>
                </>
              )}
            </div>

            <div className="grid grid-cols-3 gap-2 flex-1 min-h-0 content-start">
              <FileUpload compact icon={Image} label="Front" value={form.primaryFrontFile} onChange={(name) => update("primaryFrontFile", name)} />
              <FileUpload compact icon={Image} label="Back" value={form.primaryBackFile} onChange={(name) => update("primaryBackFile", name)} />
              <FileUpload compact icon={Camera} label="Selfie" value={form.primarySelfieFile} onChange={(name) => update("primarySelfieFile", name)} />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="h-full flex flex-col gap-3 min-h-0">
            <RadioGroup
              value={form.secondaryIdType}
              onValueChange={(v) => update("secondaryIdType", v as SecondaryIdType)}
              className="grid grid-cols-2 gap-2 shrink-0"
            >
              <DocTile compact selected={form.secondaryIdType === "medicare"} value="medicare" title="Medicare" sub="Front only" />
              <DocTile compact selected={form.secondaryIdType === "birth"} value="birth" title="Birth cert." sub="Front only" />
              <DocTile compact selected={form.secondaryIdType === "marriage"} value="marriage" title="Marriage cert." sub="Front only" />
              <DocTile compact selected={form.secondaryIdType === "citizenship"} value="citizenship" title="Citizenship" sub="Front only" />
            </RadioGroup>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-2 shrink-0">
              {form.secondaryIdType === "medicare" && (
                <>
                  <Field label="Medicare card number" required>
                    <Input className="h-9 py-1.5 text-sm" value={form.secondaryMedicareNumber} onChange={(e) => update("secondaryMedicareNumber", e.target.value)} maxLength={30} />
                  </Field>
                  <Field label="Full name on Medicare card" required>
                    <Input className="h-9 py-1.5 text-sm" value={form.secondaryMedicareFullName} onChange={(e) => update("secondaryMedicareFullName", e.target.value)} maxLength={100} />
                  </Field>
                  <Field label="Medicare expiry date">
                    <Input className="h-9 py-1.5 text-sm" type="date" value={form.secondaryMedicareExpiry} onChange={(e) => update("secondaryMedicareExpiry", e.target.value)} />
                  </Field>
                  <Field label="Medicare card type">
                    <Select value={form.secondaryMedicareType} onValueChange={(v) => update("secondaryMedicareType", v)}>
                      <SelectTrigger className="h-9 py-1.5 text-sm"><SelectValue placeholder="Select" /></SelectTrigger>
                      <SelectContent>
                        {MEDICARE_CARD_TYPES.map((t) => (
                          <SelectItem key={t} value={t}>{t}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field label="Medicare reference number" required>
                    <Input className="h-9 py-1.5 text-sm" value={form.secondaryMedicareReference} onChange={(e) => update("secondaryMedicareReference", e.target.value.replace(/\D/g, "").slice(0, 2))} maxLength={2} placeholder="1" />
                  </Field>
                </>
              )}
              {form.secondaryIdType !== "medicare" && (
                <Field label="Registration number" required className="col-span-2">
                  <Input className="h-9 py-1.5 text-sm" value={form.secondaryRegistrationNumber} onChange={(e) => update("secondaryRegistrationNumber", e.target.value)} maxLength={30} />
                </Field>
              )}
              <Field label="Document upload" required className={form.secondaryIdType === "medicare" ? "col-span-2 md:col-span-3" : "col-span-2"}>
                <FileUpload compact icon={Image} label="Front of document" value={form.secondaryFrontFile} onChange={(name) => update("secondaryFrontFile", name)} />
              </Field>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="h-full flex flex-col gap-3 min-h-0">
            <RadioGroup
              value={form.uploadMethod}
              onValueChange={(v) => update("uploadMethod", v as "upload" | "openbanking")}
              className="grid grid-cols-2 gap-2 shrink-0"
            >
              <DocTile compact selected={form.uploadMethod === "openbanking"} value="openbanking" title="Open Banking" sub="Instant · recommended" icon={Zap} />
              <DocTile compact selected={form.uploadMethod === "upload"} value="upload" title="Upload statements" sub="Last 3 months · PDF" icon={FileText} />
            </RadioGroup>

            <div className="grid grid-cols-3 gap-x-3 gap-y-2 shrink-0">
              <Field label="Institution" required className="col-span-3 md:col-span-1">
                <Select value={form.bankInstitution} onValueChange={(v) => update("bankInstitution", v)}>
                  <SelectTrigger className="h-9 py-1.5 text-sm"><SelectValue placeholder="Select" /></SelectTrigger>
                  <SelectContent>
                    {AU_BANKS.map((b) => (
                      <SelectItem key={b} value={b}>{b}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
              <Field label="BSB" required>
                <Input className="h-9 py-1.5 text-sm font-mono" value={form.bsb} onChange={(e) => update("bsb", formatBSB(e.target.value))} placeholder="000-000" maxLength={7} />
              </Field>
              <Field label="Account number" required>
                <Input className="h-9 py-1.5 text-sm font-mono" value={form.accountNumber} onChange={(e) => update("accountNumber", e.target.value.replace(/\D/g, "").slice(0, 10))} />
              </Field>
            </div>

            {form.uploadMethod === "upload" && (
              <div className="flex-1 min-h-0 flex flex-col gap-2">
                <label className="flex flex-col items-center justify-center border border-dashed border-gray-200 rounded-lg bg-gray-50/30 p-6 cursor-pointer hover:border-gray-300 transition-colors">
                  <FileText className="w-5 h-5 text-gray-400 mb-2 stroke-[1.5]" />
                  <span className="text-sm font-medium text-foreground">Upload statements</span>
                  <span className="text-[10px] text-gray-400 mt-0.5">PDF, JPG or PNG · 10MB max</span>
                  <input type="file" multiple accept=".pdf,.jpg,.jpeg,.png" className="hidden" onChange={(e) => handleFiles(e.target.files)} />
                </label>
                {form.statementFiles.length > 0 && (
                  <ul className="space-y-1">
                    {form.statementFiles.map((n, i) => (
                      <li key={i} className="flex items-center justify-between px-3 py-2 text-xs bg-gray-50/50 rounded-md border border-gray-100">
                        <div className="flex items-center gap-2 truncate">
                          <FileCheck2 className="w-3.5 h-3.5 text-gray-400 shrink-0 stroke-[1.5]" />
                          <span className="truncate text-gray-600">{n}</span>
                        </div>
                        <button type="button" className="text-[10px] text-gray-400 hover:text-foreground ml-2" onClick={() => update("statementFiles", form.statementFiles.filter((_, idx) => idx !== i))}>Remove</button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

          </div>
        )}

        {step === 5 && (
          <div className="h-full flex flex-col gap-3 min-h-0">
            <div className="space-y-2 shrink-0">
              <ReviewRow label="About you" onEdit={() => setStep(1)}>
                <span className="font-medium">{form.fullName || "—"}</span>
                <div className="text-gray-400 text-[10px] mt-0.5">{form.email || "—"} · {form.mobile || "—"}</div>
              </ReviewRow>
              <ReviewRow label="Primary ID" onEdit={() => setStep(2)}>{primaryLabel(form.primaryIdType)}</ReviewRow>
              <ReviewRow label="Secondary ID" onEdit={() => setStep(3)}>{secondaryLabel(form.secondaryIdType)}</ReviewRow>
              <ReviewRow label="Banking" onEdit={() => setStep(4)}>
                {form.bankInstitution || "—"} · BSB {form.bsb || "—"}
              </ReviewRow>
            </div>

            <div className="space-y-3 shrink-0">
              <label className="flex items-start gap-2.5 text-xs cursor-pointer text-gray-600 leading-snug">
                <Checkbox checked={form.acceptTerms} onCheckedChange={(c) => update("acceptTerms", !!c)} className="mt-0.5" />
                <span>
                  I agree to the{" "}
                  <strong className="text-foreground font-medium">Privacy Policy</strong> and{" "}
                  <strong className="text-foreground font-medium">Credit Guide</strong>.
                </span>
              </label>
              <label className="flex items-start gap-2.5 text-xs cursor-pointer text-gray-600 leading-snug">
                <Checkbox checked={form.creditConsent} onCheckedChange={(c) => update("creditConsent", !!c)} className="mt-0.5" />
                <span>I authorise a credit report for assessing this application.</span>
              </label>
            </div>
          </div>
        )}
      </div>

      <div className="shrink-0 px-5 py-3 border-t border-gray-100 flex items-center justify-between gap-4 bg-gray-50/30">
        <Button
          variant="ghost"
          onClick={handleBack}
          disabled={step === 1}
          className="rounded-lg text-gray-500 h-9 px-3 hover:text-foreground disabled:opacity-20"
        >
          <ArrowLeft className="w-4 h-4 mr-1 stroke-[1.5]" />
          Back
        </Button>

        {step < TOTAL_STEPS ? (
          <Button onClick={handleNext} className="rounded-lg h-9 px-5 bg-foreground hover:bg-foreground/90 font-medium text-sm">
            Continue
            <ArrowRight className="w-4 h-4 ml-1 stroke-[1.5]" />
          </Button>
        ) : (
          <Button onClick={handleSubmit} className="rounded-lg h-9 px-5 bg-foreground hover:bg-foreground/90 font-medium text-sm">
            Submit application
          </Button>
        )}
      </div>
    </div>
  );
};

const Field = ({
  label,
  required,
  hint,
  children,
  className = "",
}: {
  label: string;
  required?: boolean;
  hint?: string;
  children: ReactNode;
  className?: string;
}) => (
  <div className={`space-y-1 ${className}`}>
    <Label className="text-xs text-gray-600 font-normal">
      {label}
      {required && <span className="text-gray-400 ml-0.5">*</span>}
    </Label>
    {hint && <p className="text-[10px] text-gray-400 -mt-0.5">{hint}</p>}
    {children}
  </div>
);

const FileUpload = ({
  icon: Icon,
  label,
  value,
  onChange,
  compact = false,
}: {
  icon: typeof Upload;
  label: string;
  value: string;
  onChange: (name: string) => void;
  compact?: boolean;
}) => (
  <label
    className={`flex items-center gap-2 border border-gray-100 rounded-lg bg-gray-50/30 cursor-pointer hover:border-gray-200 hover:bg-gray-50/60 transition-colors ${
      compact ? "px-3 py-2.5 text-xs h-full min-h-[2.75rem]" : "px-4 py-3.5 text-sm"
    }`}
  >
    <Icon className="w-3.5 h-3.5 text-gray-400 shrink-0 stroke-[1.5]" />
    <span className="flex-1 truncate text-gray-600">{value || label}</span>
    <span className="text-[10px] text-gray-400 shrink-0">{value ? "Change" : "Upload"}</span>
    <input type="file" accept="image/*,.pdf" className="hidden" onChange={(e) => onChange(e.target.files?.[0]?.name || "")} />
  </label>
);

const DocTile = ({
  selected,
  value,
  title,
  sub,
  icon: Icon,
  compact = false,
}: {
  selected: boolean;
  value: string;
  title: string;
  sub: string;
  icon?: typeof Zap;
  compact?: boolean;
}) => (
  <label
    className={`flex items-center justify-between gap-2 border rounded-lg cursor-pointer transition-all ${
      compact ? "px-3 py-2.5" : "px-4 py-3.5"
    } ${selected ? "border-foreground bg-gray-50/50" : "border-gray-100 bg-white hover:border-gray-200"}`}
  >
    <RadioGroupItem value={value} className="sr-only" />
    <div className="flex items-center gap-2 min-w-0">
      {Icon && <Icon className={`w-3.5 h-3.5 shrink-0 stroke-[1.5] ${selected ? "text-foreground" : "text-gray-400"}`} />}
      <div className="min-w-0">
        <div className={`font-medium text-foreground tracking-tight ${compact ? "text-xs" : "text-sm"}`}>{title}</div>
        {sub && <div className="text-[10px] text-gray-400 truncate">{sub}</div>}
      </div>
    </div>
    <div className={`w-3.5 h-3.5 rounded-full border shrink-0 flex items-center justify-center ${selected ? "border-foreground bg-foreground" : "border-gray-300"}`}>
      {selected && <div className="w-1 h-1 rounded-full bg-white" />}
    </div>
  </label>
);

const ReviewRow = ({
  label,
  children,
  onEdit,
}: {
  label: string;
  children: ReactNode;
  onEdit: () => void;
}) => (
  <div className="flex items-start justify-between gap-3 px-3 py-2.5 bg-gray-50/40 rounded-lg border border-gray-50">
    <div className="flex-1 min-w-0">
      <div className="text-[9px] uppercase tracking-[0.12em] text-gray-400 mb-0.5">{label}</div>
      <div className="text-xs text-foreground">{children}</div>
    </div>
    <button type="button" onClick={onEdit} className="text-[10px] text-gray-500 hover:text-foreground transition-colors shrink-0">
      Edit
    </button>
  </div>
);
