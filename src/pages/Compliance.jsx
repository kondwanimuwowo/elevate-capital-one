import { FileText } from "lucide-react";
import Page from "../components/ui/Page.jsx";
import PageHero from "../components/ui/PageHero.jsx";
import Section from "../components/ui/Section.jsx";
import ImageFrame from "../components/ui/ImageFrame.jsx";
import { complianceDocs } from "../data/complianceDocs.js";
import { imagery } from "../data/imagery.js";

export default function Compliance() {
  const groups = groupByCategory(complianceDocs);
  const generatedAt = new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  const featuredDoc = complianceDocs[0];

  return (
    <Page>
      <PageHero
        eyebrow="Compliance"
        title="Compliance Documents"
        subtitle="Access company compliance, registration, and tax documentation in one place."
        icon={FileText}
      />

      <Section eyebrow="Downloads" title="Available documentation">
        <div className="grid gap-4 lg:grid-cols-12 lg:items-stretch">
          <ImageFrame
            src={imagery.compliance.feature.src}
            alt={imagery.compliance.feature.alt}
            ratio="landscape"
            imgClassName="object-[center_42%]"
            className="lg:col-span-5"
          />

          {featuredDoc ? (
            <div className="rounded-2xl border border-black/10 bg-navy-950 p-5 text-white shadow-soft lg:col-span-7 lg:p-6">
              <div className="text-xs uppercase tracking-[0.12em] text-white/60">Featured document</div>
              <div className="mt-2 text-lg font-semibold">{featuredDoc.title}</div>
              <div className="mt-1 text-sm text-white/75">{featuredDoc.summary}</div>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a
                  className="rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-navy-950 transition hover:bg-white/90"
                  href={`/compliance/${encodeURIComponent(featuredDoc.file)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  View latest
                </a>
                <a
                  className="rounded-full border border-white/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:border-white/50"
                  href={`/compliance/${encodeURIComponent(featuredDoc.file)}`}
                  download={featuredDoc.file}
                >
                  Download
                </a>
              </div>
            </div>
          ) : null}
        </div>

        <div className="mt-5 rounded-2xl border border-black/10 bg-white p-5 shadow-soft lg:mt-6 lg:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-[0.12em] text-ink/60">
            <span>Documents are refreshed periodically.</span>
            <span>Index updated: {generatedAt}</span>
          </div>
        </div>

        <div className="mt-6 grid gap-8">
          {Object.entries(groups).map(([category, docs]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-ink/70">{category}</h3>
              <div className="mt-4 grid gap-4 lg:grid-cols-2">
                {docs.map((doc) => {
                  const href = `/compliance/${encodeURIComponent(doc.file)}`;

                  return (
                    <article key={doc.file} className="rounded-2xl border border-black/10 bg-white p-6 shadow-soft">
                      <h4 className="text-base font-semibold text-navy-950">{doc.title}</h4>
                      {doc.summary ? <p className="mt-2 text-sm leading-6 text-ink/70">{doc.summary}</p> : null}
                      <p className="mt-3 text-xs uppercase tracking-[0.1em] text-ink/50">{doc.file}</p>

                      <div className="mt-5 flex items-center gap-3">
                        <a
                          className="rounded-full bg-navy-950 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-navy-900"
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          View PDF
                        </a>
                        <a
                          className="rounded-full border border-black/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-ink transition hover:border-black/25"
                          href={href}
                          download={doc.file}
                        >
                          Download
                        </a>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </Page>
  );
}

function groupByCategory(docs) {
  return docs.reduce((acc, doc) => {
    const key = doc.category || "General";
    if (!acc[key]) acc[key] = [];
    acc[key].push(doc);
    return acc;
  }, {});
}
