import { LegalPage, PolicyContent } from "@/components/LegalPage";
import financialHardshipHtml from "@/content/policies/financial-hardship.html?raw";

const FinancialHardship = () => (
  <LegalPage eyebrow="Support" title="Financial Hardship Assistance">
    <PolicyContent html={financialHardshipHtml} />
  </LegalPage>
);

export default FinancialHardship;
