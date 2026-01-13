import Link from "next/link"
import Container from "@/components/Container"
import SectionHeader from "@/components/SectionHeader"
import { SITE, WA_PREFILL } from "@/lib/site"

const quickServices = [
  { title: "Business Cards", desc: "Clean finishing for individuals and companies." },
  { title: "Flyers & Brochures", desc: "Promotions, adverts, church and event flyers." },
  { title: "Banners", desc: "Indoor/outdoor banners, roll-ups, and backdrops." },
  { title: "Stickers & Labels", desc: "Product labels, branding stickers, packaging." },
  { title: "Posters", desc: "High-quality posters for adverts and events." },
  { title: "Design Services", desc: "We design and print — all in one place." },
]

export default function HomePage() {
  const wa = WA_PREFILL("Hi 247 Print House, I want a quote. Please assist me.")

  return (
    <>
      <section className="border-b bg-white">
        <Container>
          <div className="grid gap-10 py-14 md:grid-cols-2 md:items-center">
            <div className="space-y-5">
              <div className="inline-flex rounded-full border bg-white px-3 py-1 text-xs text-neutral-600">
                {SITE.location} · {SITE.phoneDisplay}
              </div>

              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
                {SITE.tagline}
              </h1>

              <p className="text-neutral-600">
                Printing and designing for businesses, events, and personal branding.
                Quick turnaround, sharp prints, and reliable support.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/quote"
                  className="rounded-xl bg-black px-5 py-3 text-sm font-medium text-white hover:opacity-90"
                >
                  Request a Quote
                </Link>

                <a
                  href={wa}
                  className="rounded-xl border bg-white px-5 py-3 text-sm font-medium hover:bg-neutral-50"
                >
                  Chat on WhatsApp
                </a>
              </div>

              <div className="text-sm text-neutral-500">Email: {SITE.email}</div>
            </div>

            <div className="rounded-3xl border bg-neutral-50 p-6">
              <div className="grid gap-4">
                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <div className="text-sm font-semibold">How it works</div>
                  <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-neutral-600">
                    <li>Send your details / design</li>
                    <li>We confirm price + timeline</li>
                    <li>We print with quality finishing</li>
                    <li>Pickup or delivery (if available)</li>
                  </ol>
                </div>

                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <div className="text-sm font-semibold">Why choose us</div>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-600">
                    <li>Quick turnaround</li>
                    <li>Sharp prints + clean finishing</li>
                    <li>Affordable pricing</li>
                    <li>Friendly support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <SectionHeader
            title="Top Services"
            subtitle="Anything concerning printing and designing — for business, marketing, and events."
          />

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {quickServices.map((s) => (
              <div key={s.title} className="rounded-2xl border bg-white p-5 shadow-sm">
                <div className="font-semibold">{s.title}</div>
                <div className="mt-2 text-sm text-neutral-600">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/services"
              className="rounded-xl border bg-white px-5 py-3 text-sm font-medium hover:bg-neutral-50"
            >
              View All Services
            </Link>
            <Link
              href="/portfolio"
              className="rounded-xl border bg-white px-5 py-3 text-sm font-medium hover:bg-neutral-50"
            >
              See Portfolio
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
