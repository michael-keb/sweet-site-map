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

type FormState = {
  dob: string;
  maritalStatus: string;
  dependents: string;
  address: string;
  yearsAtAddress: string;
  previousAddress: string;
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
  uploadMethod: "upload" | "openbanking";
  bankInstitution: string;
  bsb: string;
  accountNumber: string;
  statementFiles: string[];
  acceptTerms: boolean;
  creditConsent: boolean;
};

const initialState: FormState = {
  dob: "", maritalStatus: "", dependents: "",
  address: "", yearsAtAddress: "", previousAddress: "",
  idType: "licence",
  licenceNo: "", licenceCardNo: "", licenceExpiry: "", licenceState: "", licenceType: "",
  passportNo: "", passportExpiry: "", passportName: "",
  idFrontFile: "", idBackFile: "",
  uploadMethod: "upload",
  bankInstitution: "", bsb: "", accountNumber: "", statementFiles: [],
  acceptTerms: false, creditConsent: false,
};

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

const REFERENCE = `SI-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;

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
        return !!(form.dob && form.maritalStatus && form.address && form.yearsAtAddress &&
          (Number(form.yearsAtAddress) >= 2 || form.previousAddress));
      case 2:
        return form.idType === "licence"
          ? !!(form.licenceNo && form.licenceExpiry && form.licenceState)
          : !!(form.passportNo && form.passportExpiry && form.passportName);
      case 3:
        return !!(form.bankInstitution && form.bsb.replace(/\D/g, "").length === 6 &&
          form.accountNumber.length >= 6 &&
          (form.uploadMethod === "openbanking" || form.statementFiles.length >= 3));
      case 4:
        return form.acceptTerms && form.creditConsent;
      default:
        return false;
    }
  };

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
      <DialogContent className="max-w-4xl max-h-[92vh] overflow-hidden p-0 gap-0 border-slate-200 text-[13px]">


        {submitted ? (
          <div className="bg-white">
            <div className="bg-slate-900 text-white px-10 py-6 flex items-center justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-slate-400">Squad Institute</div>
                <div className="text-base font-semibold">Career Sponsorship Facility</div>
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
                <div className="w-9 h-9 border border-slate-700 flex items-center justify-center">
                  <Landmark className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-slate-400">Squad Institute</div>
                  <div className="text-sm font-semibold">Career Sponsorship Facility — Application</div>
                </div>
              </div>
              <div className="text-right hidden sm:block">
                <div className="text-[10px] uppercase tracking-[0.25em] text-slate-400">Reference</div>
                <div className="text-xs font-mono text-slate-200">{REFERENCE}</div>
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
                      <Notice>
                        Your name and contact details have been imported from your verified profile.
                        The information below supports our responsible lending assessment under NCCP obligations.
                      </Notice>
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
                            <Input value={form.address} onChange={(e) => update("address", e.target.value)} placeholder="Start typing your address" maxLength={200} />
                          </Field>
                          {Number(form.yearsAtAddress) > 0 && Number(form.yearsAtAddress) < 2 && (
                            <Field label="Previous address (required if less than 2 years at current)" required>
                              <Input value={form.previousAddress} onChange={(e) => update("previousAddress", e.target.value)} maxLength={200} />
                            </Field>
                          )}
                        </div>
                      </FormSection>
                    </>
                  )}

                  {step === 2 && (
                    <>
                      <Notice>
                        Identity verification is conducted in accordance with the AML/CTF Act 2006 via the
                        Australian Government's Document Verification Service (DVS).
                      </Notice>
                      <FormSection title="Document type" code="2.1">
                        <RadioGroup
                          value={form.idType}
                          onValueChange={(v) => update("idType", v as "licence" | "passport")}
                          className="grid grid-cols-2 gap-3"
                        >
                          <DocTile selected={form.idType === "licence"} value="licence" title="Australian driver's licence" sub="Front & back required" />
                          <DocTile selected={form.idType === "passport"} value="passport" title="Australian passport" sub="Bio page + selfie" />
                        </RadioGroup>
                      </FormSection>

                      <FormSection title="Document details" code="2.2">
                        {form.idType === "licence" ? (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
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
                            <Field label="Licence class">
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
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                            <Field label="Passport number" required>
                              <Input value={form.passportNo} onChange={(e) => update("passportNo", e.target.value)} maxLength={20} />
                            </Field>
                            <Field label="Expiry" required>
                              <Input type="date" value={form.passportExpiry} onChange={(e) => update("passportExpiry", e.target.value)} />
                            </Field>
                            <Field label="Full name as on passport" required className="sm:col-span-2">
                              <Input value={form.passportName} onChange={(e) => update("passportName", e.target.value)} maxLength={100} />
                            </Field>
                            <FileUpload label="Passport bio page" value={form.idFrontFile} onChange={(name) => update("idFrontFile", name)} />
                            <FileUpload label="Selfie holding passport" value={form.idBackFile} onChange={(name) => update("idBackFile", name)} />
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
                            DOB {form.dob || "—"} · {form.maritalStatus || "—"} · {form.dependents || 0} dependents
                            <div className="text-slate-500 mt-0.5">{form.address}</div>
                          </ReviewRow>
                          <ReviewRow label="Identity" onEdit={() => setStep(2)}>
                            {form.idType === "licence"
                              ? `Driver's licence ${form.licenceNo} (${form.licenceState})`
                              : `Passport ${form.passportNo}`}
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
                              I have read and accept the Squad Institute Career Sponsorship Facility
                              <strong className="text-slate-900"> Terms &amp; Conditions</strong>,
                              <strong className="text-slate-900"> Privacy Policy</strong> and
                              <strong className="text-slate-900"> Responsible Lending Guidelines</strong>.
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
