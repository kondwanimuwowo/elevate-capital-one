import Page from "../components/ui/Page.jsx";
import PageHero from "../components/ui/PageHero.jsx";
import Section from "../components/ui/Section.jsx";
import Card from "../components/ui/Card.jsx";
import ImageFrame from "../components/ui/ImageFrame.jsx";
import { Landmark } from "lucide-react";
import { imagery } from "../data/imagery.js";

export default function About() {
  return (
    <Page>
      <PageHero
        eyebrow="About"
        title="Who we are"
        subtitle="A strategic partner for enterprises seeking structure, operational systems and growth."
        icon={Landmark}
      />

      <Section eyebrow="Direction" title="Vision and mission">
        <div className="grid gap-4 lg:grid-cols-2">
          <Card
            title="Our vision"
            text="We envision a future where businesses in emerging markets scale responsibly and thrive through strong systems, strategic structure, and disciplined growth."
          />
          <Card
            title="Our mission"
            text="To empower growth-oriented businesses through structured funding, strategic business development, and disciplined collateral management so founders are financially supported and risk-aware."
            tone="dark"
          />
        </div>
      </Section>

      <Section eyebrow="Overview" title="Built to bridge potential and performance">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
          <ImageFrame
            src={imagery.about.overview.src}
            alt={imagery.about.overview.alt}
            ratio="landscape"
            imgClassName="object-[center_24%] md:object-[center_30%]"
            className="lg:col-span-5"
          />
          <div className="grid gap-4 lg:col-span-7">
            <Card
              title="Our story"
              text="We exist to make access to funding easier while protecting value for investors and stakeholders, ensuring potential does not go unrealized."
            />
            <Card
              title="Our focus"
              text="Structured capital solutions supported by business development and disciplined collateral management."
              tone="dark"
            />
          </div>
        </div>
      </Section>

      <div className="relative overflow-hidden">
        <div
          className="section-image-bg"
          style={{
            backgroundImage: `url(${imagery.about.valuesBackground.src})`,
            backgroundPosition: "center 28%"
          }}
          aria-hidden="true"
        />
        <div className="section-image-overlay-soft" aria-hidden="true" />

        <div className="relative">
          <Section eyebrow="Values" title="What we stand for">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {["Partnership", "Impact", "Integrity", "Excellence"].map((v) => (
                <div key={v} className="rounded-2xl border border-black/10 bg-white p-6 shadow-soft">
                  <div className="font-semibold tracking-tightish text-gold-600">{v}</div>
                  <div className="mt-3 h-[2px] w-10 bg-gold-500" />
                  <div className="mt-4 text-sm text-ink/70">A core commitment guiding how we deliver.</div>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </div>
    </Page>
  );
}
