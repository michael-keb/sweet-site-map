import { LegalPage } from "@/components/LegalPage";
import complaintsHtml from "@/content/policies/complaints.html?raw";

const Complaints = () => (
  <LegalPage eyebrow="Compliance" title="Complaints Policy">
    <div dangerouslySetInnerHTML={{ __html: complaintsHtml }} />
  </LegalPage>
);

export default Complaints;
