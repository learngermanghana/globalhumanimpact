import { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { BUSINESS } from "@/lib/constants";
import { titleTemplate } from "@/lib/format";

export const metadata: Metadata = {
  title: titleTemplate("Contact"),
  description:
    "Contact 247 PRINT HOUSE in Accra by phone, email, or WhatsApp for enquiries, custom jobs, and professional printing support.",
};

export default function ContactPage() {
  return (
    <main id="main-content" className="bg-white">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 sm:py-20">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s Discuss Your Print Project"
          description="For standard and custom print jobs, send your details and our team will respond with guidance on options, cost, and timeline."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-brand-text">Contact Details</h2>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>
                <span className="font-semibold">Phone: </span>
                <a href={`tel:${BUSINESS.phoneIntl}`} className="text-brand-red hover:underline">
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li>
                <span className="font-semibold">Email: </span>
                <a href={`mailto:${BUSINESS.email}`} className="text-brand-red hover:underline">
                  {BUSINESS.email}
                </a>
              </li>
              <li>
                <span className="font-semibold">Address: </span>
                {BUSINESS.address}
              </li>
            </ul>
            <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-md bg-brand-red px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-700">
              Chat on WhatsApp
            </a>
            <p className="mt-4 text-sm text-slate-600">Need a custom order? Share your exact requirements and we will help you plan the right print setup.</p>
          </article>

          <form className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8" aria-label="Contact form">
            <h2 className="text-xl font-bold text-brand-text">Send an Enquiry</h2>
            <div className="mt-5 grid gap-4">
              <label className="text-sm font-medium text-slate-700" htmlFor="name">
                Name
                <input id="name" name="name" type="text" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2.5 outline-none ring-brand-red focus:ring-2" />
              </label>
              <label className="text-sm font-medium text-slate-700" htmlFor="phone">
                Phone
                <input id="phone" name="phone" type="tel" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2.5 outline-none ring-brand-red focus:ring-2" />
              </label>
              <label className="text-sm font-medium text-slate-700" htmlFor="email">
                Email
                <input id="email" name="email" type="email" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2.5 outline-none ring-brand-red focus:ring-2" />
              </label>
              <label className="text-sm font-medium text-slate-700" htmlFor="message">
                Message
                <textarea id="message" name="message" rows={5} required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2.5 outline-none ring-brand-red focus:ring-2" />
              </label>
            </div>
            <button type="submit" className="mt-5 rounded-md bg-brand-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800">
              Submit Enquiry
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
