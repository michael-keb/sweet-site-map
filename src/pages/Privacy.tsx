import { LegalPage } from "@/components/LegalPage";
import { Link } from "react-router-dom";

const Privacy = () => (
  <LegalPage eyebrow="Privacy" title="Privacy Policy">
    <p>
      The Squad Institute Finance, a trading name of <strong>New Money Lender Pty Ltd</strong> (ABN 19 653 707 138, Australian Credit Licence 536096) ("we", "us", "our") is committed to protecting your personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).
    </p>
    <h2>Information we collect</h2>
    <p>We collect personal information necessary to assess your Buy Now Pay Later application, manage your plan, and meet our legal obligations. This may include your name, contact details, identification documents, employment and income information, banking details, proof of (or offer for) Squad Institute enrolment, and credit information.</p>
    <h2>How we use your information</h2>
    <p>We use your personal information to assess your application, verify your identity (including via the Document Verification Service), settle program fees with The Squad Institute, service your weekly or fortnightly instalment plan, comply with anti-money-laundering and credit-reporting obligations, and improve our services.</p>
    <h2>Disclosure</h2>
    <p>We may disclose your information to The Squad Institute (to confirm enrolment and settle program fees), credit reporting bodies, identity verification providers, regulators, professional advisers, and service providers who help us operate. We do not disclose personal information overseas.</p>
    <h2>Credit reporting</h2>
    <p>We handle credit information in accordance with our <Link to="/credit-reporting">Credit Reporting Policy</Link>.</p>
    <h2>Access and correction</h2>
    <p>You may request access to or correction of the personal information we hold about you by contacting our Privacy Officer at sqif@newml.com.au.</p>
    <h2>Complaints</h2>
    <p>If you believe we have breached the APPs, please contact us first via our <Link to="/complaints">Complaints Policy</Link>. If unresolved, you can complain to the Office of the Australian Information Commissioner (OAIC) at www.oaic.gov.au.</p>
    <h2>Contacting us</h2>
    <p>
      <strong>Privacy Officer</strong><br />
      The Squad Institute Finance<br />
      PO Box Q543, Queen Victoria Building, NSW 1230<br />
      Email: sqif@newml.com.au<br />
      Phone: (02) 7238 4196<br />
      Website: https://squadinstitutefinance.com.au
    </p>
  </LegalPage>
);

export default Privacy;
