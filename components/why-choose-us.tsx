import { WHY_CHOOSE_US } from "@/lib/constants";
import { SectionHeading } from "./section-heading";

export function WhyChooseUs() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose 247 PRINT HOUSE"
          title="A Production Partner You Can Depend On"
          description="We combine practical customer support, modern equipment standards, and quality control to keep your print jobs on time and on brand."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_US.map((point) => (
            <article key={point.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-brand-text">{point.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{point.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
