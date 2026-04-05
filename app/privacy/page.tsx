import { Metadata } from "next";
import { BUSINESS } from "@/lib/constants";
import { titleTemplate } from "@/lib/format";

export const metadata: Metadata = {
  title: titleTemplate("Privacy Policy"),
  description:
    "Privacy policy for 247 PRINT HOUSE covering personal data collection, usage, retention, security, and contact rights.",
};

export default function PrivacyPage() {
  return (
    <main id="main-content" className="bg-white">
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 sm:py-20">
        <h1 className="text-3xl font-bold tracking-tight text-brand-text sm:text-4xl">Privacy Policy</h1>
        <p className="mt-4 text-slate-700">This policy explains how {BUSINESS.displayName} handles personal information submitted through this website.</p>

        <div className="prose prose-slate mt-8 max-w-none">
          <h2>1. Who we are</h2>
          <p>
            {BUSINESS.displayName} is a printing and production company based at {BUSINESS.address}. You can contact us via {BUSINESS.email} or {BUSINESS.phoneDisplay}.
          </p>

          <h2>2. Data we collect</h2>
          <p>We may collect your name, phone number, email address, service request details, project specifications, and any message you provide through our contact or quote forms.</p>

          <h2>3. How we use data</h2>
          <p>We use submitted information to respond to enquiries, prepare quotes, process printing jobs, communicate project updates, and improve customer support.</p>

          <h2>4. Cookies and usage data</h2>
          <p>The website may collect basic technical data such as browser type, page visits, and general usage patterns to improve performance and user experience.</p>

          <h2>5. Information sharing</h2>
          <p>We do not sell personal data. Information may be shared only with service providers necessary to operate this website or fulfill your print order requirements.</p>

          <h2>6. Data retention</h2>
          <p>We retain enquiry and transaction records only as long as necessary for business operations, legal compliance, dispute resolution, and service improvement.</p>

          <h2>7. Security</h2>
          <p>We apply reasonable technical and organizational safeguards to protect personal information from unauthorized access, misuse, or disclosure.</p>

          <h2>8. Your rights</h2>
          <p>You may request access, correction, or deletion of personal data we hold about you, subject to applicable legal obligations.</p>

          <h2>9. Contact</h2>
          <p>
            For privacy enquiries, contact us at <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a> or call <a href={`tel:${BUSINESS.phoneIntl}`}>{BUSINESS.phoneDisplay}</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
