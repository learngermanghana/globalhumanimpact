export const SITE = {
  name: "Global Human Impact Foundation",
  shortName: "GHI Foundation",
  tagline: "Healthier Communities, Stronger Futures.",
  description:
    "Global Human Impact Foundation advances community health, maternal health advocacy, cancer awareness, and speech therapy access through education, advocacy, and local partnerships.",
  siteUrl: "https://globalhumanimpact.org",
  phoneDisplay: "+44 7305 089556",
  whatsappE164: "447305089556",
  email: "hello@globalhumanimpact.org",
  location: "Accra, Ghana",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Accra%20Ghana&output=embed",
  socials: {
    instagram: "https://instagram.com/globalhumanimpact",
    facebook: "https://facebook.com/globalhumanimpact",
    x: "https://x.com/globalhumanimpact",
  },
}

export const WA_LINK = `https://wa.me/${SITE.whatsappE164}`
export const WA_PREFILL = (message: string) =>
  `${WA_LINK}?text=${encodeURIComponent(message)}`
