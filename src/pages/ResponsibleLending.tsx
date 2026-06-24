import { LegalPage } from "@/components/LegalPage";
import responsibleLendingHtml from "@/content/policies/responsible-lending.html?raw";

const ResponsibleLending = () => (
  <LegalPage eyebrow="Compliance" title="Responsible Lending">
    <div dangerouslySetInnerHTML={{ __html: responsibleLendingHtml }} />
  </LegalPage>
);

export default ResponsibleLending;
