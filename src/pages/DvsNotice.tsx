import { LegalPage, PolicyContent } from "@/components/LegalPage";
import dvsNoticeHtml from "@/content/policies/dvs-notice.html?raw";

const DvsNotice = () => (
  <LegalPage eyebrow="Compliance" title="DVS Collection Notice">
    <PolicyContent html={dvsNoticeHtml} />
  </LegalPage>
);

export default DvsNotice;
