import { LegalPage } from "@/components/LegalPage";

const DvsNotice = () => (
  <LegalPage eyebrow="Privacy" title="DVS Collection Notice">
    <p>This notice explains how we collect, use and store your personal information to verify your identity through the Attorney-General's Department's Document Verification Service (DVS). This only occurs with your express consent.</p>
    <h2>Why we collect this information</h2>
    <p>We are required by law (including the Anti-Money Laundering and Counter-Terrorism Financing Act 2006) to verify your identity before providing certain products and services.</p>
    <h2>How we handle your information</h2>
    <p>Information you provide is sent to the DVS Hub, administered by the Attorney-General's Department, and matched against official records. We retain copies of identity documents and verification results in accordance with our legal obligations (generally up to 7 years).</p>
    <h2>If you don't consent</h2>
    <p>You may verify your identity by alternative means (such as a selfie alongside your ID, or a video call). If we can't verify your identity, we may be unable to provide you with our services.</p>
    <h2>Other disclosures</h2>
    <p>We may disclose your information to identity-service providers, credit reporting bodies, regulators, debt collectors, and our professional advisers. We do not disclose personal information overseas.</p>
  </LegalPage>
);

export default DvsNotice;
