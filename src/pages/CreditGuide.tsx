import { LegalPage } from "@/components/LegalPage";
import { PolicyDownloadBanner } from "@/components/PolicyDownloadBanner";
import creditGuideHtml from "@/content/policies/credit-guide.html?raw";

const CreditGuide = () => (
  <LegalPage eyebrow="Compliance" title="Credit Guide">
    <PolicyDownloadBanner href="/policies/credit-guide.docx" />
    <div dangerouslySetInnerHTML={{ __html: creditGuideHtml }} />
  </LegalPage>
);

export default CreditGuide;
