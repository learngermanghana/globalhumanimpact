import { ContactStrip } from "@/components/contact-strip";
import { FeaturedCta } from "@/components/featured-cta";
import { Hero } from "@/components/hero";
import { ProcessSection } from "@/components/process-section";
import { ServicesGrid } from "@/components/services-grid";
import { WhyChooseUs } from "@/components/why-choose-us";

export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <ServicesGrid />
      <WhyChooseUs />
      <ProcessSection />
      <FeaturedCta />
      <ContactStrip />
    </main>
  );
}
