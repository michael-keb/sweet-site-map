import { LegalPage } from "@/components/LegalPage";
import privacyHtml from "@/content/policies/privacy-policy.html?raw";

const Privacy = () => (
  <LegalPage eyebrow="Compliance" title="Privacy Policy">
    <div dangerouslySetInnerHTML={{ __html: privacyHtml }} />
  </LegalPage>
);

export default Privacy;
