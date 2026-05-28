import { ReactNode, useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { toast } from "@/hooks/use-toast";
import {
  User,
  Mail,
  IdCard,
  Shield,
  Briefcase,
  Landmark,
  CheckCircle2,
  Upload,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

interface Props {
  children: ReactNode;
}

type FormState = {
  // Personal
  title: string;
  firstName: string;
  middleName: string;
  lastName: string;
  maritalStatus: string;
  dependents: string;
  dob: string;
  nationality: string;
  // Contact
  email: string;
  mobile: string;
  address: string;
  yearsAtAddress: string;
  previousAddress: string;
  // Identity
  idType: "licence" | "passport";
  licenceNo: string;
  licenceCardNo: string;
  licenceExpiry: string;
  licenceState: string;
  licenceType: string;
  passportNo: string;
  passportExpiry: string;
  passportName: string;
  idFrontFile: string;
  idBackFile: string;
  // Security
  securityType: string;
  securityDescription: string;
  securityValue: string;
  // Employment
  employmentStatus: string;
  employer: string;
  jobTitle: string;
  yearsEmployed: string;
  grossIncome: string;
  // Bank
  uploadMethod: "upload" | "openbanking";
  bankInstitution: string;
  bsb: string;
  accountNumber: string;
  statementFiles: string[];
  // Review
  acceptTerms: boolean;
  creditConsent: boolean;
};

const initialState: FormState = {
  title: "", firstName: "", middleName: "", lastName: "",
  maritalStatus: "", dependents: "", dob: "", nationality: "",
  email: "", mobile: "", address: "", yearsAtAddress: "", previousAddress: "",
  idType: "licence",
  licenceNo: "", licenceCardNo: "", licenceExpiry: "", licenceState: "", licenceType: "",
  passportNo: "", passportExpiry: "", passportName: "",
  idFrontFile: "", idBackFile: "",
  securityType: "", securityDescription: "", securityValue: "",
  employmentStatus: "", employer: "", jobTitle: "", yearsEmployed: "", grossIncome: "",
  uploadMethod: "upload",
  bankInstitution: "", bsb: "", accountNumber: "", statementFiles: [],
  acceptTerms: false, creditConsent: false,
};

const steps = [
  { id: 1, label: "Personal", icon: User, time: 1 },
  { id: 2, label: "Contact", icon: Mail, time: 1 },
  { id: 3, label: "Identity", icon: IdCard, time: 2 },
  { id: 4, label: "Security", icon: Shield, time: 1 },
  { id: 5, label: "Employment", icon: Briefcase, time: 2 },
  { id: 6, label: "Bank statements", icon: Landmark, time: 2 },
  { id: 7, label: "Review", icon: CheckCircle2, time: 1 },
] as const;

const AU_BANKS = [
  "Commonwealth Bank", "Westpac", "NAB", "ANZ", "Macquarie",
  "ING", "Bendigo Bank", "Bankwest", "Suncorp", "St.George", "Other",
];

export const ApplyDialog = ({ children }: Props) => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const formatBSB = (v: string) => {
    const d = v.replace(/\D/g, "").slice(0, 6);
    return d.length > 3 ? `${d.slice(0, 3)}-${d.slice(3)}` : d;
  };

  const timeRemaining = useMemo(
    () => steps.filter((s) => s.id >= step).reduce((sum, s) => sum + s.time, 0),
    [step]
  );

  const canProceed = (): boolean => {
    switch (step) {
      case 1:
        return !!(form.title && form.firstName && form.lastName && form.dob && form.nationality && form.maritalStatus);
      case 2:
        return !!(form.email && form.mobile && form.address && form.yearsAtAddress &&
          (Number(form.yearsAtAddress) >= 2 || form.previousAddress));
      case 3:
        return form.idType === "licence"
          ? !!(form.licenceNo && form.licenceExpiry && form.licenceState)
          : !!(form.passportNo && form.passportExpiry && form.passportName);
      case 4:
        return !!(form.securityType && form.securityDescription);
      case 5:
        return !!(form.employmentStatus && form.grossIncome);
      case 6:
        return !!(form.bankInstitution && form.bsb.replace(/\D/g, "").length === 6 &&
          form.accountNumber.length >= 6 &&
          (form.uploadMethod === "openbanking" || form.statementFiles.length >= 3));
      case 7:
        return form.acceptTerms && form.creditConsent;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (!canProceed()) {
      toast({ title: "Missing details", description: "Please complete the required fields to continue." });
      return;
    }
    setStep((s) => Math.min(7, s + 1));
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
  };

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    const names = Array.from(files).map((f) => f.name);
    update("statementFiles", [...form.statementFiles, ...names]);
  };

  const Active = steps[step - 1];

  return (
    <Dialog open={open} onOpenChange={(o) => { setOpen(o); if (!o) reset(); }}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0">
        {submitted ? (
          <div className="p-10 text-center space-y-6">
            <div className="mx-auto w-14 h-14 rounded-full bg-foreground text-background flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <DialogHeader className="space-y-3">
              <DialogTitle className="text-2xl font-bold tracking-tight text-center">
                Application received
              </DialogTitle>
              <DialogDescription className="text-base text-gray-500 leading-relaxed text-center">
                Thanks {form.firstName || "—"}. Our credit team will review your application and be in touch within one business day.
              </DialogDescription>
            </DialogHeader>
            <Button onClick={() => setOpen(false)} className="mt-2">Close</Button>
          </div>
        ) : (
          <>
            <div className="p-6 pb-4 border-b">
              <DialogHeader className="space-y-2 text-left">
                <DialogTitle className="text-xl font-bold tracking-tight">
                  Career Sponsorship — Finance application
                </DialogTitle>
                <DialogDescription className="text-sm text-gray-500">
                  Step {step} of 7 · {Active.label} · ~{timeRemaining} min remaining
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 space-y-2">
                <Progress value={(step / 7) * 100} className="h-1.5" />
                <div className="hidden sm:flex justify-between text-[11px] uppercase tracking-wider text-gray-400">
                  {steps.map((s) => (
                    <span key={s.id} className={s.id === step ? "text-foreground font-medium" : ""}>
                      {s.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 space-y-5">
              {step === 1 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Title" required>
                    <Select value={form.title} onValueChange={(v) => update("title", v)}>
                      <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                      <SelectContent>
                        {["Mr", "Mrs", "Ms", "Miss", "Mx", "Dr"].map((t) => (
                          <SelectItem key={t} value={t}>{t}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
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
                  <Field label="First name" required>
                    <Input value={form.firstName} onChange={(e) => update("firstName", e.target.value)} maxLength={50} />
                  </Field>
                  <Field label="Middle name">
                    <Input value={form.middleName} onChange={(e) => update("middleName", e.target.value)} maxLength={50} />
                  </Field>
                  <Field label="Last name" required>
                    <Input value={form.lastName} onChange={(e) => update("lastName", e.target.value)} maxLength={50} />
                  </Field>
                  <Field label="Number of dependents">
                    <Input type="number" min={0} max={20} value={form.dependents} onChange={(e) => update("dependents", e.target.value)} />
                  </Field>
                  <Field label="Date of birth" required>
                    <Input type="date" value={form.dob} onChange={(e) => update("dob", e.target.value)} />
                  </Field>
                  <Field label="Nationality" required>
                    <Input value={form.nationality} onChange={(e) => update("nationality", e.target.value)} maxLength={50} />
                  </Field>
                </div>
              )}

              {step === 2 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Email" required>
                    <Input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} maxLength={255} />
                  </Field>
                  <Field label="Mobile" required>
                    <Input type="tel" value={form.mobile} onChange={(e) => update("mobile", e.target.value)} maxLength={20} />
                  </Field>
                  <Field label="Current address" required className="sm:col-span-2">
                    <Input value={form.address} onChange={(e) => update("address", e.target.value)} placeholder="Start typing your address" maxLength={200} />
                  </Field>
                  <Field label="Years at current address" required>
                    <Input type="number" min={0} step="0.5" value={form.yearsAtAddress} onChange={(e) => update("yearsAtAddress", e.target.value)} />
                  </Field>
                  {Number(form.yearsAtAddress) > 0 && Number(form.yearsAtAddress) < 2 && (
                    <Field label="Previous address" required className="sm:col-span-2">
                      <Input value={form.previousAddress} onChange={(e) => update("previousAddress", e.target.value)} maxLength={200} />
                    </Field>
                  )}
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <RadioGroup
                    value={form.idType}
                    onValueChange={(v) => update("idType", v as "licence" | "passport")}
                    className="grid grid-cols-2 gap-3"
                  >
                    <label className={`border rounded-lg p-4 cursor-pointer ${form.idType === "licence" ? "border-foreground" : ""}`}>
                      <RadioGroupItem value="licence" className="sr-only" />
                      <div className="font-medium">Driver's licence</div>
                      <div className="text-xs text-gray-500">Front & back</div>
                    </label>
                    <label className={`border rounded-lg p-4 cursor-pointer ${form.idType === "passport" ? "border-foreground" : ""}`}>
                      <RadioGroupItem value="passport" className="sr-only" />
                      <div className="font-medium">Passport</div>
                      <div className="text-xs text-gray-500">Scan & selfie</div>
                    </label>
                  </RadioGroup>

                  {form.idType === "licence" ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Licence number" required>
                        <Input value={form.licenceNo} onChange={(e) => update("licenceNo", e.target.value)} maxLength={20} />
                      </Field>
                      <Field label="Card number">
                        <Input value={form.licenceCardNo} onChange={(e) => update("licenceCardNo", e.target.value)} maxLength={20} />
                      </Field>
                      <Field label="Expiry" required>
                        <Input type="date" value={form.licenceExpiry} onChange={(e) => update("licenceExpiry", e.target.value)} />
                      </Field>
                      <Field label="Issue state" required>
                        <Select value={form.licenceState} onValueChange={(v) => update("licenceState", v)}>
                          <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                          <SelectContent>
                            {["NSW", "VIC", "QLD", "WA", "SA", "TAS", "ACT", "NT"].map((s) => (
                              <SelectItem key={s} value={s}>{s}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </Field>
                      <Field label="Licence type">
                        <Select value={form.licenceType} onValueChange={(v) => update("licenceType", v)}>
                          <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                          <SelectContent>
                            {["Full", "Provisional", "Learner"].map((s) => (
                              <SelectItem key={s} value={s}>{s}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </Field>
                      <FileUpload label="Front of licence" value={form.idFrontFile} onChange={(name) => update("idFrontFile", name)} />
                      <FileUpload label="Back of licence" value={form.idBackFile} onChange={(name) => update("idBackFile", name)} />
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Passport number" required>
                        <Input value={form.passportNo} onChange={(e) => update("passportNo", e.target.value)} maxLength={20} />
                      </Field>
                      <Field label="Expiry" required>
                        <Input type="date" value={form.passportExpiry} onChange={(e) => update("passportExpiry", e.target.value)} />
                      </Field>
                      <Field label="Full name as on passport" required className="sm:col-span-2">
                        <Input value={form.passportName} onChange={(e) => update("passportName", e.target.value)} maxLength={100} />
                      </Field>
                      <FileUpload label="Passport scan" value={form.idFrontFile} onChange={(name) => update("idFrontFile", name)} />
                      <FileUpload label="Selfie holding passport" value={form.idBackFile} onChange={(name) => update("idBackFile", name)} />
                    </div>
                  )}
                </div>
              )}

              {step === 4 && (
                <div className="space-y-4">
                  <p className="text-sm text-gray-500">
                    Security supports your application but is not always required. Tell us what you can offer.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Security type" required>
                      <Select value={form.securityType} onValueChange={(v) => update("securityType", v)}>
                        <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                        <SelectContent>
                          {["None", "Guarantor", "Vehicle", "Property", "Other"].map((s) => (
                            <SelectItem key={s} value={s}>{s}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </Field>
                    <Field label="Estimated value (AUD)">
                      <Input type="number" min={0} value={form.securityValue} onChange={(e) => update("securityValue", e.target.value)} />
                    </Field>
                    <Field label="Description" required className="sm:col-span-2">
                      <Textarea value={form.securityDescription} onChange={(e) => update("securityDescription", e.target.value)} maxLength={500} rows={3} />
                    </Field>
                  </div>
                </div>
              )}

              {step === 5 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Employment status" required>
                    <Select value={form.employmentStatus} onValueChange={(v) => update("employmentStatus", v)}>
                      <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                      <SelectContent>
                        {["Full-time", "Part-time", "Casual", "Self-employed", "Contract", "Unemployed", "Student"].map((s) => (
                          <SelectItem key={s} value={s}>{s}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field label="Employer">
                    <Input value={form.employer} onChange={(e) => update("employer", e.target.value)} maxLength={100} />
                  </Field>
                  <Field label="Job title">
                    <Input value={form.jobTitle} onChange={(e) => update("jobTitle", e.target.value)} maxLength={100} />
                  </Field>
                  <Field label="Years employed">
                    <Input type="number" min={0} step="0.5" value={form.yearsEmployed} onChange={(e) => update("yearsEmployed", e.target.value)} />
                  </Field>
                  <Field label="Gross annual income (AUD)" required className="sm:col-span-2">
                    <Input type="number" min={0} value={form.grossIncome} onChange={(e) => update("grossIncome", e.target.value)} />
                  </Field>
                </div>
              )}

              {step === 6 && (
                <div className="space-y-5">
                  <RadioGroup
                    value={form.uploadMethod}
                    onValueChange={(v) => update("uploadMethod", v as "upload" | "openbanking")}
                    className="grid grid-cols-2 gap-3"
                  >
                    <label className={`border rounded-lg p-4 cursor-pointer ${form.uploadMethod === "upload" ? "border-foreground" : ""}`}>
                      <RadioGroupItem value="upload" className="sr-only" />
                      <div className="font-medium">Upload PDFs</div>
                      <div className="text-xs text-gray-500">Last 3 months</div>
                    </label>
                    <label className={`border rounded-lg p-4 cursor-pointer ${form.uploadMethod === "openbanking" ? "border-foreground" : ""}`}>
                      <RadioGroupItem value="openbanking" className="sr-only" />
                      <div className="font-medium">Connect bank</div>
                      <div className="text-xs text-gray-500">Open Banking (CDR)</div>
                    </label>
                  </RadioGroup>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Bank" required>
                      <Select value={form.bankInstitution} onValueChange={(v) => update("bankInstitution", v)}>
                        <SelectTrigger><SelectValue placeholder="Select bank" /></SelectTrigger>
                        <SelectContent>
                          {AU_BANKS.map((b) => <SelectItem key={b} value={b}>{b}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </Field>
                    <Field label="BSB" required>
                      <Input value={form.bsb} onChange={(e) => update("bsb", formatBSB(e.target.value))} placeholder="XXX-XXX" maxLength={7} />
                    </Field>
                    <Field label="Account number" required className="sm:col-span-2">
                      <Input value={form.accountNumber} onChange={(e) => update("accountNumber", e.target.value.replace(/\D/g, "").slice(0, 10))} />
                    </Field>
                  </div>

                  {form.uploadMethod === "upload" && (
                    <div>
                      <Label className="text-sm">Statements (min. 3 months)</Label>
                      <label className="mt-2 flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-8 cursor-pointer hover:border-foreground transition-colors">
                        <Upload className="w-6 h-6 text-gray-400 mb-2" />
                        <span className="text-sm">Drag & drop or choose files</span>
                        <span className="text-xs text-gray-400 mt-1">PDF, JPG, PNG · max 10MB each</span>
                        <input type="file" multiple accept=".pdf,.jpg,.jpeg,.png" className="hidden" onChange={(e) => handleFiles(e.target.files)} />
                      </label>
                      {form.statementFiles.length > 0 && (
                        <ul className="mt-3 space-y-1 text-sm">
                          {form.statementFiles.map((n, i) => (
                            <li key={i} className="flex items-center justify-between border rounded px-3 py-2">
                              <span className="truncate">{n}</span>
                              <button
                                type="button"
                                className="text-xs text-gray-500 hover:text-foreground"
                                onClick={() => update("statementFiles", form.statementFiles.filter((_, idx) => idx !== i))}
                              >Remove</button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                  <p className="text-xs text-gray-500">
                    Your bank statements are encrypted and used only to assess your application.
                  </p>
                </div>
              )}

              {step === 7 && (
                <div className="space-y-5">
                  <ReviewBlock title="Personal" onEdit={() => setStep(1)}>
                    {[form.title, form.firstName, form.middleName, form.lastName].filter(Boolean).join(" ")} · DOB {form.dob} · {form.nationality}
                  </ReviewBlock>
                  <ReviewBlock title="Contact" onEdit={() => setStep(2)}>
                    {form.email} · {form.mobile}<br />{form.address}
                  </ReviewBlock>
                  <ReviewBlock title="Identity" onEdit={() => setStep(3)}>
                    {form.idType === "licence" ? `Licence ${form.licenceNo} (${form.licenceState})` : `Passport ${form.passportNo}`}
                  </ReviewBlock>
                  <ReviewBlock title="Security" onEdit={() => setStep(4)}>
                    {form.securityType} {form.securityValue && `· $${form.securityValue}`}
                  </ReviewBlock>
                  <ReviewBlock title="Employment" onEdit={() => setStep(5)}>
                    {form.employmentStatus} {form.employer && `· ${form.employer}`} · ${form.grossIncome}/yr
                  </ReviewBlock>
                  <ReviewBlock title="Bank" onEdit={() => setStep(6)}>
                    {form.bankInstitution} · {form.bsb} · {form.accountNumber} · {form.uploadMethod === "upload" ? `${form.statementFiles.length} files` : "Open Banking"}
                  </ReviewBlock>

                  <div className="space-y-3 pt-2 border-t">
                    <label className="flex items-start gap-3 text-sm cursor-pointer">
                      <Checkbox checked={form.acceptTerms} onCheckedChange={(c) => update("acceptTerms", !!c)} className="mt-0.5" />
                      <span>I accept the Squad Institute finance terms, privacy policy and responsible lending guidelines.</span>
                    </label>
                    <label className="flex items-start gap-3 text-sm cursor-pointer">
                      <Checkbox checked={form.creditConsent} onCheckedChange={(c) => update("creditConsent", !!c)} className="mt-0.5" />
                      <span>I consent to Squad Institute conducting a credit enquiry to assess this application.</span>
                    </label>
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 pt-2 border-t flex items-center justify-between gap-3">
              <Button variant="ghost" onClick={handleBack} disabled={step === 1}>
                <ArrowLeft className="w-4 h-4 mr-1" /> Back
              </Button>
              {step < 7 ? (
                <Button onClick={handleNext}>
                  Continue <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              ) : (
                <Button onClick={handleSubmit} disabled={!canProceed()}>Submit application</Button>
              )}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

const Field = ({ label, required, children, className = "" }: { label: string; required?: boolean; children: ReactNode; className?: string }) => (
  <div className={`space-y-1.5 ${className}`}>
    <Label className="text-sm">
      {label} {required && <span className="text-gray-400">*</span>}
    </Label>
    {children}
  </div>
);

const FileUpload = ({ label, value, onChange }: { label: string; value: string; onChange: (name: string) => void }) => (
  <div className="space-y-1.5">
    <Label className="text-sm">{label}</Label>
    <label className="flex items-center gap-2 border rounded-md px-3 py-2 cursor-pointer text-sm hover:border-foreground transition-colors">
      <Upload className="w-4 h-4 text-gray-400" />
      <span className="truncate">{value || "Choose file"}</span>
      <input type="file" accept="image/*,.pdf" className="hidden" onChange={(e) => onChange(e.target.files?.[0]?.name || "")} />
    </label>
  </div>
);

const ReviewBlock = ({ title, children, onEdit }: { title: string; children: ReactNode; onEdit: () => void }) => (
  <div className="flex items-start justify-between gap-4 border rounded-lg p-4">
    <div>
      <div className="text-xs uppercase tracking-wider text-gray-400 mb-1">{title}</div>
      <div className="text-sm">{children}</div>
    </div>
    <button type="button" onClick={onEdit} className="text-xs text-gray-500 hover:text-foreground">Edit</button>
  </div>
);
