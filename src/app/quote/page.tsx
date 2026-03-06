import Container from "@/components/Container"
import SectionHeader from "@/components/SectionHeader"
import QuoteForm from "./QuoteForm"

export default function QuotePage() {
  return (
    <section className="py-12">
      <Container>
        <SectionHeader
          title="Request Support"
          subtitle="Tell us about your community need, partnership request, or campaign idea."
        />

        <div className="mt-8">
          <QuoteForm />
        </div>
      </Container>
    </section>
  )
}
