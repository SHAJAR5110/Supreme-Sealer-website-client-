import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SectionHead } from "@/components/SectionHead";
import { ServiceCard } from "@/components/ServiceCard";
import { ProcessSteps } from "@/components/ProcessSteps";
import { CTASection } from "@/components/CTASection";
import { services } from "@/lib/services";
import { processSteps } from "@/lib/content";
import { business } from "@/lib/site";

export const metadata: Metadata = {
  title: `Concrete, Paver & Driveway Sealing Services in ${business.regionShort}`,
  description: `Explore ${business.name}'s services: exposed aggregate sealing, brushed/broomed concrete sealing, paver patio sealing, concrete cleaning & sealing, pressure washing and brick mailbox cleaning across ${business.regionFull}.`,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Services"
        title="Concrete, Paver, Aggregate, Driveway Sealing and Pressure Washing Services"
        body="Six specialized services, one accountable local team. Whatever surface needs protecting around your home, we have a proven solution."
        image="/images/services-hero-brick.png"
        clear
      />

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHead
            eyebrow="What We Service"
            title="Choose Your Surface"
            body="Every sealer we use is matched to the surface, traffic and finish in front of us — not a one-size-fits-all coating."
          />
          <div className="grid gap-5.5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} delay={i === 0 ? undefined : ((i % 3) as 1 | 2)} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-charcoal-900">
        <Container>
          <SectionHead
            eyebrow="How We Work"
            title="Your Sealing Project, Start to Finish"
            body="Every Supreme Sealers project follows the same transparent process — no guesswork, no surprises."
            onDark
          />
          <ProcessSteps steps={processSteps} onDark />
        </Container>
      </section>

      <CTASection
        eyebrow="Not Sure Which Service You Need?"
        title="Upfront Pricing. No Guessing. No Gimmicks."
        body="Book a free inspection and we'll diagnose exactly what your driveway, patio or pavers need — then recommend only that."
      />
    </>
  );
}
