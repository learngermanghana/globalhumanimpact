import Container from "@/components/Container"
import SectionHeader from "@/components/SectionHeader"

const impactStories = [
  {
    title: "Safe Motherhood Workshops in Ablekuma",
    category: "Maternal Health",
    summary:
      "Over 300 mothers attended practical sessions on warning signs, birth planning, and emergency response pathways.",
  },
  {
    title: "Community Cancer Awareness Drive",
    category: "Cancer Awareness",
    summary:
      "Partnered with local volunteers to run screenings and awareness talks across four communities in Greater Accra.",
  },
  {
    title: "Early Speech Support Parent Training",
    category: "Speech Therapy Advocacy",
    summary:
      "Caregivers received home-based communication exercises and referral guides for children needing specialist support.",
  },
  {
    title: "Youth Health Education Caravan",
    category: "Community Health",
    summary:
      "School-based sessions reached over 1,100 students with preventive health and mental wellness information.",
  },
  {
    title: "Faith-Based Health Partnership Program",
    category: "Community Health",
    summary:
      "Worked with churches and mosques to host trusted health information sessions and support referral pathways.",
  },
  {
    title: "Women’s Wellness Follow-up Network",
    category: "Maternal Health",
    summary:
      "Built a volunteer check-in network that connected vulnerable women to clinics and transportation support.",
  },
]

export default function PortfolioPage() {
  return (
    <section className="py-12">
      <Container>
        <SectionHeader
          title="Impact Stories"
          subtitle="Highlights from recent programs, partnerships, and community outcomes led by Global Human Impact Foundation."
        />

        <div className="mt-6 flex flex-wrap gap-2 text-xs text-neutral-600">
          {["All", "Community Health", "Maternal Health", "Cancer Awareness", "Speech Therapy Advocacy"].map(
            (t) => (
              <span key={t} className="rounded-full border bg-white px-3 py-1">
                {t}
              </span>
            )
          )}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {impactStories.map((story) => (
            <article key={story.title} className="overflow-hidden rounded-2xl border bg-white shadow-sm">
              <div className="aspect-[4/3] bg-gradient-to-br from-neutral-100 to-neutral-200" />
              <div className="p-4">
                <div className="font-semibold">{story.title}</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wide text-neutral-500">
                  {story.category}
                </div>
                <p className="mt-3 text-sm text-neutral-600">{story.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
