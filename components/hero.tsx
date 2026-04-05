import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-navy">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1800&q=80')",
        }}
        role="img"
        aria-label="Printing production materials and labels"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/70" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
        <div className="max-w-3xl text-white">
          <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-gold">
            Professional Printing in {BUSINESS.city}
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Reliable, High-Quality Printing for Businesses and Events in Accra
          </h1>
          <p className="mt-6 text-base leading-relaxed text-slate-100 sm:text-lg">
            {BUSINESS.displayName} delivers business cards, flyers, banners, stickers, and custom print jobs with fast turnaround and professional finishing.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/quote" className="rounded-md bg-brand-red px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-red-700">
              Get a Quote
            </Link>
            <a href={`tel:${BUSINESS.phoneIntl}`} className="rounded-md border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              Call Now
            </a>
          </div>

          <p className="mt-6 text-sm text-slate-200">{BUSINESS.displayName} · Awoshie Waterworks, Accra, Ghana</p>
        </div>
      </div>
    </section>
  );
}
