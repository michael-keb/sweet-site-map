import { LegalPage } from "@/components/LegalPage";
import privacyPolicyHtml from "@/content/policies/privacy-policy.html?raw";

const Privacy = () => (
  <LegalPage eyebrow="Privacy" title="Privacy Policy">
    <div dangerouslySetInnerHTML={{ __html: privacyPolicyHtml }} />
  </LegalPage>
);

export default Privacy;
