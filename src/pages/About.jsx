import Page from "../components/ui/Page.jsx";
import PageHero from "../components/ui/PageHero.jsx";
import Section from "../components/ui/Section.jsx";
import Card from "../components/ui/Card.jsx";

export default function About() {
  return (
    <Page>
      <PageHero
        eyebrow="About"
        title="Who we are"
        subtitle="A strategic partner for enterprises seeking structure, operational systems and growth."
      />

      <Section eyebrow="Overview" title="Built to bridge potential and performance">
        <div className="grid gap-4 lg:grid-cols-2">
          <Card
            title="Our story"
            text="We exist to make access to funding easier while protecting value for investors and stakeholders, ensuring potential doesn’t go unrealized."
          />
          <Card
            title="Our focus"
            text="Structured capital solutions supported by business development and disciplined collateral management."
            tone="dark"
          />
        </div>
      </Section>

      <Section eyebrow="Values" title="What we stand for">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["Partnership", "Impact", "Integrity", "Excellence"].map((v) => (
            <div key={v} className="rounded-2xl border border-black/10 bg-white p-6 shadow-soft">
              <div className="text-gold-600 font-semibold tracking-tightish">{v}</div>
              <div className="mt-3 h-[2px] w-10 bg-gold-500" />
              <div className="mt-4 text-sm text-ink/70">A core commitment guiding how we deliver.</div>
            </div>
          ))}
        </div>
      </Section>
    </Page>
  );
}
