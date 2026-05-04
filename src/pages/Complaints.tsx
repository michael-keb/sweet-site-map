import { LegalPage } from "@/components/LegalPage";
import { PolicyDownloadBanner } from "@/components/PolicyDownloadBanner";
import complaintsHtml from "@/content/policies/complaints.html?raw";

const Complaints = () => (
  <LegalPage eyebrow="Compliance" title="Complaints Policy">
    <PolicyDownloadBanner href="/policies/complaints-policy-v1_0.docx" />
    <div dangerouslySetInnerHTML={{ __html: complaintsHtml }} />
  </LegalPage>
);

export default Complaints;
