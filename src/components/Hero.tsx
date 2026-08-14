import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { Button } from "./Button";
import { Icon } from "./icons";
import { business } from "@/lib/site";

const assurances = [
  `${business.yearsExperience} Years Experience`,
  "Free Written Estimates",
  "Licensed & Insured",
];

export function Hero() {
  return (
    <section className="relative bg-charcoal-900 text-ink-900 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-image.png')" }}
      />
      <Container className="relative z-10">
        <Reveal className="py-20 sm:py-28 lg:py-[12rem] max-w-[770px]">
          <div className="rounded-3xl bg-gray-200/90 backdrop-blur-sm p-6 sm:p-9 lg:p-11">
            <span className="inline-flex items-center gap-3 bg-amber-500/45 border border-amber-500/60 rounded-full pl-3 pr-4 py-2 mb-6 text-[0.86rem]">
              <span className="text-gold-400 tracking-[2px]">★★★★★</span>
              Rated {business.rating}/5 by Williamson County homeowners
            </span>
            <h1 className="text-ink-900 text-[clamp(2.1rem,4.8vw,3.6rem)] leading-[1.08] mb-5.5">
              Concrete, Paver, Aggregate, Driveway Sealing &amp; Pressure Washing in{" "}
              <em className="not-italic text-amber-600">Brentwood &amp; Franklin</em>
            </h1>
            <p className="text-[clamp(1.05rem,2vw,1.26rem)] text-ink-900 max-w-[630px] mb-8">
              Faded, stained and weathered concrete doesn&apos;t have to stay that way. We clean, seal and
              pressure wash driveways, patios and pavers with professional-grade products and careful,
              detailed work.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button href="/contact" size="lg" showArrow>
                Get My Free Estimate
              </Button>
              <Button href={`tel:${business.phoneTel}`} variant="ghost-dark" size="lg">
                <Icon name="phone" className="h-[18px] w-[18px]" />
                Call or Text {business.phoneDisplay}
              </Button>
            </div>
            <ul className="flex flex-wrap gap-5.5 mt-9.5 pt-7.5 border-t border-ink-900/15">
              {assurances.map((item) => (
                <li key={item} className="inline-flex items-center gap-2.5 text-[0.92rem] text-ink-900">
                  <Icon name="check" className="h-5 w-5 text-amber-600 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
      <div className="hidden lg:block absolute right-[clamp(20px,5vw,56px)] bottom-[clamp(40px,8vw,86px)] z-3 w-[290px] rounded-[14px] bg-white p-5.5 shadow-lg text-ink-700">
        <span className="inline-flex items-center gap-2 bg-amber-500/12 text-amber-700 font-head font-bold text-[0.78rem] px-3 py-1.5 rounded-full mb-3">
          <Icon name="shieldCheck" className="h-4 w-4" />
          Free Estimates
        </span>
        <h4 className="text-[1.05rem] mb-1 text-charcoal-900">Local Family Team</h4>
        <p className="text-[0.85rem] text-ink-500 mb-3.5">Every job starts with a free on-site inspection and a straightforward price.</p>
        <div className="h-2 bg-cream-200 rounded-full overflow-hidden">
          <div className="h-full w-[96%] rounded-full bg-linear-to-r from-amber-500 to-amber-700" />
        </div>
        <small className="block mt-2 text-[0.74rem] text-ink-500">96% of clients come from referrals &amp; repeat work</small>
      </div>
    </section>
  );
}
