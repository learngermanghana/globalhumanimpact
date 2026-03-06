import Container from "@/components/Container"
import SectionHeader from "@/components/SectionHeader"
import { SITE, WA_PREFILL } from "@/lib/site"

export default function ContactPage() {
  const wa = WA_PREFILL(
    "Hello Global Human Impact Foundation, I would like to learn more about your programs and partnership opportunities."
  )

  return (
    <section className="py-12">
      <Container>
        <SectionHeader
          title="Contact"
          subtitle="Reach us by phone, WhatsApp, or email for partnerships, volunteering, and program collaboration."
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
              Follow us:
              <div className="mt-2 space-y-1">
                <a className="underline" href={SITE.socials.instagram}>
                  Instagram
                </a>
                <div />
                <a className="underline" href={SITE.socials.facebook}>
                  Facebook
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="text-lg font-semibold">Visit Us</div>
            <p className="mt-2 text-sm text-neutral-600">
              We are based in Accra and work with communities across Ghana.
            </p>
            <iframe
              title="Global Human Impact Foundation location"
              src={SITE.mapEmbedUrl}
              loading="lazy"
              className="mt-4 aspect-[4/3] w-full rounded-xl border"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
