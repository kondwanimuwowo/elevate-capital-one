import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Page from "../components/ui/Page.jsx";
import Section from "../components/ui/Section.jsx";
import Card from "../components/ui/Card.jsx";
import { brand } from "../data/brand.js";

export default function Home() {
  return (
    <Page>
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 py-10 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="inline-flex items-center gap-3"
              >
                <div className="h-[2px] w-10 bg-gold-500" />
                <div className="text-xs uppercase tracking-[0.18em] text-ink/60">
                  Corporate Profile
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="mt-5 font-display text-5xl leading-[0.95] tracking-tightish text-navy-950 sm:text-6xl"
              >
                {brand.taglineTop}
                <br />
                {brand.taglineBottom}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="mt-5 max-w-xl text-[15px] leading-7 text-ink/75"
              >
                A structured approach to funding, operational discipline, and collateral management designed to protect value and drive sustainable outcomes.
              </motion.p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  to="/services"
                  className="rounded-full bg-navy-950 px-5 py-2.5 text-sm font-medium text-white hover:bg-navy-900 transition"
                >
                  Explore Services
                </Link>
                <Link
                  to="/contact"
                  className="rounded-full border border-black/15 px-5 py-2.5 text-sm font-medium text-ink hover:border-black/25 transition"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[28px] bg-navy-950 p-8 text-white shadow-soft">
                <div className="text-xs uppercase tracking-[0.16em] text-white/60">
                  Snapshot
                </div>

                <div className="mt-4 grid gap-4">
                  <Metric label="Funding Models" value="Debt, Equity, Convertible" />
                  <Metric label="Core Focus" value="Disciplined Capital Deployment" />
                  <Metric label="Approach" value="Risk-Aware, Asset-Focused" />
                </div>

                <div className="mt-7 h-[2px] w-12 bg-gold-500" />

                <div className="mt-5 text-sm text-white/75">
                  A concise profile of our funding models, operating discipline, and risk posture.
                </div>

                <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/10" />
                <div className="pointer-events-none absolute -bottom-16 -left-16 h-72 w-72 rounded-full border border-white/10" />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-6xl px-4 lg:mt-14">
          <div className="h-px bg-black/10" />
        </div>
      </section>

      <Section eyebrow="What We Do" title="Services built for growth and control">
        <div className="grid gap-4 lg:grid-cols-3">
          <Card
            title="Business Funding"
            text="Structured funding paired with practical systems that strengthen readiness and improve utilization."
          />
          <Card
            title="Business Development"
            text="Operational optimization and leadership support that strengthens execution and scalability."
          />
          <Card
            title="Collateral Management"
            text="Disciplined valuation and monitoring to protect assets and preserve long-term value."
          />
        </div>
      </Section>

      <Section eyebrow="How We Work" title="Structure, discipline, and accountability">
        <div className="grid gap-4 lg:grid-cols-2">
          <Card
            title="Risk-aware deployment"
            text="Clear assessment and mitigation frameworks reduce uncertainty and guide smart decisions."
            tone="dark"
          />
          <Card
            title="Long-term partnership"
            text="We work alongside businesses to support performance-driven growth and measurable outcomes."
          />
        </div>
      </Section>
    </Page>
  );
}

function Metric({ label, value }) {
  return (
    <div className="rounded-2xl bg-white/5 p-5">
      <div className="text-xs uppercase tracking-[0.16em] text-white/60">{label}</div>
      <div className="mt-2 text-base font-medium">{value}</div>
    </div>
  );
}
