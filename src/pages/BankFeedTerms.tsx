import { LegalPage } from "@/components/LegalPage";
import bankFeedTermsHtml from "@/content/policies/bank-feed-terms.html?raw";

const BankFeedTerms = () => (
  <LegalPage eyebrow="Compliance" title="Bank Feed Terms of Use">
    <div dangerouslySetInnerHTML={{ __html: bankFeedTermsHtml }} />
  </LegalPage>
);

export default BankFeedTerms;
