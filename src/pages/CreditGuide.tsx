import { LegalPage, PolicyContent } from "@/components/LegalPage";
import creditGuideHtml from "@/content/policies/credit-guide.html?raw";

const CreditGuide = () => (
  <LegalPage eyebrow="Compliance" title="Credit Guide">
    <PolicyContent html={creditGuideHtml} />
  </LegalPage>
);

export default CreditGuide;
