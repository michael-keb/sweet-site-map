import { LegalPage, PolicyContent } from "@/components/LegalPage";
import creditReportingHtml from "@/content/policies/credit-reporting.html?raw";

const CreditReporting = () => (
  <LegalPage eyebrow="Compliance" title="Credit Reporting Policy">
    <PolicyContent html={creditReportingHtml} />
  </LegalPage>
);

export default CreditReporting;
