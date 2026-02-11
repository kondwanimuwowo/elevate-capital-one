import { Briefcase } from "lucide-react";
import Page from "../components/ui/Page.jsx";
import PageHero from "../components/ui/PageHero.jsx";
import Section from "../components/ui/Section.jsx";
import Card from "../components/ui/Card.jsx";
import ImageFrame from "../components/ui/ImageFrame.jsx";
import { imagery } from "../data/imagery.js";

export default function Services() {
  return (
    <Page>
      <PageHero
        eyebrow="Services"
        title="A complete growth toolkit"
        subtitle="Integrated services that combine funding, operational support, and collateral discipline."
        icon={Briefcase}
      />

      <div className="relative overflow-hidden">
        <div
          className="section-image-bg"
          style={{
            backgroundImage: `url(${imagery.services.background.src})`,
            backgroundPosition: "center 24%"
          }}
          aria-hidden="true"
        />
        <div className="section-image-overlay-soft" aria-hidden="true" />

        <div className="relative">
          <Section eyebrow="Catalogue" title="What we offer">
            <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
              <ImageFrame
                src={imagery.services.feature.src}
                alt={imagery.services.feature.alt}
                ratio="landscape"
                imgClassName="object-[center_28%] md:object-[center_32%]"
                className="lg:col-span-5"
              />
              <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
                <Card
                  title="Business Funding"
                  text="Structured funding paired with investor-ready planning systems and flexible repayment considerations."
                />
                <Card
                  title="Business Development"
                  text="Restructuring, operational optimization, and leadership coaching to build scalable systems."
                  tone="dark"
                />
                <div className="sm:col-span-2">
                  <Card
                    title="Collateral Management"
                    text="Valuation, monitoring, and transparent reporting designed to protect assets behind funding."
                  />
                </div>
              </div>
            </div>
          </Section>
        </div>
      </div>
    </Page>
  );
}
