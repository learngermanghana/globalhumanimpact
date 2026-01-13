export const SITE = {
  name: "247 Print House",
  tagline: "Fast, Quality Printing — Ready When You Need It.",
  description:
    "247 Print House in Awoshie (Water Works) provides professional printing and design services for businesses, events, and personal branding.",
  phoneDisplay: "+233 55 821 3040",
  whatsappE164: "233558213040",
  email: "princeproduction247@gmail.com",
  location: "Awoshie, Water Works",
  socials: {
    instagram: "https://instagram.com/your_instagram_placeholder",
    facebook: "https://facebook.com/your_facebook_placeholder",
  },
}

export const WA_LINK = `https://wa.me/${SITE.whatsappE164}`
export const WA_PREFILL = (message: string) =>
  `${WA_LINK}?text=${encodeURIComponent(message)}`
