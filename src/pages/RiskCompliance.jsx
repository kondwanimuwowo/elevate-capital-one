import { ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import Page from "../components/ui/Page.jsx";
import PageHero from "../components/ui/PageHero.jsx";
import Section from "../components/ui/Section.jsx";
import Card from "../components/ui/Card.jsx";
import ImageFrame from "../components/ui/ImageFrame.jsx";
import { imagery } from "../data/imagery.js";

export default function RiskCompliance() {
  return (
    <Page>
      <PageHero
        eyebrow="Risk & Compliance"
        title="Risk-managed and compliance-ready"
        subtitle="A disciplined framework that protects investors and businesses while supporting sustainable growth."
        icon={ShieldCheck}
      />

      <Section eyebrow="Framework" title="Core risk capabilities">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
          <ImageFrame
            src={imagery.riskCompliance.feature.src}
            alt={imagery.riskCompliance.feature.alt}
            ratio="portrait"
            imgClassName="object-[center_30%]"
            className="lg:col-span-5"
          />
          <div className="grid gap-4 lg:col-span-7 lg:grid-cols-2">
            <Card
              title="Risk identification & assessment"
              text="Systematic evaluation of financial, operational, market, and regulatory risks to understand exposure and likely impact."
            />
            <Card
              title="Mitigation strategies"
              text="Tailored mitigation measures aligned to each business profile, funding structure, and operational maturity."
              tone="dark"
            />
            <Card
              title="Monitoring & reporting"
              text="Continuous monitoring of key indicators, capital utilization, and asset integrity with transparent stakeholder reporting."
            />
            <Card
              title="Contingency planning"
              text="Proactive controls and practical response pathways to manage unforeseen events."
              tone="dark"
            />
          </div>
        </div>
      </Section>

      <Section eyebrow="Compliance" title="Trust and accountability">
        <div className="rounded-3xl bg-navy-950 p-8 text-white shadow-soft">
          <div className="text-sm font-semibold">Compliance posture</div>
          <div className="mt-3 h-[2px] w-10 bg-gold-500" />
          <div className="mt-4 max-w-3xl text-[14px] leading-6 text-white/75">
            This site presents governance and compliance information at a summary level. Official certificates and statutory records are available in the compliance documents section and updated as new versions are issued.
          </div>
          <Link
            to="/compliance"
            className="mt-5 inline-flex rounded-full border border-white/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:border-white/50"
          >
            View Compliance Documents
          </Link>
        </div>
      </Section>
    </Page>
  );
}
