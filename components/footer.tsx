import Link from "next/link";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";
import { getCurrentYear } from "@/lib/format";

export function Footer() {
  return (
    <footer className="bg-brand-navy text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-lg font-bold text-white">{BUSINESS.displayName}</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            Professional printing and production services in Accra, Ghana for businesses, events, and organizations.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-brand-gold">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacy" className="hover:text-brand-gold">
                Privacy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={`tel:${BUSINESS.phoneIntl}`} className="hover:text-brand-gold">
                {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${BUSINESS.email}`} className="hover:text-brand-gold">
                {BUSINESS.email}
              </a>
            </li>
            <li>
              <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white">Address</h3>
          <p className="mt-3 text-sm text-slate-300">{BUSINESS.address}</p>
        </div>
      </div>

      <div className="border-t border-slate-700 py-4 text-center text-xs text-slate-400">
        © {getCurrentYear()} {BUSINESS.displayName}. All rights reserved.
      </div>
    </footer>
  );
}
