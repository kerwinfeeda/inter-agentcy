import DocsContent from "@/components/docs/DocsContent";
import DocsNav from "@/components/docs/DocsNav";
import Callout from "@/components/docs/Callout";
import { getPrevNext } from "@/lib/docs-nav";

export default function DataProtection() {
  const { prev, next } = getPrevNext("/docs/compliance/data-protection");

  return (
    <DocsContent>
      <h1>Data Protection</h1>
      <p className="subtitle">
        Inter Agentcy takes data protection seriously. With GDPR as our baseline and enterprise-grade security throughout, your data and your clients&apos; data are protected at every level.
      </p>

      <h2>GDPR Baseline</h2>
      <p>
        As a European-headquartered platform, Inter Agentcy is fully compliant with the General Data Protection Regulation (GDPR). This applies to all users worldwide, not just those in the EU — meaning everyone benefits from the highest standard of data protection.
      </p>
      <ul>
        <li><strong>Lawful basis for processing:</strong> We process data only with legitimate legal grounds — consent, contract performance, or legitimate interest</li>
        <li><strong>Data minimization:</strong> We collect only the data necessary for the platform to function</li>
        <li><strong>Purpose limitation:</strong> Data collected for one purpose is not repurposed without consent</li>
        <li><strong>Storage limitation:</strong> Data is retained only as long as needed, with clear retention policies</li>
      </ul>

      <h2>Consent for Player Data</h2>
      <p>
        Player data is particularly sensitive in the football agent context. Inter Agentcy implements a robust consent framework:
      </p>
      <ul>
        <li><strong>Explicit consent:</strong> Players must provide clear, affirmative consent before their data is stored or shared on the platform</li>
        <li><strong>Granular permissions:</strong> Players control exactly what data is visible — personal details, performance stats, contract information, and medical data each have separate consent toggles</li>
        <li><strong>Consent withdrawal:</strong> Players can withdraw consent at any time, and their data will be removed from active use within 30 days</li>
        <li><strong>Minor protection:</strong> Enhanced safeguards for players under 18, including parental/guardian consent requirements</li>
      </ul>

      <Callout type="warning" title="Agent Responsibility">
        As an agent or representative, you are a data controller for your clients&apos; information. Inter Agentcy provides the tools and infrastructure for compliance, but you must ensure you have proper consent before uploading player data to the platform.
      </Callout>

      <h2>Encryption &amp; Security</h2>
      <table>
        <thead>
          <tr>
            <th>Layer</th>
            <th>Protection</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Data in Transit</strong></td>
            <td>TLS 1.3 encryption on all connections</td>
          </tr>
          <tr>
            <td><strong>Data at Rest</strong></td>
            <td>AES-256 encryption for all stored data</td>
          </tr>
          <tr>
            <td><strong>Authentication</strong></td>
            <td>Multi-factor authentication (MFA) available for all accounts</td>
          </tr>
          <tr>
            <td><strong>Access Control</strong></td>
            <td>Role-based access control (RBAC) with principle of least privilege</td>
          </tr>
          <tr>
            <td><strong>API Security</strong></td>
            <td>OAuth 2.0 with rate limiting and request signing</td>
          </tr>
          <tr>
            <td><strong>Infrastructure</strong></td>
            <td>Hosted on EU-based cloud infrastructure with SOC 2 compliance</td>
          </tr>
          <tr>
            <td><strong>Backups</strong></td>
            <td>Encrypted daily backups with geographic redundancy</td>
          </tr>
        </tbody>
      </table>

      <h2>Data Subject Rights</h2>
      <p>
        Under GDPR, all users (and players whose data is on the platform) have the following rights, which Inter Agentcy fully supports:
      </p>
      <ul>
        <li><strong>Right of Access:</strong> Request a copy of all personal data held about you — available via self-service in your account settings</li>
        <li><strong>Right to Rectification:</strong> Correct inaccurate data at any time through your profile</li>
        <li><strong>Right to Erasure:</strong> Request deletion of your data (&quot;right to be forgotten&quot;) — processed within 30 days</li>
        <li><strong>Right to Portability:</strong> Export your data in a standard machine-readable format (JSON/CSV)</li>
        <li><strong>Right to Restrict Processing:</strong> Temporarily halt processing of your data while a dispute is resolved</li>
        <li><strong>Right to Object:</strong> Object to processing based on legitimate interest — we will cease processing unless we demonstrate compelling grounds</li>
      </ul>

      <Callout type="info" title="Self-Service Data Controls">
        Most data subject rights can be exercised directly from your account settings. For complex requests or questions, our Data Protection Officer is available at privacy@interagentcy.com.
      </Callout>

      <h2>Security Audits</h2>
      <p>
        Inter Agentcy undergoes regular security assessments to ensure the platform remains secure:
      </p>
      <ul>
        <li><strong>Annual penetration testing:</strong> Independent third-party security firms test our infrastructure and application for vulnerabilities</li>
        <li><strong>Continuous monitoring:</strong> 24/7 automated security monitoring for anomalous activity</li>
        <li><strong>Vulnerability disclosure program:</strong> Responsible disclosure policy for security researchers</li>
        <li><strong>SOC 2 Type II audit:</strong> Annual compliance audit covering security, availability, and confidentiality</li>
        <li><strong>GDPR compliance audit:</strong> Annual review by external data protection consultants</li>
        <li><strong>Incident response plan:</strong> Documented procedures for data breach notification within 72 hours as required by GDPR</li>
      </ul>

      <DocsNav prev={prev} next={next} />
    </DocsContent>
  );
}
