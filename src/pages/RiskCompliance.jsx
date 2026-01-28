import Page from "../components/ui/Page.jsx";
import PageHero from "../components/ui/PageHero.jsx";
import Section from "../components/ui/Section.jsx";
import Card from "../components/ui/Card.jsx";

export default function RiskCompliance() {
  return (
    <Page>
      <PageHero
        eyebrow="Risk & Compliance"
        title="Risk-aware by design"
        subtitle="Frameworks that protect investors and businesses while supporting sustainable growth."
      />

      <Section eyebrow="Framework" title="Core risk capabilities">
        <div className="grid gap-4 lg:grid-cols-2">
          <Card
            title="Risk identification & assessment"
            text="Systematic evaluation of financial, operational, market, and regulatory risks to understand exposure and impact."
          />
          <Card
            title="Mitigation strategies"
            text="Tailored measures based on business profile, funding structure, and operational maturity."
            tone="dark"
          />
          <Card
            title="Monitoring & reporting"
            text="Continuous monitoring of KPIs, capital utilization, and asset integrity with clear stakeholder reporting."
          />
          <Card
            title="Contingency planning"
            text="Proactive measures and exit strategies to manage unforeseen challenges."
            tone="dark"
          />
        </div>
      </Section>

      <Section eyebrow="Compliance" title="Trust and accountability">
        <div className="rounded-3xl bg-navy-950 p-8 text-white shadow-soft">
          <div className="text-sm font-semibold">Compliance posture</div>
          <div className="mt-3 h-[2px] w-10 bg-gold-500" />
          <div className="mt-4 max-w-3xl text-[14px] leading-6 text-white/75">
            This website communicates compliance and governance at a high level. Specific regulatory documentation can be provided through controlled channels when required.
          </div>
        </div>
      </Section>
    </Page>
  );
}
