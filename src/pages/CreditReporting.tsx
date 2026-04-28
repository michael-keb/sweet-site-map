import { LegalPage } from "@/components/LegalPage";
import { Link } from "react-router-dom";

const CreditReporting = () => (
  <LegalPage eyebrow="Privacy" title="Credit Reporting Policy">
    <p>
      This Credit Reporting Policy is issued by <strong>New Money Lender Pty Ltd</strong> trading as The Squad Institute Finance (ABN 19 653 707 138, Australian Credit Licence 536096). It explains how we manage credit information and credit eligibility information in connection with our Buy Now Pay Later plans, in accordance with the Privacy Act 1988 (Cth) and the Privacy (Credit Reporting) Code.
    </p>
    <p>This policy should be read together with our <Link to="/privacy">Privacy Policy</Link>.</p>
    <h2>Information we collect</h2>
    <p>We collect credit information including identification details, the amount and type of plan sought, repayment history on your weekly or fortnightly instalments, and any defaults.</p>
    <h2>Credit reporting bodies</h2>
    <p>We may disclose your credit information to credit reporting bodies. They may include this information in reports provided to other credit providers to help assess your creditworthiness. Consistent, on-time instalment payments can strengthen your credit profile over time.</p>
    <h2>Your rights</h2>
    <p>You have the right to access and correct your credit information, request that a credit reporting body not use your information for direct marketing, and request a ban on your information in cases of suspected fraud.</p>
    <h2>Complaints</h2>
    <p>If you believe we've breached our obligations, contact us first via our <Link to="/complaints">Complaints Policy</Link>. If unresolved, you may lodge a complaint with the Office of the Australian Information Commissioner (OAIC) or the Australian Financial Complaints Authority (AFCA).</p>
    <h2>Contacting us</h2>
    <p>
      The Squad Institute Finance<br />
      PO Box Q543, Queen Victoria Building, NSW 1230<br />
      Email: sqif@newml.com.au<br />
      Phone: (02) 7238 4196
    </p>
  </LegalPage>
);

export default CreditReporting;
