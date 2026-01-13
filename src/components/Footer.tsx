import Container from "./Container"
import Link from "next/link"
import { SITE, WA_LINK } from "@/lib/site"

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <Container>
        <div className="grid gap-8 py-10 md:grid-cols-3">
          <div>
            <div className="font-semibold">{SITE.name}</div>
            <p className="mt-2 text-sm text-neutral-600">{SITE.description}</p>
          </div>

          <div>
            <div className="font-semibold">Contact</div>
            <div className="mt-2 space-y-1 text-sm text-neutral-600">
              <div>{SITE.location}</div>
              <div>{SITE.phoneDisplay}</div>
              <div>{SITE.email}</div>
            </div>
          </div>

          <div>
            <div className="font-semibold">Quick Links</div>
            <div className="mt-2 grid gap-2 text-sm">
              <Link className="text-neutral-700 hover:text-black" href="/services">
                Services
              </Link>
              <Link className="text-neutral-700 hover:text-black" href="/portfolio">
                Portfolio
              </Link>
              <Link className="text-neutral-700 hover:text-black" href="/quote">
                Request a Quote
              </Link>
              <a className="text-neutral-700 hover:text-black" href={WA_LINK}>
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t py-6 text-sm text-neutral-500">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  )
}
