import { BUSINESS } from "@/lib/constants";

export function ContactStrip() {
  return (
    <section className="bg-brand-gold/15 py-8">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 text-sm text-slate-700 sm:grid-cols-2 lg:grid-cols-5 sm:px-6 lg:px-8">
        <p className="font-semibold text-brand-navy">{BUSINESS.displayName}</p>
        <p>{BUSINESS.address}</p>
        <p>
          <a href={`tel:${BUSINESS.phoneIntl}`} className="hover:text-brand-red hover:underline">
            {BUSINESS.phoneDisplay}
          </a>
        </p>
        <p>
          <a href={`mailto:${BUSINESS.email}`} className="hover:text-brand-red hover:underline">
            {BUSINESS.email}
          </a>
        </p>
        <p>
          <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-red hover:underline">
            Chat on WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}
