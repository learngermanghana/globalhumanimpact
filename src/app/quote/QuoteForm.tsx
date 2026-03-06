"use client"

import { useState } from "react"
import { SITE, WA_PREFILL } from "@/lib/site"

type Status = "idle" | "sending" | "sent" | "error"

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState<string>("")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")
    setError("")

    const form = e.currentTarget
    const payload = Object.fromEntries(new FormData(form).entries())

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.message || "Failed to send support request.")
      }

      setStatus("sent")
      form.reset()
    } catch (err: unknown) {
      setStatus("error")
      const message = err instanceof Error ? err.message : "Something went wrong."
      setError(message)
    }
  }

  const wa = WA_PREFILL(
    "Hello Global Human Impact Foundation, I would like support for: ____\nCommunity/Organization: ____\nTimeline: ____\nContact: ____"
  )

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <form onSubmit={onSubmit} className="rounded-2xl border bg-white p-6 shadow-sm">
        <div className="text-lg font-semibold">Program Support Request</div>
        <p className="mt-2 text-sm text-neutral-600">
          Share your need and our team will respond with next steps.
        </p>

        <div className="mt-5 grid gap-4">
          <div>
            <label className="text-sm font-medium">Full name</label>
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
            <label className="text-sm font-medium">Request Type</label>
            <select
              name="requestType"
              required
              className="mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
              defaultValue=""
            >
              <option value="" disabled>
                Select request type
              </option>
              <option>Community Health Outreach</option>
              <option>Maternal Health Advocacy</option>
              <option>Cancer Awareness Campaign</option>
              <option>Speech Therapy Advocacy</option>
              <option>Partnership Opportunity</option>
              <option>Volunteer Interest</option>
              <option>Other</option>
            </select>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium">Community / Organization</label>
              <input
                name="organization"
                required
                className="mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
                placeholder="Organization or community name"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Timeline</label>
              <input
                name="timeline"
                className="mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
                placeholder="Preferred dates"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Request details</label>
            <textarea
              name="details"
              required
              rows={4}
              className="mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
              placeholder="Tell us about the challenge, audience, and support needed..."
            />
          </div>

          <button
            disabled={status === "sending"}
            className="rounded-xl bg-black px-5 py-3 text-sm font-medium text-white hover:opacity-90 disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send Request"}
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
        <p className="mt-2 text-sm text-neutral-600">You can also message us directly:</p>

        <div className="mt-4 space-y-2 text-sm text-neutral-700">
          <div>
            <span className="font-medium">WhatsApp/Phone:</span> {SITE.phoneDisplay}
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
          <div className="font-medium">Tip for faster responses</div>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-neutral-600">
            <li>Share your target community and expected audience size</li>
            <li>Add preferred dates and timeline constraints</li>
            <li>Include any active partners or local contacts</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
