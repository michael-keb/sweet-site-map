import { LegalPage } from "@/components/LegalPage";
import targetMarketHtml from "@/content/policies/target-market.html?raw";

const TargetMarket = () => (
  <LegalPage eyebrow="Compliance" title="Target Market Determination">
    <div dangerouslySetInnerHTML={{ __html: targetMarketHtml }} />
  </LegalPage>
);

export default TargetMarket;
