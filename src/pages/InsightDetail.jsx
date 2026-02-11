import { BookOpen } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Page from "../components/ui/Page.jsx";
import PageHero from "../components/ui/PageHero.jsx";
import Section from "../components/ui/Section.jsx";
import { insights } from "../data/insights.js";

export default function InsightDetail() {
  const { slug } = useParams();
  const post = insights.find((x) => x.slug === slug);
  const sections = post?.sections || [];

  if (!post) {
    return (
      <Page>
        <PageHero eyebrow="Insights" title="Not found" subtitle="This article does not exist." icon={BookOpen} />
        <div className="mx-auto max-w-6xl px-4 py-10 lg:py-14">
          <Link to="/insights" className="text-sm font-medium text-ink underline">
            Back to Insights
          </Link>
        </div>
      </Page>
    );
  }

  return (
    <Page>
      <PageHero
        eyebrow="Insights"
        title={post.title}
        subtitle={new Date(post.date).toLocaleDateString()}
        icon={BookOpen}
      />

      <Section eyebrow="Article" title="Read">
        <div className="max-w-3xl space-y-5 text-[15px] leading-7 text-ink/80">
          {sections.length > 0 ? (
            <nav className="rounded-2xl border border-black/10 bg-white p-5 shadow-soft" aria-label="Article table of contents">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/60">On this page</div>
              <ul className="mt-3 space-y-2">
                {sections.map((section, index) => {
                  const sectionId = `section-${index + 1}`;

                  return (
                    <li key={sectionId}>
                      <a className="text-sm text-ink/80 transition hover:text-ink" href={`#${sectionId}`}>
                        {section.heading}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          ) : null}

          {sections.map((section, index) => {
            const sectionId = `section-${index + 1}`;

            return (
              <article key={sectionId} id={sectionId} className="scroll-mt-24 space-y-2">
                <h2 className="text-base font-semibold text-navy-900">{section.heading}</h2>
                <p>{section.content}</p>
              </article>
            );
          })}
          <div className="pt-6">
            <Link to="/insights" className="text-sm font-medium text-ink underline">
              Back to Insights
            </Link>
          </div>
        </div>
      </Section>
    </Page>
  );
}
