import { Mail, Shield } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Shield className="w-12 h-12 text-[#7B8794] mx-auto mb-6" />
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-foreground-muted mb-8 max-w-lg mx-auto">
          Have questions about Inter Agentcy? We&apos;d love to hear from you. Reach out and our team will
          get back to you as soon as possible.
        </p>
        <a
          href="mailto:hello@interagentcy.com"
          className="inline-flex items-center gap-2 px-6 py-3 gradient-steel-btn text-white font-semibold rounded-xl transition-all"
        >
          <Mail className="w-5 h-5" />
          hello@interagentcy.com
        </a>
      </div>
    </div>
  );
}
