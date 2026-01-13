import Container from "@/components/Container"
import SectionHeader from "@/components/SectionHeader"

const placeholders = Array.from({ length: 12 }).map((_, i) => ({
  title: `Project ${i + 1}`,
  category: ["Business Cards", "Flyers", "Banners", "Stickers", "Events"][i % 5],
}))

export default function PortfolioPage() {
  return (
    <section className="py-12">
      <Container>
        <SectionHeader
          title="Portfolio"
          subtitle="Upload your work images later — this page is already structured for a gallery."
        />

        <div className="mt-6 flex flex-wrap gap-2 text-xs text-neutral-600">
          {["All", "Business Cards", "Flyers", "Banners", "Stickers", "Events"].map((t) => (
            <span key={t} className="rounded-full border bg-white px-3 py-1">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {placeholders.map((p) => (
            <div key={p.title} className="overflow-hidden rounded-2xl border bg-white shadow-sm">
              <div className="aspect-[4/3] bg-neutral-100" />
              <div className="p-4">
                <div className="font-semibold">{p.title}</div>
                <div className="mt-1 text-sm text-neutral-600">{p.category}</div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-neutral-500">
          When you’re ready, drop your images into a folder (we’ll wire it to real photos).
        </p>
      </Container>
    </section>
  )
}
