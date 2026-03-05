export const SITE = {
  name: "Global Human Impact Foundation",
  tagline: "Healthier Communities, Stronger Futures.",
  description:
    "Global Human Impact Foundation advances community health, maternal health advocacy, cancer awareness, and speech therapy access through education, advocacy, and local partnerships.",
  phoneDisplay: "+233 55 821 3040",
  whatsappE164: "233558213040",
  email: "hello@globalhumanimpact.org",
  location: "Accra, Ghana",
  socials: {
    instagram: "https://instagram.com/globalhumanimpact",
    facebook: "https://facebook.com/globalhumanimpact",
  },
}

export const WA_LINK = `https://wa.me/${SITE.whatsappE164}`
export const WA_PREFILL = (message: string) =>
  `${WA_LINK}?text=${encodeURIComponent(message)}`
