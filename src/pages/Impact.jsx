import { BarChart3 } from "lucide-react";
import Page from "../components/ui/Page.jsx";
import PageHero from "../components/ui/PageHero.jsx";
import Section from "../components/ui/Section.jsx";
import Card from "../components/ui/Card.jsx";
import ImageFrame from "../components/ui/ImageFrame.jsx";
import { imagery } from "../data/imagery.js";

export default function Impact() {
  return (
    <Page>
      <PageHero
        eyebrow="Impact"
        title="Measurable, long-term outcomes"
        subtitle="Strengthening businesses strategically and operationally to drive sustainable results."
        icon={BarChart3}
      />

      <div className="relative overflow-hidden">
        <div
          className="section-image-bg"
          style={{
            backgroundImage: `url(${imagery.impact.background.src})`,
            backgroundPosition: "center 30%"
          }}
          aria-hidden="true"
        />
        <div className="section-image-overlay-soft" aria-hidden="true" />

        <div className="relative">
          <Section eyebrow="Strategic impact" title="Designed for performance">
            <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
              <ImageFrame
                src={imagery.impact.feature.src}
                alt={imagery.impact.feature.alt}
                ratio="landscape"
                imgClassName="object-[center_24%] md:object-[center_34%]"
                className="lg:col-span-5"
              />
              <div className="grid gap-4 lg:col-span-7">
                <Card
                  title="Sustainable growth"
                  text="Support models that prioritize resilience, disciplined execution, and value preservation."
                />
                <Card
                  title="Performance-driven alignment"
                  text="Capital deployment tied to operational readiness, monitoring, and accountability."
                  tone="dark"
                />
              </div>
            </div>
          </Section>
        </div>
      </div>
    </Page>
  );
}
