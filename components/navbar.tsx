import Link from "next/link";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-extrabold tracking-tight text-brand-navy sm:text-xl" aria-label="247 PRINT HOUSE home page">
          {BUSINESS.displayName}
        </Link>

        <nav aria-label="Main navigation" className="hidden gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-700 transition hover:text-brand-red">
              {link.label}
            </Link>
          ))}
        </nav>

        <a href={`tel:${BUSINESS.phoneIntl}`} className="rounded-md bg-brand-red px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-red-700">
          Call Now
        </a>
      </div>
    </header>
  );
}
