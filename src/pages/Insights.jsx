import { Newspaper } from "lucide-react";
import { Link } from "react-router-dom";
import Page from "../components/ui/Page.jsx";
import PageHero from "../components/ui/PageHero.jsx";
import Section from "../components/ui/Section.jsx";
import ImageFrame from "../components/ui/ImageFrame.jsx";
import { insights } from "../data/insights.js";
import { imagery } from "../data/imagery.js";
import { formatDisplayDate } from "../lib/date.js";

export default function Insights() {
  return (
    <Page>
      <PageHero
        eyebrow="Insights"
        title="Notes on capital, discipline, and growth"
        subtitle="Short, clear thinking. Written for founders and stakeholders."
        icon={Newspaper}
      />

      <div className="relative overflow-hidden">
        <div
          className="section-image-bg"
          style={{
            backgroundImage: `url(${imagery.insights.background.src})`,
            backgroundPosition: "center 26%"
          }}
          aria-hidden="true"
        />
        <div className="section-image-overlay-soft" aria-hidden="true" />

        <div className="relative">
          <Section eyebrow="Articles" title="Latest">
            <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
              <ImageFrame
                src={imagery.insights.feature.src}
                alt={imagery.insights.feature.alt}
                ratio="portrait"
                imgClassName="object-[center_26%] md:object-[center_30%]"
                className="lg:col-span-5"
              />

              <div className="grid gap-4 lg:col-span-7">
                {insights.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/insights/${p.slug}`}
                    className="rounded-2xl border border-black/10 bg-white p-6 shadow-soft transition hover:border-black/20"
                  >
                    <div className="text-xs uppercase tracking-[0.16em] text-ink/50">
                      {formatDisplayDate(p.date)}
                    </div>
                    <div className="mt-3 text-lg font-semibold text-navy-900">{p.title}</div>
                    <div className="mt-3 h-[2px] w-10 bg-gold-500" />
                    <div className="mt-4 text-[14px] leading-6 text-ink/70">{p.excerpt}</div>
                    <div className="mt-5 text-sm font-medium text-ink">Read more</div>
                  </Link>
                ))}
              </div>
            </div>
          </Section>
        </div>
      </div>
    </Page>
  );
}
