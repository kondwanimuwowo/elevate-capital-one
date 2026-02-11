import { FileText } from "lucide-react";
import Page from "../components/ui/Page.jsx";
import PageHero from "../components/ui/PageHero.jsx";
import Section from "../components/ui/Section.jsx";
import { complianceDocs } from "../data/complianceDocs.js";

export default function Compliance() {
  return (
    <Page>
      <PageHero
        eyebrow="Compliance"
        title="Compliance Documents"
        subtitle="Click any compliance document to view its image."
        icon={FileText}
      />

      <Section eyebrow="Gallery" title="Compliance documents">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {complianceDocs.map((doc) => (
            <a
              key={doc.title}
              href={doc.image}
              target="_blank"
              rel="noreferrer"
              className="block border-2 border-gold-500 bg-[#fff8e6] p-3 shadow-soft transition hover:shadow-lg"
              style={{ borderRadius: "4px" }}
            >
              <div className="border border-gold-600 bg-white p-2" style={{ borderRadius: "2px" }}>
                <div
                  className={[
                    "overflow-hidden border border-gold-500/70 bg-white",
                    doc.orientation === "landscape" ? "aspect-[4/3]" : "aspect-[210/297]"
                  ].join(" ")}
                  style={{ borderRadius: "2px" }}
                >
                  <img
                    src={doc.image}
                    alt={doc.title}
                    loading="lazy"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>

              <h4 className="mt-3 text-sm font-semibold text-navy-950">{doc.title}</h4>
              {doc.summary ? <p className="mt-1 text-xs leading-5 text-ink/70">{doc.summary}</p> : null}
            </a>
          ))}
        </div>
      </Section>
    </Page>
  );
}
