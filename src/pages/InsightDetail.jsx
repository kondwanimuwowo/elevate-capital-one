import { Link, useParams } from "react-router-dom";
import Page from "../components/ui/Page.jsx";
import PageHero from "../components/ui/PageHero.jsx";
import Section from "../components/ui/Section.jsx";
import { insights } from "../data/insights.js";

export default function InsightDetail() {
  const { slug } = useParams();
  const post = insights.find((x) => x.slug === slug);

  if (!post) {
    return (
      <Page>
        <PageHero eyebrow="Insights" title="Not found" subtitle="This article does not exist." />
        <div className="mx-auto max-w-6xl px-4 py-10">
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
      />

      <Section eyebrow="Article" title="Read">
        <div className="max-w-3xl space-y-5 text-[15px] leading-7 text-ink/80">
          {post.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
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
