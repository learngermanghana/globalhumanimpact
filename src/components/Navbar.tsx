"use client"

import Link from "next/link"
import { useState } from "react"
import Container from "./Container"
import { SITE, WA_LINK } from "@/lib/site"

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Programs" },
  { href: "/portfolio", label: "Impact Stories" },
  { href: "/quote", label: "Request Support" },
  { href: "/contact", label: "Contact" },
]

function IconHamburger({ open }: { open: boolean }) {
  return (
    <div className="relative h-5 w-6">
      <span
        className={`absolute left-0 top-0 h-0.5 w-6 rounded bg-black transition-all ${
          open ? "top-2 rotate-45" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-2 h-0.5 w-6 rounded bg-black transition-all ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute left-0 top-4 h-0.5 w-6 rounded bg-black transition-all ${
          open ? "top-2 -rotate-45" : ""
        }`}
      />
    </div>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-black text-xs font-bold text-white">
              GHI
            </div>
            <div className="leading-tight">
              <div className="font-semibold">{SITE.shortName}</div>
              <div className="text-xs text-neutral-500">{SITE.location}</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((i) => (
              <Link key={i.href} href={i.href} className="text-sm text-neutral-700 hover:text-black">
                {i.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/#donate"
              className="hidden rounded-xl bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90 md:inline-flex"
            >
              Donate
            </Link>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-xl border bg-white p-2 hover:bg-neutral-50 md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <IconHamburger open={open} />
            </button>
          </div>
        </div>
      </Container>

      {open ? (
        <div className="md:hidden">
          <div className="fixed inset-0 z-40 bg-black/30" onClick={() => setOpen(false)} />
          <div className="fixed left-0 right-0 top-16 z-50 border-b bg-white shadow-lg">
            <Container>
              <div className="py-4">
                <div className="grid gap-1">
                  {nav.map((i) => (
                    <Link
                      key={i.href}
                      href={i.href}
                      onClick={() => setOpen(false)}
                      className="rounded-xl px-4 py-3 text-sm font-medium text-neutral-800 hover:bg-neutral-50"
                    >
                      {i.label}
                    </Link>
                  ))}
                </div>

                <div className="mt-4 grid gap-2">
                  <Link
                    href="/#donate"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center justify-center rounded-xl bg-black px-4 py-3 text-sm font-medium text-white hover:opacity-90"
                  >
                    Donate Now
                  </Link>
                  <a
                    href={WA_LINK}
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center justify-center rounded-xl border bg-white px-4 py-3 text-sm font-medium hover:bg-neutral-50"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </Container>
          </div>
        </div>
      ) : null}
    </header>
  )
}
