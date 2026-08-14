import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SectionHead } from "@/components/SectionHead";
import { Reveal } from "@/components/Reveal";
import { SplitMedia } from "@/components/SplitMedia";
import { ValueList } from "@/components/ValueList";
import { IconCard } from "@/components/IconCard";
import { Icon } from "@/components/icons";
import { Button } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { business } from "@/lib/site";

export const metadata: Metadata = {
  title: `About Us | Driveway Sealing & Pressure Washing Experts in Williamson County, TN`,
  description: `Meet ${business.name}: a local, licensed and insured, family-owned crew serving ${business.regionFull} with reliable pricing and commercial-grade sealers.`,
};

const differentiators = [
  {
    icon: "shield" as const,
    title: "Local Crew On Every Job",
    body: "We never hand your property to a rotating cast of subcontractors — the same trained crew that shows up is accountable for the result.",
  },
  {
    icon: "home" as const,
    title: "Family-Owned & Operated",
    body: "We're a family-owned business, not a franchise — every property gets the same care and attention we'd give our own home.",
  },
  {
    icon: "award" as const,
    title: `${business.yearsExperience} Years of Local Experience`,
    body: "Years of sealing driveways, patios and pavers through Middle Tennessee summers and winters means we've already seen a surface like yours.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About Us"
        title="Driveway Sealing & Pressure Washing Experts in Williamson County, TN"
        body={`${business.name} protects driveways, patios and pavers across ${business.regionFull} with straight answers and commercial-grade sealers.`}
        image="/images/steps-cleaned.webp"
      />

      <section className="pt-16 sm:pt-24">
        <Container>
          <SectionHead
            eyebrow="Where We Work"
            title="Serving Brentwood, Franklin, Nolensville & Surrounding Middle Tennessee Communities"
            body="From Williamson County's established neighborhoods to its fastest-growing towns, we bring the same commercial-grade sealers and careful, reliable work to every property."
          />
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <SplitMedia
              image="/images/driveway.webp"
              stackedImage="/images/steps-cleaned.webp"
              badge={{ value: business.jobsCompleted, label: "Driveways & patios sealed and protected" }}
            />
            <Reveal delay={1}>
              <span className="eyebrow">Our Story</span>
              <h2 className="text-[clamp(1.9rem,4vw,2.8rem)] my-3.5">Best Products, Quality, and Care</h2>
              <p className="text-[1.16rem] text-ink-500 mb-4">
                {business.name} started with one frustration: too many homeowners were sold a quick pressure-wash
                and a coat of hardware-store sealer that failed within a season.
              </p>
              <p className="mb-4 text-ink-500">
                We set out to be different — using commercial-grade sealers matched to the actual surface and
                traffic, and being upfront when a driveway or patio doesn&apos;t need sealing yet. That reliability is
                why most of our work now comes from referrals and repeat customers across Brentwood, Franklin and
                the surrounding towns.
              </p>
              <p className="mb-6 text-ink-500">
                From a single cracked walkway to a full paver pool deck, we treat every property like it&apos;s our own.
              </p>
              <Button href="/contact" size="lg">Talk to Our Team</Button>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-charcoal-900">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <Reveal>
              <span className="eyebrow">Our Philosophy</span>
              <h2 className="text-white text-[clamp(1.9rem,4vw,2.8rem)] my-3.5">Built to Last.</h2>
              <p className="text-steel-300 mb-2">
                We believe a sealing job should make your property look and perform better for years — not just for
                the week after we leave. So we lead with education, not upsells, and let the results speak.
              </p>
              <ValueList
                items={[
                  {
                    icon: "clipboard",
                    title: "Radically Reliable",
                    body: "If your concrete doesn't need sealing yet, we'll tell you. No invented problems, no pressure.",
                  },
                  {
                    icon: "check",
                    title: "Upfront Pricing",
                    body: "A clear, written estimate before we start — what you're quoted is what you pay.",
                  },
                  {
                    icon: "clock",
                    title: "Fast & Efficient",
                    body: "Responsive scheduling and a tidy crew that respects your property and your time.",
                  },
                ]}
              />
            </Reveal>
            <SplitMedia image="/images/pressure-washing.webp" />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-cream-100">
        <Container>
          <SectionHead
            eyebrow="What Makes Us Different"
            title="No Shortcuts. No Excuses. Just Our Crew."
            body="The biggest difference between us and a one-off handyman crew: the team that inspects your property is accountable for the outcome."
          />
          <div className="grid gap-6 sm:grid-cols-3">
            {differentiators.map((item, i) => (
              <IconCard key={item.title} {...item} delay={i === 0 ? undefined : (i as 1 | 2)} />
            ))}
          </div>

          <Reveal delay={1} className="mt-12 max-w-2xl mx-auto text-center">
            <div className="rounded-3xl overflow-hidden border-2 border-dashed border-line bg-white aspect-video grid place-items-center mb-6">
              <div className="text-ink-500">
                <Icon name="home" className="h-10 w-10 mx-auto mb-2 text-amber-500" />
                <p className="text-sm font-head font-semibold">Family photo coming soon</p>
              </div>
            </div>
            <p className="text-[1.1rem] text-ink-700 font-head font-semibold">
              We&apos;re a family-owned business that inspects every property — ready to work with the team that
              actually shows up.
            </p>
          </Reveal>
        </Container>
      </section>

      <CTASection
        eyebrow="Experience the Difference"
        title="Ready to Work With a Team That Actually Shows Up?"
        body="Schedule your free, no-pressure inspection and get a professional assessment from a real local expert."
      />
    </>
  );
}
