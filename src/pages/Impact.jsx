import Page from "../components/ui/Page.jsx";
import PageHero from "../components/ui/PageHero.jsx";
import Section from "../components/ui/Section.jsx";
import Card from "../components/ui/Card.jsx";

export default function Impact() {
  return (
    <Page>
      <PageHero
        eyebrow="Impact"
        title="Measurable, long-term outcomes"
        subtitle="Strengthening businesses strategically and operationally to drive sustainable results."
      />

      <Section eyebrow="Strategic impact" title="Designed for performance">
        <div className="grid gap-4 lg:grid-cols-2">
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
      </Section>
    </Page>
  );
}
