import DocsContent from "@/components/docs/DocsContent";
import DocsNav from "@/components/docs/DocsNav";
import Callout from "@/components/docs/Callout";
import { getPrevNext } from "@/lib/docs-nav";

export default function QuickStart() {
  const { prev, next } = getPrevNext("/docs/quick-start");

  return (
    <DocsContent>
      <h1>Quick Start Guide</h1>
      <p className="subtitle">
        Get up and running on Inter Agentcy in minutes. Follow the steps for your role to start leveraging the platform immediately.
      </p>

      <h2>For Licensed Agents</h2>
      <ol>
        <li><strong>Create your account</strong> — Sign up at interagentcy.com with your email. Select &ldquo;Licensed Agent&rdquo; as your role.</li>
        <li><strong>Verify your FIFA license</strong> — Upload your FIFA Football Agent License. Our team verifies it within 24-48 hours, unlocking full platform capabilities including contract negotiation tools.</li>
        <li><strong>Choose your plan</strong> — Start with the Free Basic tier (70:30 commission split) or upgrade to Pro (€99/mo, 85:15 split) for the full suite. Enterprise plans are available for multi-agent firms.</li>
        <li><strong>Set up your CRM</strong> — Import your existing client roster or add players manually. Set contract expiry reminders, log interactions, and organize contacts by category.</li>
        <li><strong>Explore the Deal Room</strong> — Browse the Club &amp; Transfer Market Hub to see active opportunities, connect with verified club officials, and submit player profiles.</li>
        <li><strong>Configure compliance</strong> — Set your default commission rates, upload your standard representation agreement, and enable FIFA Clearing House integration for automated payments.</li>
      </ol>

      <Callout type="tip" title="Pro Tip">
        Upload your FIFA license immediately during signup. Unverified accounts have restricted access — you won&apos;t be able to use contract tools or access the Deal Room until verification is complete.
      </Callout>

      <h2>For Scouts</h2>
      <ol>
        <li><strong>Create your account</strong> — Sign up and select &ldquo;Scout&rdquo; as your role. No FIFA license required.</li>
        <li><strong>Complete your profile</strong> — Add your scouting experience, regions of expertise, preferred positions, and any previous affiliations. A strong profile attracts agent connections.</li>
        <li><strong>Start scouting</strong> — Access the player database and scouting tools. Free tier allows 2 reports per month; upgrade to Pro ($49/mo) for 10 reports with full database access.</li>
        <li><strong>Submit reports</strong> — Use the structured scouting report template to document player observations. Include video links, statistical analysis, and your professional assessment.</li>
        <li><strong>Connect with agents</strong> — Your reports are visible to licensed agents on the platform. When an agent signs a player you scouted, you earn a finder&apos;s fee.</li>
        <li><strong>Track your earnings</strong> — Monitor finder&apos;s fees and report engagement from your dashboard. Pro and Elite tiers offer automated fee tracking.</li>
      </ol>

      <h2>For Representatives</h2>
      <ol>
        <li><strong>Create your account</strong> — Sign up and select &ldquo;Representative&rdquo; as your role.</li>
        <li><strong>Add your players</strong> — The Starter (Free) plan supports up to 5 players. Add player profiles with career details, branding assets, and sponsorship history.</li>
        <li><strong>Set up career management</strong> — Use the career planning tools to create development roadmaps, schedule media appearances, and track brand partnerships.</li>
        <li><strong>Explore sponsorship opportunities</strong> — Browse available brand partnerships and sponsorship deals relevant to your players&apos; profiles and market value.</li>
        <li><strong>Collaborate with agents</strong> — Connect with licensed agents who handle the transfer and contract side. You manage the career, they manage the deals — a perfect partnership.</li>
        <li><strong>Scale up</strong> — Upgrade to Pro ($79/mo) for up to 20 players with advanced analytics and legal consultation access.</li>
      </ol>

      <h2>For Introducers</h2>
      <ol>
        <li><strong>Create your account</strong> — Sign up and select &ldquo;Introducer&rdquo; as your role.</li>
        <li><strong>Build your profile</strong> — Highlight your network, industry connections, regions of influence, and successful past introductions.</li>
        <li><strong>Start connecting</strong> — Browse the network to identify opportunities. When you see a potential match between a player/agent and a club, create an introduction.</li>
        <li><strong>Log referrals</strong> — Use the referral logging system to document every introduction. This creates an auditable trail for commission claims.</li>
        <li><strong>Earn commissions</strong> — When your introductions lead to successful transactions, you earn referral commissions automatically tracked through the platform.</li>
        <li><strong>Upgrade for visibility</strong> — The Network plan ($39/mo) gives you a featured profile, advanced analytics, and automated payout tracking.</li>
      </ol>

      <Callout type="info" title="All Roles">
        Regardless of your role, take 10 minutes to complete your profile fully. Profiles with photos, detailed experience, and verified credentials get 5x more connection requests and opportunities on the platform.
      </Callout>

      <h2>Next Steps</h2>
      <p>Once you&apos;re set up, explore these areas to get the most from Inter Agentcy:</p>
      <ul>
        <li>Read the <strong>Platform Overview</strong> to understand how the ecosystem works</li>
        <li>Dive into the <strong>Features</strong> section for detailed guides on each tool</li>
        <li>Check the <strong>Compliance</strong> section to ensure you&apos;re fully FIFA-compliant</li>
        <li>Visit your role-specific guide in <strong>For Each Role</strong> for tailored workflows</li>
      </ul>

      <DocsNav prev={prev} next={next} />
    </DocsContent>
  );
}
