"use client"

import { useState } from "react"
import { SITE, WA_PREFILL } from "@/lib/site"

type Status = "idle" | "sending" | "sent" | "error"

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState<string>("")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError("")
    setStatus("sending")

    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.message || "Failed to send quote request.")
      }

      setStatus("sent")
      ;(e.target as HTMLFormElement).reset()
    } catch (err: any) {
      setStatus("error")
      setError(err?.message || "Something went wrong.")
    }
  }

  const wa = WA_PREFILL(
    "Hi 247 Print House, I need a quote. Service: ____ Quantity: ____ Size: ____ Notes: ____"
  )

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <form
        onSubmit={onSubmit}
        className="rounded-2xl border bg-white p-6 shadow-sm"
      >
        <div className="text-lg font-semibold">Request a Quote</div>
        <p className="mt-2 text-sm text-neutral-600">
          Fill this form and we’ll reply quickly on WhatsApp/phone.
        </p>

        <div className="mt-5 grid gap-4">
          <div>
            <label className="text-sm font-medium">Name</label>
            <input
              name="name"
              required
              className="mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Phone / WhatsApp</label>
            <input
              name="phone"
              required
              className="mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
              placeholder="+233..."
            />
          </div>

          <div>
            <label className="text-sm font-medium">Email (optional)</label>
            <input
              name="email"
              type="email"
              className="mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Service</label>
            <select
              name="service"
              required
              className="mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
              defaultValue=""
            >
              <option value="" disabled>
                Select a service
              </option>
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
                name="quantity"
                required
                className="mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
                placeholder="e.g. 100, 500, 1000"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Size</label>
              <input
                name="size"
                className="mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
                placeholder="e.g. A4, A3, 2x6ft"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Notes</label>
            <textarea
              name="notes"
              rows={4}
              className="mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
              placeholder="Finishing, color, paper type, delivery area, deadline..."
            />
          </div>

          <button
            disabled={status === "sending"}
            className="rounded-xl bg-black px-5 py-3 text-sm font-medium text-white hover:opacity-90 disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send Quote Request"}
          </button>

          {status === "sent" ? (
            <div className="rounded-xl border bg-neutral-50 p-3 text-sm">
              ✅ Sent! We’ll contact you shortly.
            </div>
          ) : null}

          {status === "error" ? (
            <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
              ❌ {error}
            </div>
          ) : null}
        </div>
      </form>

      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <div className="text-lg font-semibold">Prefer WhatsApp?</div>
        <p className="mt-2 text-sm text-neutral-600">
          You can also message us directly:
        </p>

        <div className="mt-4 space-y-2 text-sm text-neutral-700">
          <div>
            <span className="font-medium">WhatsApp/Phone:</span>{" "}
            {SITE.phoneDisplay}
          </div>
          <div>
            <span className="font-medium">Email:</span> {SITE.email}
          </div>
          <div>
            <span className="font-medium">Location:</span> {SITE.location}
          </div>
        </div>

        <a
          href={wa}
          className="mt-6 inline-flex rounded-xl border bg-white px-5 py-3 text-sm font-medium hover:bg-neutral-50"
        >
          Chat on WhatsApp
        </a>

        <div className="mt-6 rounded-xl border bg-neutral-50 p-4 text-sm text-neutral-700">
          <div className="font-medium">Tip for faster quotes</div>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-neutral-600">
            <li>Service + size + quantity</li>
            <li>Deadline (when you need it)</li>
            <li>Finishing (lamination, matte/glossy, etc.)</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
