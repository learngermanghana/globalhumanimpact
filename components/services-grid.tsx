import { SERVICES } from "@/lib/constants";
import { ServiceCard } from "./service-card";
import { SectionHeading } from "./section-heading";

export function ServicesGrid() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Printing Services Designed for Growth"
          description="From everyday business printing to custom commercial runs, we deliver consistent quality that helps your brand stand out."
          align="center"
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
