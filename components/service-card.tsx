import Link from "next/link";
import { Service } from "@/lib/types";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1">
      <div
        className="h-44 bg-cover bg-center"
        style={{ backgroundImage: `url('${service.image}')` }}
        role="img"
        aria-label={`${service.title} printing service preview`}
      />
      <div className="p-6">
        <p className="mb-2 text-2xl" aria-hidden>
          {service.icon}
        </p>
        <h3 className="text-lg font-bold text-brand-text">{service.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.shortDescription}</p>
        <Link href="/quote" className="mt-5 inline-block text-sm font-semibold text-brand-red hover:underline">
          Request quote →
        </Link>
      </div>
    </article>
  );
}
