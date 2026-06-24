import { LegalPage, PolicyContent } from "@/components/LegalPage";
import complaintsHtml from "@/content/policies/complaints.html?raw";

const Complaints = () => (
  <LegalPage eyebrow="Compliance" title="Complaints Policy">
    <PolicyContent html={complaintsHtml} />
  </LegalPage>
);

export default Complaints;
