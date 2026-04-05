import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

export function FeaturedCta() {
  return (
    <section className="bg-brand-navy py-16 text-white sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Need Fast, Professional Printing in Accra?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-200">
          Request a quote now and our team will guide you on materials, pricing, and turnaround time for your print project.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/quote" className="rounded-md bg-brand-red px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700">
            Request a Quote
          </Link>
          <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" className="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold hover:bg-white/10">
            WhatsApp Us
          </a>
          <a href={`mailto:${BUSINESS.email}`} className="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold hover:bg-white/10">
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}
