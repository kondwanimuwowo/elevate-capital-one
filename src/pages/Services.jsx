import Page from "../components/ui/Page.jsx";
import PageHero from "../components/ui/PageHero.jsx";
import Section from "../components/ui/Section.jsx";
import Card from "../components/ui/Card.jsx";

export default function Services() {
  return (
    <Page>
      <PageHero
        eyebrow="Services"
        title="A complete growth toolkit"
        subtitle="Integrated services that combine funding, operational support, and collateral discipline."
      />

      <Section eyebrow="Catalogue" title="What we offer">
        <div className="grid gap-4 lg:grid-cols-3">
          <Card
            title="Business Funding"
            text="Structured funding paired with investor-ready planning systems and flexible repayment considerations."
          />
          <Card
            title="Business Development"
            text="Restructuring, operational optimization, and leadership coaching to build scalable systems."
            tone="dark"
          />
          <Card
            title="Collateral Management"
            text="Valuation, monitoring, and transparent reporting designed to protect assets behind funding."
          />
        </div>
      </Section>
    </Page>
  );
}
