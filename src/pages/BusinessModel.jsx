import Page from "../components/ui/Page.jsx";
import PageHero from "../components/ui/PageHero.jsx";
import Section from "../components/ui/Section.jsx";
import Card from "../components/ui/Card.jsx";

export default function BusinessModel() {
  return (
    <Page>
      <PageHero
        eyebrow="Business Model"
        title="Structured capital deployment"
        subtitle="Funding approaches designed to align incentives, protect value, and support growth."
      />

      <Section eyebrow="Models" title="How we deploy capital">
        <div className="grid gap-4 lg:grid-cols-3">
          <Card
            title="Debt Financing"
            text="Structured loans with defined terms for businesses with predictable cash flows that require expansion, working capital, or asset acquisition."
          />
          <Card
            title="Equity Investment"
            text="Select opportunities where funding is deployed in exchange for equity ownership, aligned to long-term value creation."
            tone="dark"
          />
          <Card
            title="Convertible Instruments"
            text="Debt with an option to convert into equity under predefined triggers, valuation benchmarks, and timelines."
          />
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
