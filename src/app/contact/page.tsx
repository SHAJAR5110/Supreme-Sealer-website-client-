import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/icons";
import { ContactForm } from "@/components/ContactForm";
import { business } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request your free Sealing or Pressure Washing quote today",
  description: `Contact ${business.name} for a free concrete or paver sealing, driveway sealing, or pressure washing quote in ${business.regionFull}. Call ${business.phoneDisplay} or send us a message.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        title="Request your free Sealing or Pressure Washing quote today"
        body="Tell us what's going on with your driveway, patio or pavers and we'll get back to you fast with reliable answers — no pressure, no obligation."
        image="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14 items-start">
            <Reveal className="grid gap-4">
              <div className="mb-1">
                <span className="eyebrow">Get In Touch</span>
                <h2 className="text-[clamp(1.7rem,3.5vw,2.3rem)] mt-3 mb-2.5">We&apos;re Here to Help</h2>
                <p className="text-ink-500">
                  Give us a call or text for a free estimate, or fill out the form below — whichever is easier.
                  A real {business.name} team member will respond, not a call center.
                </p>
              </div>

              <a
                href={`tel:${business.phoneTel}`}
                className="flex gap-4.5 items-start rounded-[14px] border border-line bg-white p-5.5 transition-all hover:-translate-y-1 hover:shadow-sm"
              >
                <span className="grid h-13 w-13 shrink-0 place-items-center rounded-[12px] bg-linear-to-br from-amber-500 to-amber-700">
                  <Icon name="phone" className="h-6 w-6 text-white" />
                </span>
                <div>
                  <h4 className="text-[1.06rem] mb-0.5">Call or Text</h4>
                  <p className="text-ink-500">{business.phoneDisplay}</p>
                </div>
              </a>

              <a
                href={`mailto:${business.email}`}
                className="flex gap-4.5 items-start rounded-[14px] border border-line bg-white p-5.5 transition-all hover:-translate-y-1 hover:shadow-sm"
              >
                <span className="grid h-13 w-13 shrink-0 place-items-center rounded-[12px] bg-linear-to-br from-amber-500 to-amber-700">
                  <Icon name="mail" className="h-6 w-6 text-white" />
                </span>
                <div>
                  <h4 className="text-[1.06rem] mb-0.5">Email Us</h4>
                  <p className="text-ink-500">{business.email}</p>
                </div>
              </a>

              <div className="flex gap-4.5 items-start rounded-[14px] border border-line bg-white p-5.5">
                <span className="grid h-13 w-13 shrink-0 place-items-center rounded-[12px] bg-linear-to-br from-amber-500 to-amber-700">
                  <Icon name="mapPin" className="h-6 w-6 text-white" />
                </span>
                <div>
                  <h4 className="text-[1.06rem] mb-0.5">Service Area</h4>
                  <p className="text-ink-500">{business.regionFull}</p>
                </div>
              </div>

              <div className="flex gap-4.5 items-start rounded-[14px] border border-line bg-white p-5.5">
                <span className="grid h-13 w-13 shrink-0 place-items-center rounded-[12px] bg-linear-to-br from-amber-500 to-amber-700">
                  <Icon name="clock" className="h-6 w-6 text-white" />
                </span>
                <div>
                  <h4 className="text-[1.06rem] mb-0.5">Hours</h4>
                  {business.hours.map((h) => (
                    <p key={h.label} className="text-ink-500">{h.label}: {h.value}</p>
                  ))}
                </div>
              </div>

              <div className="flex gap-3.5 items-center rounded-[10px] bg-amber-500/12 px-4.5 py-4">
                <Icon name="shieldCheck" className="h-6.5 w-6.5 text-amber-600 shrink-0" />
                <div>
                  <strong className="block text-charcoal-900 font-head">Family-Owned &amp; Operated</strong>
                  <span className="text-[0.86rem] text-ink-700">Reliable pricing on every job</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-24">
        <Container>
          <div className="mb-8 text-center">
            <span className="eyebrow justify-center">Find Us Nearby</span>
            <h2 className="mt-3 text-[clamp(1.5rem,3vw,2rem)]">Serving {business.regionShort}</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <Reveal className="rounded-[22px] overflow-hidden border border-line shadow-sm">
              <div className="flex items-center gap-2.5 px-5 py-4 bg-white">
                <Icon name="mapPin" className="h-5 w-5 text-amber-500 shrink-0" />
                <h3 className="font-head font-bold text-charcoal-900 text-[1.02rem]">Brentwood, TN</h3>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103305.58165931869!2d-86.86077455087963!3d35.988549775947384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88647baeba495ce3%3A0x357d403883f6df90!2sBrentwood%2C%20TN%2C%20USA!5e0!3m2!1sen!2s!4v1786813914387!5m2!1sen!2s"
                className="w-full h-[320px] block"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Map of Brentwood, TN"
              />
            </Reveal>
            <Reveal delay={1} className="rounded-[22px] overflow-hidden border border-line shadow-sm">
              <div className="flex items-center gap-2.5 px-5 py-4 bg-white">
                <Icon name="mapPin" className="h-5 w-5 text-amber-500 shrink-0" />
                <h3 className="font-head font-bold text-charcoal-900 text-[1.02rem]">Franklin, TN</h3>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206833.63793189486!2d-87.01429350324003!3d35.903511398881655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886378e0e0f94935%3A0xf7addba980fa8da1!2sFranklin%2C%20TN%2C%20USA!5e0!3m2!1sen!2s!4v1786813995770!5m2!1sen!2s"
                className="w-full h-[320px] block"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Map of Franklin, TN"
              />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
