import { Banknote } from "lucide-react";
import Page from "../components/ui/Page.jsx";
import PageHero from "../components/ui/PageHero.jsx";
import Section from "../components/ui/Section.jsx";
import Card from "../components/ui/Card.jsx";
import ImageFrame from "../components/ui/ImageFrame.jsx";
import { imagery } from "../data/imagery.js";

export default function BusinessModel() {
  return (
    <Page>
      <PageHero
        eyebrow="Business Model"
        title="Structured capital deployment"
        subtitle="Funding approaches designed to align incentives, protect value, and support growth."
        icon={Banknote}
      />

      <Section eyebrow="Models" title="How we deploy capital">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
          <ImageFrame
            src={imagery.businessModel.feature.src}
            alt={imagery.businessModel.feature.alt}
            ratio="portrait"
            imgClassName="object-[center_36%]"
            className="lg:col-span-5"
          />
          <div className="grid gap-4 lg:col-span-7">
            <Card
              title="Debt Financing"
              text="Growth capital structured as loans with clear terms and competitive rates, suited to businesses with predictable cash flows seeking expansion, working capital, or asset acquisition while retaining ownership control."
            />
            <Card
              title="Equity Investment"
              text="In select opportunities, capital is deployed for equity ownership to align investor returns with business growth, performance, and long-term strategic value creation."
              tone="dark"
            />
            <Card
              title="Convertible Instruments"
              text="Funding provided initially as debt with conversion to equity under predefined triggers, valuation benchmarks, and timelines, balancing early founder flexibility with capital protection."
            />
          </div>
        </div>
      </Section>

      <Section eyebrow="Process" title="A disciplined engagement journey">
        <div className="grid gap-4 lg:grid-cols-2">
          <Card title="Assess" text="Evaluate readiness, risks, and capital requirements to align terms with reality." />
          <Card title="Structure" text="Define terms, protections, and monitoring so capital is deployed with discipline." />
          <Card title="Support" text="Strengthen systems and execution through practical operational support." />
          <Card title="Monitor" text="Track utilization and performance with clear reporting and accountability." tone="dark" />
        </div>
      </Section>
    </Page>
  );
}
