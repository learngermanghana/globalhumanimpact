import { ProcessStep, Service, WhyChoosePoint } from "./types";

export const BUSINESS = {
  brandName: "247 PRINT HOUSE",
  displayName: "247 PRINT HOUSE",
  phoneDisplay: "0558213040",
  phoneIntl: "+233558213040",
  email: "printproduction247@gmail.com",
  whatsapp:
    "https://wa.me/233558213040?text=Hello%20247%20PRINT%20HOUSE%2C%20I%20want%20to%20enquire%20about%20your%20printing%20services.",
  address: "George Walker Bush Highway, Awoshie Waterworks, Accra, Ghana",
  city: "Accra",
  country: "Ghana",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/quote", label: "Get Quote" },
];

export const SERVICES: Service[] = [
  {
    id: "business-cards",
    title: "Business Cards",
    shortDescription: "Premium cards with sharp color reproduction and durable finishes.",
    longDescription:
      "Make a strong first impression with professionally printed business cards. Choose from matte, glossy, textured, and laminated finishes to suit your brand.",
    useCases: ["Corporate networking", "Sales teams", "Small business branding"],
    icon: "🪪",
    image:
      "https://images.unsplash.com/photo-1586880244406-556ebe35f282?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "flyers-brochures",
    title: "Flyers & Brochures",
    shortDescription: "High-impact promotional print for campaigns, events, and products.",
    longDescription:
      "Distribute your message clearly with full-color flyers and folded brochures printed on quality stock. Ideal for promotions, church programs, and product marketing.",
    useCases: ["Product launches", "Church programs", "Promotions and campaigns"],
    icon: "📄",
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "posters-banners",
    title: "Posters & Banners",
    shortDescription: "Large-format printing for bold visibility indoors and outdoors.",
    longDescription:
      "From store promotions to event backdrops, our posters and banners are designed to stand out. We offer weather-friendly materials and professional finishing.",
    useCases: ["Outdoor ads", "In-store promotions", "Conference backdrops"],
    icon: "🖼️",
    image:
      "https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "stickers-labels",
    title: "Stickers & Labels",
    shortDescription: "Custom stickers and labels for packaging, products, and branding.",
    longDescription:
      "Order die-cut, round, square, or custom-shape stickers and labels for product packaging, logistics, and brand visibility.",
    useCases: ["Product labels", "Packaging", "Brand merchandise"],
    icon: "🏷️",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "branding-materials",
    title: "Branding Materials",
    shortDescription: "Branded stationery and office print for a consistent identity.",
    longDescription:
      "Build trust with branded letterheads, envelopes, folders, and marketing collateral that keep your business identity consistent across touchpoints.",
    useCases: ["Corporate identity", "Client proposals", "Office stationery"],
    icon: "🎨",
    image:
      "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "event-printing",
    title: "Event Printing",
    shortDescription: "Coordinated print materials for weddings, conferences, and church events.",
    longDescription:
      "Get one trusted production partner for event invitations, souvenir programs, roll-up banners, directional signs, and event branding packs.",
    useCases: ["Weddings", "Corporate events", "School ceremonies"],
    icon: "🎟️",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "bulk-printing",
    title: "Bulk / Commercial Printing",
    shortDescription: "Cost-efficient high-volume printing with reliable turnaround.",
    longDescription:
      "For organizations needing recurring print runs, we provide scalable production planning, consistent quality control, and practical lead times.",
    useCases: ["Schools and institutions", "Political campaigns", "Large business runs"],
    icon: "📦",
    image:
      "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "custom-orders",
    title: "Custom Print Orders",
    shortDescription: "Tell us your exact requirements and we will build to specification.",
    longDescription:
      "Need non-standard sizes, materials, or finishes? We handle bespoke print requests and guide you on the best production setup for your goals and budget.",
    useCases: ["Custom dimensions", "Unique materials", "Special finishing"],
    icon: "⚙️",
    image:
      "https://images.unsplash.com/photo-1581291519195-ef11498d1cf5?auto=format&fit=crop&w=1200&q=80",
  },
];

export const WHY_CHOOSE_US: WhyChoosePoint[] = [
  {
    title: "Quality Output",
    description: "We maintain clear print detail, rich colors, and consistent finishing standards.",
  },
  {
    title: "Fast Turnaround",
    description: "Urgent print needs are handled with practical timelines and dependable delivery windows.",
  },
  {
    title: "Convenient Accra Location",
    description: "Located at Awoshie Waterworks for easy access for pickups and consultations.",
  },
  {
    title: "Reliable Customer Support",
    description: "Friendly communication on WhatsApp, phone, and email throughout your project.",
  },
  {
    title: "Professional Finishing",
    description: "Clean cuts, laminations, folds, and finishing touches that elevate your brand presentation.",
  },
  {
    title: "Custom Solutions",
    description: "From simple to complex jobs, we tailor recommendations to your objectives and budget.",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: "Send your request",
    description: "Share your print details, quantity, size, and deadline by form, phone, or WhatsApp.",
  },
  {
    title: "Get a quote",
    description: "We review your specifications and provide a clear, competitive quotation.",
  },
  {
    title: "Approve details",
    description: "Confirm your design, paper type, finishing options, and delivery/pickup plan.",
  },
  {
    title: "Production starts",
    description: "Your print job moves into production with quality checks at each key stage.",
  },
  {
    title: "Pickup or delivery",
    description: "Collect from Awoshie Waterworks or coordinate delivery based on your order.",
  },
];

export const SEO_KEYWORDS = [
  "247 PRINT HOUSE",
  "printing company in Accra",
  "printing services in Ghana",
  "flyers printing Accra",
  "banner printing Ghana",
  "business card printing Accra",
  "sticker printing Ghana",
  "custom printing Accra",
  "print shop Awoshie",
  "printing press company Ghana",
];

export const SEDIFEX_CONFIG = {
  apiBaseUrl: process.env.SEDIFEX_API_BASE_URL,
  storeId: process.env.SEDIFEX_STORE_ID ?? "vRDr1e4KMpPKo53i9VHufJQRVcS2",
  integrationKey: process.env.SEDIFEX_INTEGRATION_KEY,
};
