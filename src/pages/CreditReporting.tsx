import { LegalPage } from "@/components/LegalPage";
import { PolicyDownloadBanner } from "@/components/PolicyDownloadBanner";
import creditReportingHtml from "@/content/policies/credit-reporting.html?raw";

const CreditReporting = () => (
  <LegalPage eyebrow="Privacy" title="Credit Reporting Policy">
    <PolicyDownloadBanner href="/policies/credit-reporting-policy-v1_0.docx" />
    <div dangerouslySetInnerHTML={{ __html: creditReportingHtml }} />
  </LegalPage>
);

export default CreditReporting;
