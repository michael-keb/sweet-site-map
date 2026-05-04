import { LegalPage } from "@/components/LegalPage";
import { PolicyDownloadBanner } from "@/components/PolicyDownloadBanner";
import dvsNoticeHtml from "@/content/policies/dvs-notice.html?raw";

const DvsNotice = () => (
  <LegalPage eyebrow="Privacy" title="DVS Collection Notice">
    <PolicyDownloadBanner href="/policies/dvs-collection-notice-v1.docx" />
    <div dangerouslySetInnerHTML={{ __html: dvsNoticeHtml }} />
  </LegalPage>
);

export default DvsNotice;
