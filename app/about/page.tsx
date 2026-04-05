import { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { BUSINESS } from "@/lib/constants";
import { titleTemplate } from "@/lib/format";

export const metadata: Metadata = {
  title: titleTemplate("About"),
  description:
    "Learn about 247 PRINT HOUSE, a trusted printing and production company serving businesses, schools, churches, and event planners in Accra and across Ghana.",
};

export default function AboutPage() {
  return (
    <main id="main-content" className="bg-white">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 sm:py-20">
        <SectionHeading
          eyebrow="About Us"
          title="Your Trusted Printing Partner in Accra"
          description={`${BUSINESS.displayName} is a professional printing and production company focused on reliable output, clear communication, and practical delivery timelines.`}
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-brand-text">Who We Are</h2>
            <p className="mt-4 text-slate-700">
              We support businesses, event planners, schools, churches, and individuals with quality print materials that communicate clearly and strengthen their brand identity.
            </p>
            <p className="mt-4 text-slate-700">
              From business cards and brochures to banners and large-volume commercial runs, our team combines attention to detail with production efficiency.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-brand-text">Our Commitment</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
              <li>Consistent print quality and finishing</li>
              <li>Fast turnaround for urgent and scheduled jobs</li>
              <li>Responsive support throughout every project</li>
              <li>Flexible solutions for custom print requirements</li>
              <li>Service coverage for Accra and wider Ghana</li>
            </ul>
          </article>
        </div>

        <div className="mt-10 rounded-2xl bg-brand-navy p-8 text-white">
          <h2 className="text-2xl font-bold">Ready to work with us?</h2>
          <p className="mt-2 max-w-2xl text-slate-200">
            Tell us what you need and we will recommend the best print setup for your timeline and budget.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/quote" className="rounded-md bg-brand-red px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-700">
              Get a Quote
            </Link>
            <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" className="rounded-md border border-white/30 px-5 py-2.5 text-sm font-semibold hover:bg-white/10">
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
