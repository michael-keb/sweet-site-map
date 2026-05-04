import { LegalPage } from "@/components/LegalPage";
import { PolicyDownloadBanner } from "@/components/PolicyDownloadBanner";
import websiteReviewHtml from "@/content/policies/website-review.html?raw";

const WebsiteReview = () => (
  <LegalPage eyebrow="Documentation" title="Website review (29 April 2026)">
    <PolicyDownloadBanner href="/policies/website-review-29-04-26.docx" label="Download review document (DOCX)" />
    <div dangerouslySetInnerHTML={{ __html: websiteReviewHtml }} />
  </LegalPage>
);

export default WebsiteReview;
