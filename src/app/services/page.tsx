import Container from "@/components/Container"
import SectionHeader from "@/components/SectionHeader"

const sections = [
  {
    title: "Design Services",
    items: [
      "Logo design & brand identity",
      "Flyer & poster design",
      "Business card design",
      "Social media designs",
      "Invitation & programme design",
      "Banner/backdrop design",
    ],
  },
  {
    title: "Printing (Small & Office)",
    items: [
      "Business cards",
      "Flyers & brochures",
      "Letterheads & envelopes",
      "Receipts / invoice books",
      "ID cards",
    ],
  },
  {
    title: "Large Format Printing",
    items: [
      "Indoor/outdoor banners",
      "Roll-up banners",
      "Posters",
      "Backdrops",
      "Signage (basic print)",
    ],
  },
  {
    title: "Branding & Custom Items",
    items: [
      "Stickers & labels",
      "Product branding / packaging labels",
      "Branded T-shirts & apparel (if needed)",
      "Branded mugs/caps (if needed)",
    ],
  },
]

export default function ServicesPage() {
  return (
    <section className="py-12">
      <Container>
        <SectionHeader
          title="Services"
          subtitle="From design-ready files to full support — we design and print with quality finishing."
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
