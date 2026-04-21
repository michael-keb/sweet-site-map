import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { UploadIcon } from "lucide-react";
import { SignUpData } from "@/types/signup";
import { useToast } from "@/hooks/use-toast";

interface Step4Props {
  onNext: (data: Partial<SignUpData>) => void;
  onBack: () => void;
  initialData?: Partial<SignUpData>;
}

export const Step4Documents = ({ onNext, onBack, initialData }: Step4Props) => {
  const { toast } = useToast();
  const [files, setFiles] = useState<{
    payslip?: File;
    bankStatement?: File;
    debtStatement?: File;
    centrelinkStatement?: File;
  }>(initialData?.documents || {});

  const handleFileChange = (type: keyof typeof files, file: File | null) => {
    if (file) {
      // Validate file type
      const validTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg'];
      if (!validTypes.includes(file.type)) {
        toast({
          title: "Invalid file type",
          description: "Please upload PDF, JPG, or PNG files only",
          variant: "destructive",
        });
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload files smaller than 5MB",
          variant: "destructive",
        });
        return;
      }

      setFiles((prev) => ({ ...prev, [type]: file }));
      toast({
        title: "File uploaded",
        description: `${file.name} uploaded successfully`,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if at least one required document is uploaded
    if (!files.payslip && !files.bankStatement && !files.centrelinkStatement) {
      toast({
        title: "Documents required",
        description: "Please upload at least your bank statement or payslip",
        variant: "destructive",
      });
      return;
    }

    onNext({ documents: files });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-bold mb-3 text-foreground">Document Verification</h2>
        <p className="text-muted-foreground">Almost done! We need to verify your financial snapshot</p>
      </div>

      <div className="mb-12 p-6 bg-muted/50 rounded-lg border border-border/50">
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">Privacy:</span> Documents are encrypted and stored securely per Australian Privacy Principles. Only viewed by our assessment team.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-12">
        <div className="space-y-3">
          <Label htmlFor="bankStatement" className="text-base">Bank Statement (Required)</Label>
          <p className="text-sm text-muted-foreground">
            Last 1-2 months - You can redact personal spending, we only need income/debts
          </p>
          <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-all duration-200 cursor-pointer">
            <input
              id="bankStatement"
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={(e) => handleFileChange("bankStatement", e.target.files?.[0] || null)}
              className="hidden"
            />
            <label htmlFor="bankStatement" className="cursor-pointer block">
              <UploadIcon className="h-10 w-10 mx-auto mb-3 text-muted-foreground" />
              <p className="text-sm">
                {files.bankStatement ? (
                  <span className="text-primary font-medium">{files.bankStatement.name}</span>
                ) : (
                  "Click to upload"
                )}
              </p>
              <p className="text-xs text-muted-foreground mt-2">PDF, JPG, or PNG (max 5MB)</p>
            </label>
          </div>
        </div>

        {initialData?.employmentStatus?.includes("Employed") && (
          <div className="space-y-3">
            <Label htmlFor="payslip" className="text-base">Recent Payslip</Label>
            <p className="text-sm text-muted-foreground">
              Just 1 recent payslip is fine
            </p>
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-all duration-200 cursor-pointer">
              <input
                id="payslip"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => handleFileChange("payslip", e.target.files?.[0] || null)}
                className="hidden"
              />
              <label htmlFor="payslip" className="cursor-pointer block">
                <UploadIcon className="h-10 w-10 mx-auto mb-3 text-muted-foreground" />
                <p className="text-sm">
                  {files.payslip ? (
                    <span className="text-primary font-medium">{files.payslip.name}</span>
                  ) : (
                    "Click to upload"
                  )}
                </p>
                <p className="text-xs text-muted-foreground mt-2">PDF, JPG, or PNG (max 5MB)</p>
              </label>
            </div>
          </div>
        )}

        {initialData?.hasDebts && (
          <div className="space-y-3">
            <Label htmlFor="debtStatement" className="text-base">Debt Information (Optional)</Label>
            <p className="text-sm text-muted-foreground">
              Credit card statement or list of debts
            </p>
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-all duration-200 cursor-pointer">
              <input
                id="debtStatement"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => handleFileChange("debtStatement", e.target.files?.[0] || null)}
                className="hidden"
              />
              <label htmlFor="debtStatement" className="cursor-pointer block">
                <UploadIcon className="h-10 w-10 mx-auto mb-3 text-muted-foreground" />
                <p className="text-sm">
                  {files.debtStatement ? (
                    <span className="text-primary font-medium">{files.debtStatement.name}</span>
                  ) : (
                    "Click to upload"
                  )}
                </p>
                <p className="text-xs text-muted-foreground mt-2">PDF, JPG, or PNG (max 5MB)</p>
              </label>
            </div>
          </div>
        )}

        {(initialData?.currentIncome === "Unemployed (receiving Centrelink)" || 
          initialData?.currentIncome === "Student (no income)") && (
          <div className="space-y-3">
            <Label htmlFor="centrelinkStatement" className="text-base">Centrelink Statement or Statutory Declaration</Label>
            <p className="text-sm text-muted-foreground">
              Confirming your current income situation
            </p>
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-all duration-200 cursor-pointer">
              <input
                id="centrelinkStatement"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => handleFileChange("centrelinkStatement", e.target.files?.[0] || null)}
                className="hidden"
              />
              <label htmlFor="centrelinkStatement" className="cursor-pointer block">
                <UploadIcon className="h-10 w-10 mx-auto mb-3 text-muted-foreground" />
                <p className="text-sm">
                  {files.centrelinkStatement ? (
                    <span className="text-primary font-medium">{files.centrelinkStatement.name}</span>
                  ) : (
                    "Click to upload"
                  )}
                </p>
                <p className="text-xs text-muted-foreground mt-2">PDF, JPG, or PNG (max 5MB)</p>
              </label>
            </div>
          </div>
        )}

        <div className="flex justify-between pt-8">
          <Button type="button" variant="outline" onClick={onBack} size="lg">
            Back
          </Button>
          <Button type="submit" size="lg" className="px-12">
            Submit Application
          </Button>
        </div>
      </form>
    </div>
  );
};
