import { Link } from "react-router-dom";
import Page from "../components/ui/Page.jsx";
import PageHero from "../components/ui/PageHero.jsx";
import Section from "../components/ui/Section.jsx";
import { insights } from "../data/insights.js";

export default function Insights() {
  return (
    <Page>
      <PageHero
        eyebrow="Insights"
        title="Notes on capital, discipline, and growth"
        subtitle="Short, clear thinking. Written for founders and stakeholders."
      />

      <Section eyebrow="Articles" title="Latest">
        <div className="grid gap-4 lg:grid-cols-2">
          {insights.map((p) => (
            <Link
              key={p.slug}
              to={`/insights/${p.slug}`}
              className="rounded-2xl border border-black/10 bg-white p-6 shadow-soft hover:border-black/20 transition"
            >
              <div className="text-xs uppercase tracking-[0.16em] text-ink/50">
                {new Date(p.date).toLocaleDateString()}
              </div>
              <div className="mt-3 text-lg font-semibold text-navy-900">{p.title}</div>
              <div className="mt-3 h-[2px] w-10 bg-gold-500" />
              <div className="mt-4 text-[14px] leading-6 text-ink/70">{p.excerpt}</div>
              <div className="mt-5 text-sm font-medium text-ink">Read more</div>
            </Link>
          ))}
        </div>
      </Section>
    </Page>
  );
}
