import { LegalPage } from "@/components/LegalPage";
import { PolicyDownloadBanner } from "@/components/PolicyDownloadBanner";
import bankFeedTermsHtml from "@/content/policies/bank-feed-terms.html?raw";

const BankFeedTerms = () => (
  <LegalPage eyebrow="Terms" title="Bank Feed Terms of Use">
    <PolicyDownloadBanner href="/policies/bank-feed-terms-of-use-v1.docx" label="Download Bank Feed Terms (DOCX)" />
    <div dangerouslySetInnerHTML={{ __html: bankFeedTermsHtml }} />
  </LegalPage>
);

export default BankFeedTerms;
