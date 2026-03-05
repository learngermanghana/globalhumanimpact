"use client"

import { WA_PREFILL } from "@/lib/site"

export default function WhatsAppButton() {
  const href = WA_PREFILL(
    "Hello Global Human Impact Foundation, I would like to support or partner with your programs."
  )

  return (
    <a
      href={href}
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-black px-4 py-3 text-sm font-medium text-white shadow-lg hover:opacity-90"
      aria-label="Chat on WhatsApp"
    >
      <span className="inline-block h-2 w-2 rounded-full bg-white" />
      WhatsApp Support
    </a>
  )
}
