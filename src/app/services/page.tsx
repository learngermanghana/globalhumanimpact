import Container from "@/components/Container"
import SectionHeader from "@/components/SectionHeader"

const sections = [
  {
    title: "Community Health Outreach",
    items: [
      "Mobile education clinics and neighborhood outreach sessions",
      "Preventive health screening and referral support",
      "Family wellness education in schools and churches",
      "Local health worker training support",
    ],
  },
  {
    title: "Maternal Health Advocacy",
    items: [
      "Pregnancy danger-sign awareness workshops",
      "Safe birth planning and antenatal support resources",
      "Caregiver and family engagement programs",
      "Maternal care rights and policy advocacy",
    ],
  },
  {
    title: "Cancer Awareness Programs",
    items: [
      "Community campaigns for early detection awareness",
      "Breast and cervical health education events",
      "Myth-busting and stigma reduction materials",
      "Referral navigation for follow-up care",
    ],
  },
  {
    title: "Speech Therapy Advocacy",
    items: [
      "Parent coaching for early speech intervention",
      "School awareness sessions for speech and language delays",
      "Referrals to speech and language professionals",
      "Accessibility advocacy for early childhood services",
    ],
  },
]

export default function ServicesPage() {
  return (
    <section className="py-12">
      <Container>
        <SectionHeader
          title="Programs & Services"
          subtitle="Our programs are designed to improve access to health knowledge, support, and referrals where they are needed most."
        />

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {sections.map((s) => (
            <div key={s.title} className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="text-lg font-semibold">{s.title}</div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-neutral-600">
                {s.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
