import { ReactNode, useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { Textarea } from "@/components/ui/textarea";
import { AddressAutocomplete, type AddressComponents } from "@/components/AddressAutocomplete";
import logo from "@/assets/squad-finance-logo.png";
import {
  User,
  IdCard,
  Landmark,
  CheckCircle2,
  Upload,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Lock,
  FileCheck2,
  Check,
} from "lucide-react";

interface Props {
  children: ReactNode;
}

type PrimaryIdType = "passport" | "licence" | "immicard";
type SecondaryIdType = "medicare" | "birth" | "marriage" | "citizenship" | "other";

type FormState = {
  title: string;
  firstName: string;
  middleName: string;
  lastName: string;
  dob: string;
  maritalStatus: string;
  dependents: string;
  address: string;
  addressStreet: string;
  addressSuburb: string;
  addressState: string;
  addressPostcode: string;
  addressCountry: string;
  yearsAtAddress: string;
  previousAddress: string;
  previousAddressStreet: string;
  previousAddressSuburb: string;
  previousAddressState: string;
  previousAddressPostcode: string;
  previousAddressCountry: string;
  primaryIdType: PrimaryIdType;
  primaryPassportNumber: string;
  primaryPassportExpiry: string;
  primaryPassportFirstName: string;
  primaryPassportLastName: string;
  primaryLicenceNumber: string;
  primaryLicenceCardNumber: string;
  primaryLicenceExpiry: string;
  primaryLicenceState: string;
  primaryLicenceType: string;
  primaryLicenceFirstName: string;
  primaryLicenceLastName: string;
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
  secondaryOtherDescription: string;
  secondaryOtherFiles: string[];
  uploadMethod: "upload" | "openbanking";
  bankInstitution: string;
  bsb: string;
  accountNumber: string;
  statementFiles: string[];
  acceptTerms: boolean;
  creditConsent: boolean;
};

const initialState: FormState = {
  title: "", firstName: "", middleName: "", lastName: "",
  dob: "", maritalStatus: "", dependents: "",
  address: "", addressStreet: "", addressSuburb: "", addressState: "", addressPostcode: "", addressCountry: "Australia",
  yearsAtAddress: "", previousAddress: "",
  previousAddressStreet: "", previousAddressSuburb: "", previousAddressState: "", previousAddressPostcode: "", previousAddressCountry: "Australia",
  primaryIdType: "passport",
  primaryPassportNumber: "", primaryPassportExpiry: "", primaryPassportFirstName: "", primaryPassportLastName: "",
  primaryLicenceNumber: "", primaryLicenceCardNumber: "", primaryLicenceExpiry: "",
  primaryLicenceState: "", primaryLicenceType: "", primaryLicenceFirstName: "", primaryLicenceLastName: "",
  primaryImmicardNumber: "", primaryImmicardExpiry: "", primaryImmicardFullName: "",
  primaryFrontFile: "", primaryBackFile: "", primarySelfieFile: "",
  secondaryIdType: "medicare",
  secondaryMedicareNumber: "", secondaryMedicareFullName: "", secondaryMedicareExpiry: "",
  secondaryMedicareType: "", secondaryMedicareReference: "",
  secondaryRegistrationNumber: "",
  secondaryFrontFile: "",
  secondaryOtherDescription: "",
  secondaryOtherFiles: [],
  uploadMethod: "upload",
  bankInstitution: "", bsb: "", accountNumber: "", statementFiles: [],
  acceptTerms: false, creditConsent: false,
};

// Pre-filled applicant profile (imported from verified sign-up)
const APPLICANT_PROFILE = {
  fullName: "Alex Morgan",
  email: "alex.morgan@example.com",
  mobile: "+61 4XX XXX XXX",
};

const LOAN_AMOUNT = 20000;
const LOAN_PURPOSE = "Career Sponsorship";


const steps = [
  { id: 1, label: "Applicant details", short: "Applicant", icon: User, time: 1 },
  { id: 2, label: "Identity verification", short: "Identity", icon: IdCard, time: 2 },
  { id: 3, label: "Financial position", short: "Banking", icon: Landmark, time: 2 },
  { id: 4, label: "Declaration & submit", short: "Declaration", icon: FileCheck2, time: 1 },
] as const;

const TOTAL_STEPS = steps.length;

const AU_BANKS = [
  "Commonwealth Bank", "Westpac", "NAB", "ANZ", "Macquarie",
  "ING", "Bendigo Bank", "Bankwest", "Suncorp", "St.George", "Other",
];

const AU_STATES = ["NSW", "VIC", "QLD", "WA", "SA", "TAS", "ACT", "NT"];

const TITLES = ["Mr", "Mrs", "Miss", "Ms", "Dr"];

const LICENCE_TYPES = [
  "Full",
  "Provisional P2",
  "Provisional P1",
  "Learners",
];

const MEDICARE_CARD_TYPES = ["Green", "Yellow", "Blue"];

const OTHER_SECONDARY_ID_FORMS = [
  "Bank statement",
  "Utility bill (electricity, gas, or water)",
  "Phone or internet bill",
  "Council rates notice",
  "Lease or rental agreement",
  "Tax assessment notice (ATO)",
  "Superannuation statement",
  "Centrelink income statement",
];

const primaryLabel = (t: PrimaryIdType) =>
  t === "passport" ? "Passport" : t === "licence" ? "Driver's licence" : "ImmiCard";
const secondaryLabel = (t: SecondaryIdType) =>
  t === "medicare" ? "Medicare card"
    : t === "birth" ? "Birth certificate"
    : t === "marriage" ? "Marriage certificate"
    : t === "other" ? "Other identification"
    : "Citizenship certificate";

const REFERENCE = `SI-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;

export const ApplyDialog = ({ children }: Props) => {
  const [open, setOpen] = useState(false);
  const [acknowledged, setAcknowledged] = useState(false);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const applyAddressComponents = (c: AddressComponents) =>
    setForm((f) => ({
      ...f,
      addressStreet: c.street,
      addressSuburb: c.suburb,
      addressState: c.state,
      addressPostcode: c.postcode,
      addressCountry: c.country || "Australia",
    }));

  const applyPreviousAddressComponents = (c: AddressComponents) =>
    setForm((f) => ({
      ...f,
      previousAddressStreet: c.street,
      previousAddressSuburb: c.suburb,
      previousAddressState: c.state,
      previousAddressPostcode: c.postcode,
      previousAddressCountry: c.country || "Australia",
    }));

  const formatBSB = (v: string) => {
    const d = v.replace(/\D/g, "").slice(0, 6);
    return d.length > 3 ? `${d.slice(0, 3)}-${d.slice(3)}` : d;
  };

  const timeRemaining = useMemo(
    () => steps.filter((s) => s.id >= step).reduce((sum, s) => sum + s.time, 0),
    [step]
  );

  const canProceed = (): boolean => true;


  const handleNext = () => {
    if (!canProceed()) {
      toast({ title: "Required information missing", description: "Please complete the highlighted fields to continue." });
      return;
    }
    setStep((s) => Math.min(TOTAL_STEPS, s + 1));
  };

  const handleBack = () => setStep((s) => Math.max(1, s - 1));

  const handleSubmit = () => {
    if (!canProceed()) return;
    setSubmitted(true);
  };

  const reset = () => {
    setForm(initialState);
    setStep(1);
    setSubmitted(false);
    setAcknowledged(false);
  };

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    const names = Array.from(files).map((f) => f.name);
    update("statementFiles", [...form.statementFiles, ...names]);
  };

  const handleSecondaryOtherFiles = (files: FileList | null) => {
    if (!files) return;
    const names = Array.from(files).map((f) => f.name);
    update("secondaryOtherFiles", [...form.secondaryOtherFiles, ...names]);
  };

  const Active = steps[step - 1];

  return (
    <Dialog open={open} onOpenChange={(o) => { setOpen(o); if (!o) reset(); }}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[92vh] overflow-hidden p-0 gap-0 border-slate-200 text-[13px]">


        {!acknowledged ? (
          <div className="bg-white flex flex-col max-h-[92vh]">
            {/* Header bar */}
            <div className="bg-slate-900 text-white px-6 sm:px-8 py-5 flex items-center gap-4 border-b-4 border-amber-400">
              <img src={logo} alt="The Squad Institute Finance" className="h-9 w-9 shrink-0" />
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-slate-400">The Squad Institute Finance</div>
                <div className="text-sm font-semibold">Borrowing Caution</div>
              </div>
            </div>

            <div className="px-6 sm:px-10 py-8 overflow-y-auto">
              <h2 className="text-xl font-semibold tracking-tight text-slate-900">
                Do You Really Need This Loan Today?
              </h2>

              <div className="mt-5 space-y-4 text-[13px] text-slate-700 leading-relaxed">
                <p>
                  Taking out a loan for a small amount can be costly, and borrowing might not solve
                  your financial issues. Consider other options before making a decision:
                </p>
                <p>
                  For assistance with managing bills and debt, you can call{" "}
                  <a href="tel:1800007007" className="font-semibold text-slate-900 underline underline-offset-2">
                    1800 007 007
                  </a>{" "}
                  from anywhere in Australia to speak with a free and independent financial counsellor.
                  You might also reach out to your electricity, gas, phone, or water provider to discuss
                  a possible payment plan. If you're receiving government benefits, check with Centrelink
                  about the option of an advance payment.
                </p>
                <p>
                  Visit the Government's{" "}
                  <a
                    href="https://moneysmart.gov.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-slate-900 underline underline-offset-2"
                  >
                    MoneySmart
                  </a>{" "}
                  website for more information on how small loans work and explore alternative solutions.
                </p>
                <p className="italic text-slate-600">
                  This notice is required by the Australian Government under the National Consumer
                  Credit Protection Act 2009.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 sm:px-10 py-4 border-t border-slate-200 bg-slate-50 flex items-center justify-end gap-3">
              <Button
                variant="outline"
                onClick={() => setOpen(false)}
                className="rounded-none h-11 px-6 border-slate-300 text-slate-700 hover:bg-white"
              >
                Cancel
              </Button>
              <Button
                onClick={() => setAcknowledged(true)}
                className="rounded-none bg-slate-900 hover:bg-slate-800 h-11 px-6"
              >
                Continue <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        ) : submitted ? (
          <div className="bg-white">
            <div className="bg-slate-900 text-white px-10 py-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img src={logo} alt="The Squad Institute Finance" className="h-9 w-9 shrink-0" />
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-slate-400">The Squad Institute Finance</div>
                  <div className="text-base font-semibold">Career Sponsorship Facility</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-[10px] uppercase tracking-[0.25em] text-slate-400">Application ref.</div>
                <div className="text-sm font-mono">{REFERENCE}</div>
              </div>
            </div>
            <div className="px-10 py-12 text-center">
              <div className="mx-auto w-16 h-16 rounded-full border-2 border-slate-900 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-slate-900" />
              </div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                Application lodged
              </h2>
              <p className="mt-3 text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Your application has been received and assigned reference <span className="font-mono text-slate-900">{REFERENCE}</span>.
                Our credit assessment team will review and respond within one business day.
              </p>
              <div className="mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-slate-500">
                <Lock className="w-3 h-3" /> Transmission secured · TLS 1.3
              </div>
              <div className="mt-8">
                <Button onClick={() => setOpen(false)} className="bg-slate-900 hover:bg-slate-800 rounded-none px-8 h-11">
                  Close
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white flex flex-col max-h-[92vh]">
            {/* Header bar */}
            <div className="bg-slate-900 text-white px-6 sm:px-8 py-5 flex items-center justify-between border-b-4 border-amber-400">
              <div className="flex items-center gap-4">
                <img src={logo} alt="The Squad Institute Finance" className="h-9 w-9 shrink-0" />
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-slate-400">The Squad Institute Finance</div>
                  <div className="text-sm font-semibold">Career Sponsorship Facility — Application</div>
                </div>
              </div>
              <div className="text-right hidden sm:block">
                <div className="text-[10px] uppercase tracking-[0.25em] text-slate-400">Reference</div>
                <div className="text-xs font-mono text-slate-200">{REFERENCE}</div>
              </div>
            </div>

            {/* Fixed loan amount banner */}
            <div className="bg-amber-50 border-b border-amber-200 px-6 sm:px-10 py-3 flex flex-wrap items-center justify-between gap-2">
              <div className="text-[11px] uppercase tracking-[0.2em] text-slate-600">
                {LOAN_PURPOSE} · Loan amount (fixed)
              </div>
              <div className="text-base font-semibold text-slate-900 font-mono">
                ${LOAN_AMOUNT.toLocaleString("en-AU")} AUD
              </div>
            </div>

            <div className="flex flex-1 overflow-hidden">
              {/* Side rail */}
              <aside className="hidden md:flex w-64 bg-slate-50 border-r border-slate-200 flex-col">
                <div className="px-6 py-5 border-b border-slate-200">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-slate-500">Progress</div>
                  <div className="mt-1 text-sm font-semibold text-slate-900">Section {step} of {TOTAL_STEPS}</div>
                  <div className="text-xs text-slate-500 mt-0.5">~{timeRemaining} min remaining</div>
                </div>
                <ol className="px-3 py-4 space-y-1 flex-1">
                  {steps.map((s) => {
                    const state = s.id < step ? "done" : s.id === step ? "current" : "todo";
                    const Icon = s.icon;
                    return (
                      <li
                        key={s.id}
                        className={`flex items-center gap-3 px-3 py-2.5 text-sm border-l-2 ${
                          state === "current"
                            ? "border-amber-500 bg-white text-slate-900 font-medium"
                            : state === "done"
                            ? "border-slate-900 text-slate-700"
                            : "border-transparent text-slate-400"
                        }`}
                      >
                        <div
                          className={`w-6 h-6 flex items-center justify-center text-[10px] font-mono ${
                            state === "done"
                              ? "bg-slate-900 text-white"
                              : state === "current"
                              ? "border border-slate-900 text-slate-900"
                              : "border border-slate-300 text-slate-400"
                          }`}
                        >
                          {state === "done" ? <Check className="w-3.5 h-3.5" /> : `0${s.id}`}
                        </div>
                        <span>{s.short}</span>
                      </li>
                    );
                  })}
                </ol>
                <div className="px-6 py-4 border-t border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-[11px] text-slate-600">
                    <ShieldCheck className="w-3.5 h-3.5 text-slate-900" />
                    <span>Bank-grade encryption</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-slate-600">
                    <Lock className="w-3.5 h-3.5 text-slate-900" />
                    <span>ASIC credit licence: 000000</span>
                  </div>
                </div>
              </aside>

              {/* Main content */}
              <div className="flex-1 overflow-y-auto">

                <div className="px-6 sm:px-10 py-5 border-b border-slate-200 bg-white">
                  <div className="text-[9px] uppercase tracking-[0.25em] text-slate-500">
                    Section {String(step).padStart(2, "0")} / {String(TOTAL_STEPS).padStart(2, "0")}
                  </div>
                  <h2 className="mt-1 text-base font-semibold tracking-tight text-slate-900">{Active.label}</h2>
                  <div className="mt-3 h-px bg-slate-200 relative">
                    <div
                      className="absolute left-0 top-0 h-px bg-slate-900"
                      style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
                    />
                  </div>
                </div>


                <div className="px-6 sm:px-10 py-7 space-y-6">
                  {step === 1 && (
                    <>
                      <FormSection title="Applicant details" code="1.0">
                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-x-6 gap-y-5">
                          <Field label="Title" required>
                            <Select value={form.title} onValueChange={(v) => update("title", v)}>
                              <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                              <SelectContent>
                                {TITLES.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                              </SelectContent>
                            </Select>
                          </Field>
                          <Field label="First name" required>
                            <Input value={form.firstName} onChange={(e) => update("firstName", e.target.value)} maxLength={50} />
                          </Field>
                          <Field label="Middle name">
                            <Input value={form.middleName} onChange={(e) => update("middleName", e.target.value)} maxLength={50} />
                          </Field>
                          <Field label="Last name" required>
                            <Input value={form.lastName} onChange={(e) => update("lastName", e.target.value)} maxLength={50} />
                          </Field>
                        </div>
                        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                          <Field label="Email">
                            <Input value={APPLICANT_PROFILE.email} readOnly className="bg-slate-50 text-slate-700" />
                          </Field>
                          <Field label="Mobile">
                            <Input value={APPLICANT_PROFILE.mobile} readOnly className="bg-slate-50 text-slate-700" />
                          </Field>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-2">
                          Email and mobile are taken from your verified profile. To update them, please edit your profile.
                        </p>
                      </FormSection>
                      <FormSection title="Personal" code="1.1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                          <Field label="Date of birth" required>
                            <Input type="date" value={form.dob} onChange={(e) => update("dob", e.target.value)} />
                          </Field>
                          <Field label="Marital status" required>
                            <Select value={form.maritalStatus} onValueChange={(v) => update("maritalStatus", v)}>
                              <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                              <SelectContent>
                                {["Single", "Married", "De facto", "Separated", "Divorced", "Widowed"].map((t) => (
                                  <SelectItem key={t} value={t}>{t}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </Field>
                          <Field label="Number of dependents">
                            <Input type="number" min={0} max={20} value={form.dependents} onChange={(e) => update("dependents", e.target.value)} />
                          </Field>
                          <Field label="Years at current address" required>
                            <Input type="number" min={0} step="0.5" value={form.yearsAtAddress} onChange={(e) => update("yearsAtAddress", e.target.value)} />
                          </Field>
                        </div>
                      </FormSection>
                      <FormSection title="Residential address" code="1.2">
                        <div className="grid grid-cols-1 gap-5">
                          <Field label="Current address" required>
                            <AddressAutocomplete
                              value={form.address}
                              onChange={(v) => update("address", v)}
                              onSelectComponents={applyAddressComponents}
                              placeholder="Start typing your address"
                            />
                          </Field>
                          {form.addressStreet && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                              <Field label="Street">
                                <Input value={form.addressStreet} onChange={(e) => update("addressStreet", e.target.value)} maxLength={120} />
                              </Field>
                              <Field label="Suburb">
                                <Input value={form.addressSuburb} onChange={(e) => update("addressSuburb", e.target.value)} maxLength={80} />
                              </Field>
                              <Field label="State">
                                <Input value={form.addressState} onChange={(e) => update("addressState", e.target.value)} maxLength={40} />
                              </Field>
                              <Field label="Postcode">
                                <Input value={form.addressPostcode} onChange={(e) => update("addressPostcode", e.target.value)} maxLength={10} />
                              </Field>
                            </div>
                          )}
                          {Number(form.yearsAtAddress) > 0 && Number(form.yearsAtAddress) < 2 && (
                            <>
                              <Field label="Previous address (required if less than 2 years at current)" required>
                                <AddressAutocomplete
                                  value={form.previousAddress}
                                  onChange={(v) => update("previousAddress", v)}
                                  onSelectComponents={applyPreviousAddressComponents}
                                  placeholder="Start typing your previous address"
                                />
                              </Field>
                              {form.previousAddressStreet && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                                  <Field label="Street">
                                    <Input value={form.previousAddressStreet} onChange={(e) => update("previousAddressStreet", e.target.value)} maxLength={120} />
                                  </Field>
                                  <Field label="Suburb">
                                    <Input value={form.previousAddressSuburb} onChange={(e) => update("previousAddressSuburb", e.target.value)} maxLength={80} />
                                  </Field>
                                  <Field label="State">
                                    <Input value={form.previousAddressState} onChange={(e) => update("previousAddressState", e.target.value)} maxLength={40} />
                                  </Field>
                                  <Field label="Postcode">
                                    <Input value={form.previousAddressPostcode} onChange={(e) => update("previousAddressPostcode", e.target.value)} maxLength={10} />
                                  </Field>
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      </FormSection>
                    </>
                  )}

                  {step === 2 && (
                    <>
                      <Notice>
                        Identity verification is conducted in accordance with the AML/CTF Act 2006 via the
                        Australian Government's Document Verification Service (DVS). Please provide one
                        primary and one secondary identification document.
                      </Notice>

                      <FormSection title="Primary identification" code="2.1">
                        <RadioGroup
                          value={form.primaryIdType}
                          onValueChange={(v) => update("primaryIdType", v as PrimaryIdType)}
                          className="grid grid-cols-1 sm:grid-cols-3 gap-3"
                        >
                          <DocTile selected={form.primaryIdType === "passport"} value="passport" title="Passport" sub="Any country" />
                          <DocTile selected={form.primaryIdType === "licence"} value="licence" title="Driver's licence" sub="Australian" />
                          <DocTile selected={form.primaryIdType === "immicard"} value="immicard" title="ImmiCard" sub="Department of Home Affairs" />
                        </RadioGroup>

                        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                          {form.primaryIdType === "passport" && (
                            <>
                              <Field label="Passport number" required>
                                <Input value={form.primaryPassportNumber} onChange={(e) => update("primaryPassportNumber", e.target.value)} maxLength={30} />
                              </Field>
                              <Field label="Passport expiry date">
                                <Input type="date" value={form.primaryPassportExpiry} onChange={(e) => update("primaryPassportExpiry", e.target.value)} />
                              </Field>
                              <Field label="First name (as on passport)" required>
                                <Input value={form.primaryPassportFirstName} onChange={(e) => update("primaryPassportFirstName", e.target.value)} maxLength={50} />
                              </Field>
                              <Field label="Last name (as on passport)" required>
                                <Input value={form.primaryPassportLastName} onChange={(e) => update("primaryPassportLastName", e.target.value)} maxLength={50} />
                              </Field>
                            </>
                          )}
                          {form.primaryIdType === "licence" && (
                            <>
                              <Field label="First name (as on licence)" required>
                                <Input value={form.primaryLicenceFirstName} onChange={(e) => update("primaryLicenceFirstName", e.target.value)} maxLength={50} />
                              </Field>
                              <Field label="Last name (as on licence)" required>
                                <Input value={form.primaryLicenceLastName} onChange={(e) => update("primaryLicenceLastName", e.target.value)} maxLength={50} />
                              </Field>
                              <Field label="Driver's licence number" required>
                                <Input value={form.primaryLicenceNumber} onChange={(e) => update("primaryLicenceNumber", e.target.value)} maxLength={30} />
                              </Field>
                              <Field label="Driver's licence card number" required>
                                <Input value={form.primaryLicenceCardNumber} onChange={(e) => update("primaryLicenceCardNumber", e.target.value)} maxLength={30} />
                              </Field>
                              <Field label="Driver's licence expiry">
                                <Input type="date" value={form.primaryLicenceExpiry} onChange={(e) => update("primaryLicenceExpiry", e.target.value)} />
                              </Field>
                              <Field label="Driver's licence issue state">
                                <Select value={form.primaryLicenceState} onValueChange={(v) => update("primaryLicenceState", v)}>
                                  <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                                  <SelectContent>
                                    {AU_STATES.map((s) => (
                                      <SelectItem key={s} value={s}>{s}</SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </Field>
                              <Field label="Driver's licence type">
                                <Select value={form.primaryLicenceType} onValueChange={(v) => update("primaryLicenceType", v)}>
                                  <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
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
                              <Field label="ImmiCard number" required>
                                <Input value={form.primaryImmicardNumber} onChange={(e) => update("primaryImmicardNumber", e.target.value)} maxLength={30} />
                              </Field>
                              <Field label="ImmiCard expiry date">
                                <Input type="date" value={form.primaryImmicardExpiry} onChange={(e) => update("primaryImmicardExpiry", e.target.value)} />
                              </Field>
                              <Field label="Full name on ImmiCard" required className="sm:col-span-2">
                                <Input value={form.primaryImmicardFullName} onChange={(e) => update("primaryImmicardFullName", e.target.value)} maxLength={100} />
                              </Field>
                            </>
                          )}
                        </div>

                        <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-5">
                          <FileUpload label="Front" value={form.primaryFrontFile} onChange={(name) => update("primaryFrontFile", name)} />
                          <FileUpload label="Back" value={form.primaryBackFile} onChange={(name) => update("primaryBackFile", name)} />
                          <FileUpload label="Selfie" value={form.primarySelfieFile} onChange={(name) => update("primarySelfieFile", name)} />
                        </div>
                      </FormSection>

                      <FormSection title="Secondary identification" code="2.2">
                        <RadioGroup
                          value={form.secondaryIdType}
                          onValueChange={(v) => update("secondaryIdType", v as SecondaryIdType)}
                          className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                        >
                          <DocTile selected={form.secondaryIdType === "medicare"} value="medicare" title="Medicare card" sub="Front only" />
                          <DocTile selected={form.secondaryIdType === "birth"} value="birth" title="Australian birth certificate" sub="Front only" />
                          <DocTile selected={form.secondaryIdType === "marriage"} value="marriage" title="Australian marriage certificate" sub="Front only" />
                          <DocTile selected={form.secondaryIdType === "citizenship"} value="citizenship" title="Australian citizenship certificate" sub="Front only" />
                          <DocTile selected={form.secondaryIdType === "other"} value="other" title="Other identification" sub="Upload & describe" />
                        </RadioGroup>

                        {form.secondaryIdType === "other" ? (
                          <div className="mt-5 space-y-5">
                            <div className="border border-slate-200 bg-slate-50 px-4 py-3 text-[13px] text-slate-700 leading-relaxed">
                              <p className="font-medium text-slate-900 mb-2">Accepted forms of identification include:</p>
                              <ul className="list-disc pl-5 space-y-1">
                                {OTHER_SECONDARY_ID_FORMS.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>
                            <Field label="Description of document(s)" required className="sm:col-span-2">
                              <Textarea
                                value={form.secondaryOtherDescription}
                                onChange={(e) => update("secondaryOtherDescription", e.target.value)}
                                placeholder="e.g. Commonwealth Bank statement, March 2026"
                                rows={3}
                                maxLength={500}
                              />
                            </Field>
                            <Field label="Upload document(s)" required>
                              <label className="flex flex-col items-center justify-center border-2 border-dashed border-slate-300 bg-slate-50 p-8 cursor-pointer hover:border-slate-900 hover:bg-white transition-colors">
                                <Upload className="w-6 h-6 text-slate-400 mb-2" />
                                <span className="text-sm font-medium text-slate-900">Drag files here or click to browse</span>
                                <span className="text-[11px] text-slate-500 mt-1 uppercase tracking-wider">PDF, JPG, PNG · Max 10MB each</span>
                                <input type="file" multiple accept=".pdf,.jpg,.jpeg,.png" className="hidden" onChange={(e) => handleSecondaryOtherFiles(e.target.files)} />
                              </label>
                              {form.secondaryOtherFiles.length > 0 && (
                                <ul className="mt-4 divide-y divide-slate-200 border border-slate-200">
                                  {form.secondaryOtherFiles.map((n, i) => (
                                    <li key={i} className="flex items-center justify-between px-4 py-2.5 text-sm bg-white">
                                      <div className="flex items-center gap-2 truncate">
                                        <FileCheck2 className="w-4 h-4 text-slate-500 shrink-0" />
                                        <span className="truncate text-slate-700">{n}</span>
                                      </div>
                                      <button
                                        type="button"
                                        className="text-[11px] uppercase tracking-wider text-slate-500 hover:text-slate-900"
                                        onClick={() => update("secondaryOtherFiles", form.secondaryOtherFiles.filter((_, idx) => idx !== i))}
                                      >Remove</button>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </Field>
                          </div>
                        ) : (
                        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                          {form.secondaryIdType === "medicare" && (
                            <>
                              <Field label="Medicare card number" required>
                                <Input value={form.secondaryMedicareNumber} onChange={(e) => update("secondaryMedicareNumber", e.target.value)} maxLength={30} />
                              </Field>
                              <Field label="Full name on Medicare card" required>
                                <Input value={form.secondaryMedicareFullName} onChange={(e) => update("secondaryMedicareFullName", e.target.value)} maxLength={100} />
                              </Field>
                              <Field label="Medicare expiry date">
                                <Input type="date" value={form.secondaryMedicareExpiry} onChange={(e) => update("secondaryMedicareExpiry", e.target.value)} />
                              </Field>
                              <Field label="Medicare card type">
                                <Select value={form.secondaryMedicareType} onValueChange={(v) => update("secondaryMedicareType", v)}>
                                  <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                                  <SelectContent>
                                    {MEDICARE_CARD_TYPES.map((t) => (
                                      <SelectItem key={t} value={t}>{t}</SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </Field>
                              <Field label="Medicare reference number" required>
                                <Input value={form.secondaryMedicareReference} onChange={(e) => update("secondaryMedicareReference", e.target.value.replace(/\D/g, "").slice(0, 2))} maxLength={2} placeholder="1" />
                              </Field>
                            </>
                          )}
                          {form.secondaryIdType !== "medicare" && form.secondaryIdType !== "other" && (
                            <Field label="Registration number" required className="sm:col-span-2">
                              <Input value={form.secondaryRegistrationNumber} onChange={(e) => update("secondaryRegistrationNumber", e.target.value)} maxLength={30} />
                            </Field>
                          )}
                          <FileUpload label="Front" value={form.secondaryFrontFile} onChange={(name) => update("secondaryFrontFile", name)} />
                        </div>
                        )}
                      </FormSection>
                    </>

                  )}

                  {step === 3 && (
                    <>
                      <Notice>
                        We assess your financial position from 90 days of transaction history.
                        Connect via Open Banking (CDR) for instant verification, or upload statement PDFs.
                      </Notice>
                      <FormSection title="Verification method" code="3.1">
                        <RadioGroup
                          value={form.uploadMethod}
                          onValueChange={(v) => update("uploadMethod", v as "upload" | "openbanking")}
                          className="grid grid-cols-2 gap-3"
                        >
                          <DocTile selected={form.uploadMethod === "openbanking"} value="openbanking" title="Open Banking (CDR)" sub="Read-only · ACCC accredited" />
                          <DocTile selected={form.uploadMethod === "upload"} value="upload" title="Upload PDF statements" sub="Last 3 months minimum" />
                        </RadioGroup>
                      </FormSection>

                      <FormSection title="Account particulars" code="3.2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                          <Field label="Financial institution" required>
                            <Select value={form.bankInstitution} onValueChange={(v) => update("bankInstitution", v)}>
                              <SelectTrigger><SelectValue placeholder="Select institution" /></SelectTrigger>
                              <SelectContent>
                                {AU_BANKS.map((b) => <SelectItem key={b} value={b}>{b}</SelectItem>)}
                              </SelectContent>
                            </Select>
                          </Field>
                          <Field label="BSB" required>
                            <Input value={form.bsb} onChange={(e) => update("bsb", formatBSB(e.target.value))} placeholder="XXX-XXX" maxLength={7} className="font-mono" />
                          </Field>
                          <Field label="Account number" required className="sm:col-span-2">
                            <Input value={form.accountNumber} onChange={(e) => update("accountNumber", e.target.value.replace(/\D/g, "").slice(0, 10))} className="font-mono" />
                          </Field>
                        </div>
                      </FormSection>

                      {form.uploadMethod === "upload" && (
                        <FormSection title="Statement upload" code="3.3">
                          <label className="flex flex-col items-center justify-center border-2 border-dashed border-slate-300 bg-slate-50 p-8 cursor-pointer hover:border-slate-900 hover:bg-white transition-colors">
                            <Upload className="w-6 h-6 text-slate-400 mb-2" />
                            <span className="text-sm font-medium text-slate-900">Drag files here or click to browse</span>
                            <span className="text-[11px] text-slate-500 mt-1 uppercase tracking-wider">PDF, JPG, PNG · Max 10MB each</span>
                            <input type="file" multiple accept=".pdf,.jpg,.jpeg,.png" className="hidden" onChange={(e) => handleFiles(e.target.files)} />
                          </label>
                          {form.statementFiles.length > 0 && (
                            <ul className="mt-4 divide-y divide-slate-200 border border-slate-200">
                              {form.statementFiles.map((n, i) => (
                                <li key={i} className="flex items-center justify-between px-4 py-2.5 text-sm bg-white">
                                  <div className="flex items-center gap-2 truncate">
                                    <FileCheck2 className="w-4 h-4 text-slate-500 shrink-0" />
                                    <span className="truncate text-slate-700">{n}</span>
                                  </div>
                                  <button
                                    type="button"
                                    className="text-[11px] uppercase tracking-wider text-slate-500 hover:text-slate-900"
                                    onClick={() => update("statementFiles", form.statementFiles.filter((_, idx) => idx !== i))}
                                  >Remove</button>
                                </li>
                              ))}
                            </ul>
                          )}
                        </FormSection>
                      )}
                    </>
                  )}

                  {step === 4 && (
                    <>
                      <Notice>
                        Please review the information below. By submitting, you certify the information is true and complete.
                      </Notice>
                      <FormSection title="Application summary" code="4.1">
                        <div className="border border-slate-200 divide-y divide-slate-200">
                          <ReviewRow label="Applicant" onEdit={() => setStep(1)}>
                            {[form.title, form.firstName, form.middleName, form.lastName].filter(Boolean).join(" ") || "—"} · {APPLICANT_PROFILE.email} · {APPLICANT_PROFILE.mobile}
                            <div className="text-slate-500 mt-0.5">
                              DOB {form.dob || "—"} · {form.maritalStatus || "—"} · {form.dependents || 0} dependents
                            </div>
                            <div className="text-slate-500 mt-0.5">{form.address}</div>
                          </ReviewRow>
                          <ReviewRow label="Identity" onEdit={() => setStep(2)}>
                            Primary: {primaryLabel(form.primaryIdType)}
                            {form.primaryIdType === "passport" && (
                              <div className="text-slate-500 mt-0.5">
                                {form.primaryPassportNumber || "—"} · {[form.primaryPassportFirstName, form.primaryPassportLastName].filter(Boolean).join(" ") || "—"}
                              </div>
                            )}
                            {form.primaryIdType === "licence" && (
                              <div className="text-slate-500 mt-0.5">
                                {form.primaryLicenceNumber || "—"} · {[form.primaryLicenceFirstName, form.primaryLicenceLastName].filter(Boolean).join(" ") || "—"} · {form.primaryLicenceState || "—"} · {form.primaryLicenceType || "—"}
                              </div>
                            )}
                            {form.primaryIdType === "immicard" && (
                              <div className="text-slate-500 mt-0.5">
                                {form.primaryImmicardNumber || "—"} · {form.primaryImmicardFullName || "—"}
                              </div>
                            )}
                            <div className="text-slate-500 mt-0.5">
                              Secondary: {secondaryLabel(form.secondaryIdType)}
                              {form.secondaryIdType === "medicare"
                                ? ` · ${form.secondaryMedicareNumber || "—"} (ref ${form.secondaryMedicareReference || "—"})`
                                : form.secondaryIdType === "other"
                                  ? ` · ${form.secondaryOtherDescription || "—"} · ${form.secondaryOtherFiles.length} file(s)`
                                : ` · ${form.secondaryRegistrationNumber || "—"}`}
                            </div>
                          </ReviewRow>
                          <ReviewRow label="Banking" onEdit={() => setStep(3)}>
                            {form.bankInstitution} · BSB {form.bsb} · Acct {form.accountNumber}
                            <div className="text-slate-500 mt-0.5">
                              {form.uploadMethod === "upload" ? `${form.statementFiles.length} statement(s) uploaded` : "Open Banking authorised"}
                            </div>
                          </ReviewRow>
                        </div>
                      </FormSection>

                      <FormSection title="Declarations" code="4.2">
                        <div className="space-y-4 border border-slate-200 bg-slate-50 p-5">
                          <label className="flex items-start gap-3 text-sm cursor-pointer text-slate-700 leading-relaxed">
                            <Checkbox checked={form.acceptTerms} onCheckedChange={(c) => update("acceptTerms", !!c)} className="mt-0.5" />
                            <span>
                              I confirm that I have read and accepted the Squad Institute Finance
                              <strong className="text-slate-900"> Terms &amp; Conditions</strong>,
                              <strong className="text-slate-900"> Privacy Policy</strong> and
                              <strong className="text-slate-900"> Credit Guide</strong>.
                            </span>
                          </label>

                          <label className="flex items-start gap-3 text-sm cursor-pointer text-slate-700 leading-relaxed">
                            <Checkbox checked={form.creditConsent} onCheckedChange={(c) => update("creditConsent", !!c)} className="mt-0.5" />
                            <span>
                              I authorise Squad Institute to obtain a credit report from a credit reporting body
                              for the purpose of assessing this application, in accordance with the Privacy Act 1988.
                            </span>
                          </label>
                        </div>
                      </FormSection>
                    </>
                  )}
                </div>

                {/* Footer */}
                <div className="px-6 sm:px-10 py-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between gap-3 sticky bottom-0">
                  <Button
                    variant="ghost"
                    onClick={handleBack}
                    disabled={step === 1}
                    className="rounded-none text-slate-700 hover:text-slate-900 hover:bg-transparent disabled:opacity-30"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" /> Previous
                  </Button>
                  <div className="hidden sm:flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-slate-500">
                    <Lock className="w-3 h-3" /> Encrypted session
                  </div>
                  {step < TOTAL_STEPS ? (
                    <Button onClick={handleNext} className="rounded-none bg-slate-900 hover:bg-slate-800 h-11 px-6">
                      Continue <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button onClick={handleSubmit} disabled={!canProceed()} className="rounded-none bg-slate-900 hover:bg-slate-800 h-11 px-6">
                      Submit application
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

const Notice = ({ children }: { children: ReactNode }) => (
  <div className="border-l-2 border-amber-500 bg-amber-50/60 px-4 py-3 text-[13px] text-slate-700 leading-relaxed">
    {children}
  </div>
);

const FormSection = ({ title, code, children }: { title: string; code: string; children: ReactNode }) => (
  <section className="space-y-4">
    <div className="flex items-baseline gap-3 border-b border-slate-200 pb-2">
      <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400">{code}</span>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">{title}</h3>
    </div>
    {children}
  </section>
);

const Field = ({ label, required, children, className = "" }: { label: string; required?: boolean; children: ReactNode; className?: string }) => (
  <div className={`space-y-1.5 ${className}`}>
    <Label className="text-[11px] uppercase tracking-wider text-slate-600 font-medium">
      {label} {required && <span className="text-amber-600">*</span>}
    </Label>
    {children}
  </div>
);

const FileUpload = ({ label, value, onChange }: { label: string; value: string; onChange: (name: string) => void }) => (
  <div className="space-y-1.5">
    <Label className="text-[11px] uppercase tracking-wider text-slate-600 font-medium">{label}</Label>
    <label className="flex items-center gap-2 border border-slate-300 bg-white px-3 py-2.5 cursor-pointer text-sm hover:border-slate-900 transition-colors">
      <Upload className="w-4 h-4 text-slate-400" />
      <span className="truncate text-slate-700">{value || "Choose file"}</span>
      <input type="file" accept="image/*,.pdf" className="hidden" onChange={(e) => onChange(e.target.files?.[0]?.name || "")} />
    </label>
  </div>
);

const DocTile = ({ selected, value, title, sub }: { selected: boolean; value: string; title: string; sub: string }) => (
  <label
    className={`relative border p-4 cursor-pointer transition-colors ${
      selected ? "border-slate-900 bg-slate-50" : "border-slate-200 bg-white hover:border-slate-400"
    }`}
  >
    <RadioGroupItem value={value} className="sr-only" />
    <div className="flex items-start justify-between">
      <div>
        <div className="text-sm font-semibold text-slate-900">{title}</div>
        <div className="text-[11px] uppercase tracking-wider text-slate-500 mt-1">{sub}</div>
      </div>
      <div
        className={`w-4 h-4 rounded-full border-2 mt-0.5 ${
          selected ? "border-slate-900 bg-slate-900" : "border-slate-300"
        }`}
      />
    </div>
  </label>
);

const ReviewRow = ({ label, children, onEdit }: { label: string; children: ReactNode; onEdit: () => void }) => (
  <div className="flex items-start justify-between gap-4 px-5 py-4 bg-white">
    <div className="flex-1">
      <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-1">{label}</div>
      <div className="text-sm text-slate-900">{children}</div>
    </div>
    <button
      type="button"
      onClick={onEdit}
      className="text-[10px] uppercase tracking-[0.2em] text-slate-600 hover:text-slate-900 border-b border-slate-300 hover:border-slate-900 pb-0.5"
    >
      Edit
    </button>
  </div>
);
