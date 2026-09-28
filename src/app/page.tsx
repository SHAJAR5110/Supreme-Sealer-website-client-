import { Container } from "@/components/Container";
import { SectionHead } from "@/components/SectionHead";
import { Button } from "@/components/Button";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { ProudlyServing } from "@/components/ProudlyServing";
import { IconCard } from "@/components/IconCard";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ServiceCard } from "@/components/ServiceCard";
import { AreaCard } from "@/components/AreaCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CTASection } from "@/components/CTASection";
import { StatCounter } from "@/components/StatCounter";
import { BeforeAfterGallery } from "@/components/BeforeAfterGallery";
import { featuredServices } from "@/lib/services";
import { areas } from "@/lib/areas";
import { testimonials } from "@/lib/testimonials";
import { problems, whyChooseUs, benefits, processSteps, homeFaqs } from "@/lib/content";
import { beforeAfterGallery } from "@/lib/gallery";
import { business } from "@/lib/site";

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Supreme Sealers",
  description:
    "Supreme Sealers is a family-owned Power Washing Service based in Brentwood, TN, serving Brentwood, Franklin, Forest Hills, and Nolensville. With 15+ years of experience, we deliver professional Driveway Pressure Washing to remove dirt, algae, and stains, then protect surfaces with expert Driveway Sealing for longer-lasting curb appeal. We specialize in Aggregate Driveway Sealing, including exposed aggregate and custom finishes, plus sidewalks, patios, pavers, and commercial concrete. Get a free estimate today for reliable results you can see.",
  url: "https://supremesealersofbrentwood.com/",
  telephone: "+16157325377",
  image: "https://d17lvxud83eqj6.cloudfront.net/ef5f24df-1ae6-4174-85ce-290ac936da45.png",
  logo: "https://d17lvxud83eqj6.cloudfront.net/ef5f24df-1ae6-4174-85ce-290ac936da45.png",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card",
  address: {
    "@type": "PostalAddress",
    streetAddress: "",
    addressLocality: null,
    addressRegion: null,
    postalCode: null,
    addressCountry: null,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.982029,
    longitude: -86.7714225,
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["MONDAY"], opens: "08:00", closes: "17:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["TUESDAY"], opens: "08:00", closes: "17:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["WEDNESDAY"], opens: "08:00", closes: "17:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["THURSDAY"], opens: "08:00", closes: "17:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["FRIDAY"], opens: "08:00", closes: "17:30" },
  ],
  areaServed: [
    { "@type": "Place", name: "Brentwood" },
    { "@type": "Place", name: "Franklin" },
    { "@type": "Place", name: "Forest Hills" },
    { "@type": "Place", name: "Nolensville" },
  ],
  sameAs: [
    "https://www.instagram.com/supreme_sealers/",
    "https://www.facebook.com/SupremeSealersofBrentwood",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: 41,
    bestRating: 5,
    worstRating: 1,
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Connie Woolsey" },
      reviewBody:
        "SUPREME SEALERS OF BRENTWOOD - I just Mace and his team pressure wash, repair and fill cracks and seal entire driveway.  They were great!  What a difference they made to my house.  I highly recommend this company.",
      reviewRating: { "@type": "Rating", ratingValue: 5 },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Audrey Singleton" },
      reviewBody:
        "If you're looking for someone who truly goes above and beyond, look no further. From start to finish, the experience was exceptional. Mace was incredibly communicative, keeping us informed every step of the way, and his pricing was completely fair and transparent. What really stood out was how attentive and considerate he was throughout the entire process. You could tell he genuinely cared about doing a great job and treating his customers well. The work itself looks amazing, but honestly, his professionalism and kindness made the whole experience. We will absolutely be calling him again and recommending him to everyone we know!",
      reviewRating: { "@type": "Rating", ratingValue: 5 },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Christina Milon" },
      reviewBody:
        "This is the second time we have had Supreme Sealers clean an seal our very long, aggregate driveway. The first sealing lasted for five years. They are very professional and do a great job!",
      reviewRating: { "@type": "Rating", ratingValue: 5 },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Karen Beasley" },
      reviewBody:
        "Mace and his team did a great job pressure washing and sealing all our aggregate and smooth concrete. This is the second time we have used them. The product they use really helps keep the surfaces cleaner longer!",
      reviewRating: { "@type": "Rating", ratingValue: 5 },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Ron Benkert" },
      reviewBody:
        "Mace demonstrates exceptional commitment to customer service and satisfaction. He thoroughly explained the various sealing options available, enabling me to make an informed decision. Besides sealing my concrete driveway and walkways, he also cleaned and sealed my brick porch and steps. They look great!  I highly recommend Supreme Sealers for their professionalism and competitive pricing.",
      reviewRating: { "@type": "Rating", ratingValue: 5 },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <Hero />
      <TrustStrip />
      <ProudlyServing />

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <SectionHead
            eyebrow="Signs You Need Sealing"
            title="Common Concrete & Paver Problems We Solve"
            body="Unsealed surfaces don't fail all at once — they show warning signs first. Here's what we see most often on Williamson County driveways and patios."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((item, i) => (
              <IconCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                body={item.body}
                tone={i % 2 === 0 ? "dark" : "amber"}
                delay={(i % 3) === 0 ? undefined : ((i % 3) as 1 | 2)}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-cream-100">
        <Container>
          <SectionHead
            eyebrow="Why Choose Us"
            title="Homeowners Trust Supreme Sealers to Do It Right"
            body="No scare tactics, no big-box sealers, no surprises — just a reliable local crew that stands behind its work."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, i) => (
              <IconCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                body={item.body}
                tone="amber"
                delay={(i % 3) === 0 ? undefined : ((i % 3) as 1 | 2)}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <SectionHead
            eyebrow="The Benefits of Sealing"
            title="Protect the Investment You Already Made"
            body="A quality seal coat pays for itself by delaying the cracking, staining and replacement costs that come with neglected concrete."
          />
          <div className="grid gap-6 sm:grid-cols-3">
            {benefits.map((item, i) => (
              <IconCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                body={item.body}
                delay={i === 0 ? undefined : (i as 1 | 2)}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-cream-100">
        <Container>
          <SectionHead
            eyebrow="Real Results"
            title="See the Difference on Real Williamson County Homes"
            body="From driveways and steps to fences and mailboxes, thorough cleaning and sealing is what makes the difference — here's proof from recent jobs."
          />
          <BeforeAfterGallery items={beforeAfterGallery} />
        </Container>
      </section>

      <section className="bg-charcoal-800 py-12">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCounter target={15} suffix="+" label="Years In Business" />
            <StatCounter target={1200} suffix="+" label="Driveways & Patios Sealed" />
            <StatCounter target={100} suffix="%" label="Free Estimates" />
            <StatCounter target={4.9} decimals={1} label="Average Star Rating" />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <SectionHead
            eyebrow="Our Services"
            title="Our Most-Requested Sealing Services"
            body="One trusted local team for every sealed surface around your home."
          />
          <div className="grid gap-5.5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service, i) => (
              <ServiceCard key={service.slug} service={service} delay={i === 0 ? undefined : ((i % 3) as 1 | 2)} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button href="/services" variant="dark" size="lg" showArrow>
              See All Services
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-cream-100">
        <Container>
          <SectionHead
            eyebrow="Where We Work"
            title="Sealing Driveways & Patios Across Williamson County"
            body={`Local knowledge matters. We understand the clay soil, humidity and freeze-thaw conditions that challenge concrete across ${business.regionFull}.`}
          />
          <div className="grid gap-5.5 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area, i) => (
              <AreaCard key={area.slug} area={area} delay={i === 0 ? undefined : ((i % 3) as 1 | 2)} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-charcoal-900">
        <Container>
          <SectionHead
            eyebrow="How We Work"
            title="A Straightforward 3-Step Sealing Process"
            body="From your first call to the final walkthrough, you'll always know exactly what's happening and why."
            onDark
          />
          <ProcessSteps steps={processSteps} onDark />
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-cream-100">
        <Container>
          <SectionHead eyebrow="Customer Reviews" title="Trusted by Homeowners Across Williamson County" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, i) => (
              <TestimonialCard key={item.name} item={item} delay={i === 0 ? undefined : (i as 1 | 2)} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <SectionHead eyebrow="Frequently Asked Questions" title="Sealing Questions, Answered" />
          <FaqAccordion items={homeFaqs} />
        </Container>
      </section>

      <CTASection
        eyebrow="Let's Protect Your Concrete"
        title="Get Your Free Sealing Estimate Today"
        body="Talk to a real local expert — not a call center. We'll inspect your driveway or patio and give you a straightforward, professional plan."
      />
    </>
  );
}
