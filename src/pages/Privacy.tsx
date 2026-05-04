import { LegalPage } from "@/components/LegalPage";
import { PolicyDownloadBanner } from "@/components/PolicyDownloadBanner";
import privacyPolicyHtml from "@/content/policies/privacy-policy.html?raw";

const Privacy = () => (
  <LegalPage eyebrow="Privacy" title="Privacy Policy">
    <PolicyDownloadBanner href="/policies/privacy-policy.docx" />
    <div dangerouslySetInnerHTML={{ __html: privacyPolicyHtml }} />
  </LegalPage>
);

export default Privacy;
