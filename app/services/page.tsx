import { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { SERVICES } from "@/lib/constants";
import { titleTemplate } from "@/lib/format";

export const metadata: Metadata = {
  title: titleTemplate("Services"),
  description:
    "Explore professional printing services from 247 PRINT HOUSE in Accra including business cards, flyers, banners, stickers, event materials, and bulk printing.",
};

export default function ServicesPage() {
  return (
    <main id="main-content" className="bg-white">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 sm:py-20">
        <SectionHeading
          eyebrow="Our Services"
          title="Complete Printing Solutions for Businesses and Individuals"
          description="We deliver practical print solutions for marketing, branding, events, and day-to-day business operations across Accra and Ghana."
        />

        <div className="mt-10 space-y-6">
          {SERVICES.map((service) => (
            <article key={service.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-brand-text">{service.title}</h2>
              <p className="mt-3 text-slate-700">{service.longDescription}</p>
              <div className="mt-4">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-navy">Use cases</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
                  {service.useCases.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <Link href="/quote" className="mt-6 inline-flex rounded-md bg-brand-red px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700">
                Request Quote
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
