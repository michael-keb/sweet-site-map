import { LegalPage } from "@/components/LegalPage";
import dvsNoticeHtml from "@/content/policies/dvs-notice.html?raw";

const DvsNotice = () => (
  <LegalPage eyebrow="Privacy" title="DVS Collection Notice">
    <div dangerouslySetInnerHTML={{ __html: dvsNoticeHtml }} />
  </LegalPage>
);

export default DvsNotice;
