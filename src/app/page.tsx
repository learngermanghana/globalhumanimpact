import Link from "next/link"
import Container from "@/components/Container"
import SectionHeader from "@/components/SectionHeader"

const pillars = [
  {
    title: "Community Health Services",
    desc: "Local outreach, screenings, referrals, and wellness education for underserved communities.",
  },
  {
    title: "Maternal Health Advocacy",
    desc: "Support for safe pregnancy, informed care choices, and stronger maternal care systems.",
  },
  {
    title: "Cancer Awareness",
    desc: "Prevention campaigns, early detection education, and community-led awareness drives.",
  },
  {
    title: "Speech Therapy Advocacy",
    desc: "Improving access to early intervention, speech support resources, and caregiver guidance.",
  },
]

const impactStats = [
  { label: "People Reached", value: "12,500+" },
  { label: "Communities Supported", value: "48" },
  { label: "Health Campaigns Run", value: "120" },
  { label: "Active Partners", value: "27" },
]

const stories = [
  {
    title: "Maternal Care Access in peri-urban districts",
    quote:
      "Our education sessions helped expecting mothers identify danger signs earlier and seek timely support.",
  },
  {
    title: "Speech Support for Early Learners",
    quote:
      "Caregivers now have practical tools at home, and children are receiving referrals faster than before.",
  },
]

export default function HomePage() {
  return (
    <>
      <section className="border-b bg-white">
        <Container>
          <div className="hero__inner grid gap-10 p-8 py-12 md:grid-cols-2 md:items-center md:p-10">
            <div className="space-y-5">
              <div className="inline-flex rounded-full border bg-white px-3 py-1 text-xs text-neutral-600">
                Trust-first NGO for healthier communities
              </div>

              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Advancing community well-being through advocacy, education, and local partnerships.
              </h1>

              <p className="text-neutral-600">
                Global Human Impact Foundation helps communities thrive through community health
                services, maternal health advocacy, cancer awareness, and speech therapy advocacy.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/#donate"
                  className="rounded-xl bg-black px-5 py-3 text-sm font-medium text-white hover:opacity-90"
                >
                  Donate
                </Link>
                <Link
                  href="/#get-involved"
                  className="rounded-xl border bg-white px-5 py-3 text-sm font-medium hover:bg-neutral-50"
                >
                  Volunteer
                </Link>
                <Link
                  href="/contact"
                  className="rounded-xl border bg-white px-5 py-3 text-sm font-medium hover:bg-neutral-50"
                >
                  Partner
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border bg-neutral-50 p-6">
              <h2 className="text-lg font-semibold">Mission</h2>
              <p className="mt-2 text-sm text-neutral-700">
                We improve community well-being by advancing maternal health, cancer awareness,
                and speech therapy access through advocacy, education, and local partnerships.
              </p>
              <h3 className="mt-6 text-sm font-semibold">Vision</h3>
              <p className="mt-2 text-sm text-neutral-700">
                A future where every family can access essential health information, care, and support.
              </p>
            </div>
          </div>
        </Container>
      </section>


      <section className="border-t bg-white py-12">
        <Container>
          <SectionHeader
            title="What template was used?"
            subtitle="This project runs on a Next.js app, and the visual layout is defined by local app components and CSS."
          />
          <div className="mt-6 space-y-4 rounded-2xl border bg-white p-6 text-sm text-neutral-700">
            <p>
              From the current package setup and scripts, this app is built with Next.js + React, not a
              Vercel visual template. Vercel handles hosting, while the UI comes from the code in this repository.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                The page shell and routing entry are in <code>src/app/layout.tsx</code> and page files under
                <code> src/app/*</code>.
              </li>
              <li>
                Shared structure is provided by reusable components like Navbar, Footer, and Container.
              </li>
              <li>
                The theme and layout behavior are set in <code>src/app/globals.css</code>.
              </li>
            </ul>
            <p>
              To reproduce this layout in another app, copy the global styles plus shared layout components,
              then keep class names like <code>.app</code>, <code>.nav</code>, <code>.container</code>, and
              <code> .hero__inner</code> aligned.
            </p>
          </div>
        </Container>
      </section>

      <section id="programs" className="py-12">
        <Container>
          <SectionHeader
            title="Four Program Pillars"
            subtitle="Each program is designed with measurable outcomes, local partnerships, and inclusive community participation."
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="rounded-2xl border bg-white p-5 shadow-sm">
                <h3 className="font-semibold">{pillar.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{pillar.desc}</p>
                <Link href="/#donate" className="mt-4 inline-block text-sm font-medium underline">
                  Support this program
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="impact" className="border-y bg-white py-12">
        <Container>
          <SectionHeader
            title="Impact Highlights"
            subtitle="Evidence-based reporting to keep supporters informed and confident."
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {impactStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border bg-neutral-50 p-5 text-center">
                <div className="text-3xl font-semibold">{stat.value}</div>
                <div className="mt-2 text-sm text-neutral-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="about" className="py-12">
        <Container>
          <SectionHeader
            title="About Global Human Impact Foundation"
            subtitle="Human, hopeful, and evidence-based work with clear governance and transparency commitments."
          />
          <div className="mt-6 rounded-2xl border bg-white p-6 text-sm text-neutral-700">
            We are a registered nonprofit focused on practical health advocacy and education. Our
            leadership and advisory partners work with community stakeholders to deliver programs with
            clear safeguarding standards, privacy commitments, and transparent use of funds.
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <SectionHeader title="Success Stories" subtitle="Real outcomes from community-centered programs." />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {stories.map((story) => (
              <div key={story.title} className="rounded-2xl border bg-white p-5 shadow-sm">
                <h3 className="font-semibold">{story.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">“{story.quote}”</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="get-involved" className="border-y bg-white py-12">
        <Container>
          <SectionHeader
            title="Get Involved"
            subtitle="Volunteer, partner, or join campaigns that expand access to better health outcomes."
          />
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-xl bg-black px-5 py-3 text-sm font-medium text-white">
              Volunteer Sign-up
            </Link>
            <Link href="/contact" className="rounded-xl border bg-white px-5 py-3 text-sm font-medium">
              Partner with Us
            </Link>
            <Link href="/contact" className="rounded-xl border bg-white px-5 py-3 text-sm font-medium">
              Join a Campaign
            </Link>
          </div>
        </Container>
      </section>

      <section id="donate" className="py-12">
        <Container>
          <div className="rounded-3xl border bg-black p-8 text-white">
            <h2 className="text-2xl font-semibold">Support Global Human Impact Foundation</h2>
            <p className="mt-2 max-w-2xl text-sm text-neutral-200">
              Choose one-time or recurring giving to support community health, maternal health,
              cancer awareness, and speech therapy advocacy. We share impact updates and transparency
              snapshots to show how funds are used.
            </p>
            <div className="mt-5">
              <Link href="/contact" className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-black">
                Donate Now
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
