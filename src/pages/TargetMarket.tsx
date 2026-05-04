import { LegalPage } from "@/components/LegalPage";
import { PolicyDownloadBanner } from "@/components/PolicyDownloadBanner";
import targetMarketHtml from "@/content/policies/target-market.html?raw";

const TargetMarket = () => (
  <LegalPage eyebrow="Compliance" title="Target Market Determination">
    <PolicyDownloadBanner href="/policies/target-market-determination-v1.docx" />
    <div dangerouslySetInnerHTML={{ __html: targetMarketHtml }} />
  </LegalPage>
);

export default TargetMarket;
