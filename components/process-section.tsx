import { PROCESS_STEPS } from "@/lib/constants";
import { SectionHeading } from "./section-heading";

export function ProcessSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Process"
          title="Simple Steps from Enquiry to Delivery"
          description="We keep the workflow transparent so you always know what happens next with your order."
          align="center"
        />

        <ol className="mt-10 grid gap-5 md:grid-cols-5">
          {PROCESS_STEPS.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
              <p className="text-sm font-bold text-brand-red">Step {index + 1}</p>
              <h3 className="mt-2 text-base font-semibold text-brand-text">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
