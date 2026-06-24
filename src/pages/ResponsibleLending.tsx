import { LegalPage, PolicyContent } from "@/components/LegalPage";
import responsibleLendingHtml from "@/content/policies/responsible-lending.html?raw";

const ResponsibleLending = () => (
  <LegalPage eyebrow="Compliance" title="Responsible Lending">
    <PolicyContent html={responsibleLendingHtml} />
  </LegalPage>
);

export default ResponsibleLending;
