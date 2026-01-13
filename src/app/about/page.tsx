import Container from "@/components/Container"
import SectionHeader from "@/components/SectionHeader"
import { SITE } from "@/lib/site"

export default function AboutPage() {
  return (
    <section className="py-12">
      <Container>
        <SectionHeader
          title="About Us"
          subtitle="Reliable printing and design support — with quality finishing and quick turnaround."
        />

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="text-lg font-semibold">Our Story</div>
            <p className="mt-3 text-sm text-neutral-600">
              {SITE.name} supports businesses, events, and individuals with
              professional printing and design services. We focus on speed,
              sharp prints, and customer satisfaction — from small jobs to bulk orders.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="text-lg font-semibold">What We Stand For</div>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-600">
              <li>Quality finishing and clean output</li>
              <li>Quick turnaround</li>
              <li>Affordable pricing</li>
              <li>Friendly support and clear communication</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
