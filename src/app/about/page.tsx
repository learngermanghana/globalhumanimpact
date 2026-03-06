import Container from "@/components/Container"
import SectionHeader from "@/components/SectionHeader"

export default function AboutPage() {
  return (
    <section className="py-12">
      <Container>
        <SectionHeader
          title="About Us"
          subtitle="A community-centered NGO advancing maternal health, cancer awareness, and speech therapy advocacy in Ghana."
        />

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="text-lg font-semibold">Our Story</div>
            <p className="mt-3 text-sm text-neutral-600">
              Global Human Impact Foundation was established to bridge gaps in essential health
              information and referrals for underserved families. We work hand-in-hand with
              caregivers, local leaders, and partner institutions to improve access to practical,
              life-saving support.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="text-lg font-semibold">What We Stand For</div>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-600">
              <li>Trust-based community engagement</li>
              <li>Evidence-informed health education</li>
              <li>Inclusive support for women and children</li>
              <li>Accountability through measurable impact reporting</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
