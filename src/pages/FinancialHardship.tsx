import { LegalPage } from "@/components/LegalPage";
import financialHardshipHtml from "@/content/policies/financial-hardship.html?raw";

const FinancialHardship = () => (
  <LegalPage eyebrow="Support" title="Financial Hardship Assistance">
    <div dangerouslySetInnerHTML={{ __html: financialHardshipHtml }} />
  </LegalPage>
);

export default FinancialHardship;
