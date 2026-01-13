import Container from "@/components/Container"
import SectionHeader from "@/components/SectionHeader"
import { SITE, WA_PREFILL } from "@/lib/site"

export default function ContactPage() {
  const wa = WA_PREFILL("Hi 247 Print House, I want to ask about printing services.")

  return (
    <section className="py-12">
      <Container>
        <SectionHeader
          title="Contact"
          subtitle="Reach us by phone, WhatsApp, or email."
        />

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="text-lg font-semibold">Get in touch</div>

            <div className="mt-4 space-y-2 text-sm text-neutral-700">
              <div>
                <span className="font-medium">Location:</span> {SITE.location}
              </div>
              <div>
                <span className="font-medium">Phone/WhatsApp:</span> {SITE.phoneDisplay}
              </div>
              <div>
                <span className="font-medium">Email:</span> {SITE.email}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={wa}
                className="rounded-xl bg-black px-5 py-3 text-sm font-medium text-white hover:opacity-90"
              >
                WhatsApp
              </a>
              <a
                href={`tel:${SITE.phoneDisplay.replaceAll(" ", "")}`}
                className="rounded-xl border bg-white px-5 py-3 text-sm font-medium hover:bg-neutral-50"
              >
                Call Now
              </a>
            </div>

            <div className="mt-6 text-sm text-neutral-600">
              Socials (placeholder):
              <div className="mt-2 space-y-1">
                <a className="underline" href={SITE.socials.instagram}>Instagram</a>
                <div />
                <a className="underline" href={SITE.socials.facebook}>Facebook</a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="text-lg font-semibold">Map</div>
            <p className="mt-2 text-sm text-neutral-600">
              Send a Google Maps link later and we’ll embed the exact pin.
            </p>
            <div className="mt-4 aspect-[4/3] rounded-xl bg-neutral-100" />
          </div>
        </div>
      </Container>
    </section>
  )
}
