import { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { titleTemplate } from "@/lib/format";

export const metadata: Metadata = {
  title: titleTemplate("Request a Quote"),
  description:
    "Request a printing quote from 247 PRINT HOUSE. Share your service type, quantity, size, deadline, and job details for a fast response.",
};

export default function QuotePage() {
  return (
    <main id="main-content" className="bg-slate-50">
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 sm:py-20">
        <SectionHeading
          eyebrow="Request Quote"
          title="Tell Us Your Print Requirements"
          description="Fill in the details below and we will provide a tailored quote for your print job."
        />

        <form className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8" aria-label="Quote request form">
          <div className="grid gap-4 sm:grid-cols-2">
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
            <label className="text-sm font-medium text-slate-700" htmlFor="service">
              Service Needed
              <select id="service" name="service" required className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 outline-none ring-brand-red focus:ring-2">
                <option value="">Select a service</option>
                <option>Business Cards</option>
                <option>Flyers & Brochures</option>
                <option>Posters & Banners</option>
                <option>Stickers & Labels</option>
                <option>Branding Materials</option>
                <option>Event Printing</option>
                <option>Bulk / Commercial Printing</option>
                <option>Custom Print Order</option>
              </select>
            </label>
            <label className="text-sm font-medium text-slate-700" htmlFor="quantity">
              Quantity
              <input id="quantity" name="quantity" type="text" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2.5 outline-none ring-brand-red focus:ring-2" />
            </label>
            <label className="text-sm font-medium text-slate-700" htmlFor="size">
              Size / Specification
              <input id="size" name="size" type="text" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2.5 outline-none ring-brand-red focus:ring-2" />
            </label>
            <label className="text-sm font-medium text-slate-700 sm:col-span-2" htmlFor="deadline">
              Deadline
              <input id="deadline" name="deadline" type="date" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2.5 outline-none ring-brand-red focus:ring-2" />
            </label>
            <label className="text-sm font-medium text-slate-700 sm:col-span-2" htmlFor="message">
              Message
              <textarea id="message" name="message" rows={5} placeholder="Share extra details such as paper type, finishing, delivery preference, or artwork readiness." className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2.5 outline-none ring-brand-red focus:ring-2" />
            </label>
          </div>
          <button type="submit" className="mt-6 rounded-md bg-brand-red px-6 py-3 text-sm font-semibold text-white hover:bg-red-700">
            Submit Quote Request
          </button>
        </form>
      </section>
    </main>
  );
}
