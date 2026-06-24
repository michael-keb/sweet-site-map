import { LegalPage, PolicyContent } from "@/components/LegalPage";
import privacyHtml from "@/content/policies/privacy-policy.html?raw";

const Privacy = () => (
  <LegalPage eyebrow="Compliance" title="Privacy Policy">
    <PolicyContent html={privacyHtml} />
  </LegalPage>
);

export default Privacy;
