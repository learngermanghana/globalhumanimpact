"use client"

import { useMemo, useState } from "react"
import Container from "@/components/Container"
import SectionHeader from "@/components/SectionHeader"
import { SITE, WA_PREFILL } from "@/lib/site"

export default function QuotePage() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [service, setService] = useState("Business Cards")
  const [quantity, setQuantity] = useState("")
  const [size, setSize] = useState("")
  const [notes, setNotes] = useState("")

  const waHref = useMemo(() => {
    const msg =
      `Hi 247 Print House, I need a quote.\n\n` +
      `Name: ${name || "-"}\n` +
      `Phone/WhatsApp: ${phone || "-"}\n` +
      `Service: ${service}\n` +
      `Quantity: ${quantity || "-"}\n` +
      `Size: ${size || "-"}\n` +
      `Notes: ${notes || "-"}\n\n` +
      `Location: ${SITE.location}`
    return WA_PREFILL(msg)
  }, [name, phone, service, quantity, size, notes])

  return (
    <section className="py-12">
      <Container>
        <SectionHeader
          title="Request a Quote"
          subtitle="Fill the details and send directly to WhatsApp."
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="text-lg font-semibold">Quote Details</div>

            <div className="mt-5 grid gap-4">
              <div>
                <label className="text-sm font-medium">Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Phone / WhatsApp</label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
                  placeholder="+233..."
                />
              </div>

              <div>
                <label className="text-sm font-medium">Service</label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
                >
                  <option>Business Cards</option>
                  <option>Flyers / Brochures</option>
                  <option>Banners / Roll-ups</option>
                  <option>Stickers / Labels</option>
                  <option>Posters</option>
                  <option>Invitation / Programme</option>
                  <option>Receipt / Invoice Book</option>
                  <option>Design Only</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium">Quantity</label>
                  <input
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
                    placeholder="e.g. 100, 500, 1000"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Size</label>
                  <input
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    className="mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
                    placeholder="e.g. A4, A3, 2x6ft"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Notes</label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={4}
                  className="mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
                  placeholder="Finishing, color, paper type, delivery area, deadline..."
                />
              </div>

              <a
                href={waHref}
                className="inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 text-sm font-medium text-white hover:opacity-90"
              >
                Send on WhatsApp
              </a>

              <div className="text-xs text-neutral-500">
                This opens WhatsApp with a pre-filled quote message.
              </div>
            </div>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="text-lg font-semibold">Contact</div>
            <div className="mt-4 space-y-2 text-sm text-neutral-700">
              <div><span className="font-medium">WhatsApp/Phone:</span> {SITE.phoneDisplay}</div>
              <div><span className="font-medium">Email:</span> {SITE.email}</div>
              <div><span className="font-medium">Location:</span> {SITE.location}</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
