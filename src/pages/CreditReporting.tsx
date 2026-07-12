import { LegalPage } from "@/components/LegalPage";
import creditReportingHtml from "@/content/policies/credit-reporting.html?raw";

const CreditReporting = () => (
  <LegalPage eyebrow="Privacy" title="Credit Reporting Policy">
    <div dangerouslySetInnerHTML={{ __html: creditReportingHtml }} />
  </LegalPage>
);

export default CreditReporting;
