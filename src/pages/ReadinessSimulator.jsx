import { Gauge, Download, TriangleAlert } from "lucide-react";
import Page from "../components/ui/Page.jsx";
import PageHero from "../components/ui/PageHero.jsx";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const QUESTIONS = [
  {
    id: "cashFlowStability",
    label: "How stable are your monthly cash flows over the last 12 months?",
    pillar: "Financial discipline"
  },
  {
    id: "unitEconomics",
    label: "How clear and reliable are your unit economics (margin, CAC, payback)?",
    pillar: "Financial discipline"
  },
  {
    id: "governance",
    label: "How formal is governance (board cadence, decision records, controls)?",
    pillar: "Governance"
  },
  {
    id: "managementDepth",
    label: "How strong is management depth beyond the founders?",
    pillar: "Governance"
  },
  {
    id: "collateralQuality",
    label: "How strong and verifiable are collateral assets available for security?",
    pillar: "Collateral strength"
  },
  {
    id: "assetTracking",
    label: "How disciplined is your collateral/asset monitoring and valuation process?",
    pillar: "Collateral strength"
  },
  {
    id: "reportingCadence",
    label: "How consistent and investor-ready is your financial and operational reporting?",
    pillar: "Reporting maturity"
  },
  {
    id: "kpiVisibility",
    label: "How real-time is KPI visibility across growth, risk, and utilization?",
    pillar: "Reporting maturity"
  },
  {
    id: "growthPlan",
    label: "How execution-ready is your 12-18 month growth roadmap?",
    pillar: "Growth readiness"
  },
  {
    id: "marketRiskPlan",
    label: "How prepared are you with contingency plans for market or regulatory shocks?",
    pillar: "Growth readiness"
  }
];

const PILLARS = [
  "Financial discipline",
  "Governance",
  "Collateral strength",
  "Reporting maturity",
  "Growth readiness"
];

const RATING_LABELS = {
  1: "Very weak",
  2: "Weak",
  3: "Developing",
  4: "Strong",
  5: "Best-in-class"
};

const QUESTION_RATING_DESCRIPTIONS = {
  cashFlowStability: {
    1: "Very weak: Cash flow is unpredictable month to month, with frequent shortfalls and no reliable forecast baseline.",
    2: "Weak: Some inflow patterns exist, but volatility is still high and cash planning often misses actual outcomes.",
    3: "Developing: Cash flow trends are partially understood and forecasted, but consistency and variance control remain uneven.",
    4: "Strong: Cash flow is generally stable with regular forecasting and manageable variances across operating cycles.",
    5: "Best-in-class: Cash flow behavior is highly predictable, stress-tested, and actively optimized with clear early-warning triggers."
  },
  unitEconomics: {
    1: "Very weak: Core metrics like margin, CAC, and payback are unclear or unavailable, making profitability hard to judge.",
    2: "Weak: Unit economics are tracked inconsistently and assumptions are not validated regularly against real performance.",
    3: "Developing: Key metrics are defined and reviewed, but calculation rigor and decision use are not yet consistent.",
    4: "Strong: Unit economics are reliable, regularly monitored, and actively used to guide growth and spend decisions.",
    5: "Best-in-class: Unit economics are deeply embedded in operating decisions with tight attribution, forecasting, and scenario analysis."
  },
  governance: {
    1: "Very weak: Governance is informal, decisions are ad hoc, and there is minimal documented accountability.",
    2: "Weak: Some governance routines exist, but cadence, controls, and records are incomplete or inconsistently enforced.",
    3: "Developing: Governance structure is in place and functioning, though decision discipline and control maturity vary.",
    4: "Strong: Governance is structured, documented, and regularly followed with clear ownership and oversight.",
    5: "Best-in-class: Governance is rigorous and proactive, with decision transparency, effective controls, and strong strategic alignment."
  },
  managementDepth: {
    1: "Very weak: Execution depends heavily on founders, with limited second-line leadership or delegated ownership.",
    2: "Weak: Some support roles exist, but leadership depth is insufficient for reliable scale or continuity under pressure.",
    3: "Developing: A growing management layer can support operations, but key capabilities and succession are still maturing.",
    4: "Strong: Leadership depth supports consistent execution beyond founders across critical business functions.",
    5: "Best-in-class: Management bench is deep, resilient, and performance-managed, with strong succession and cross-functional leadership."
  },
  collateralQuality: {
    1: "Very weak: Collateral is limited, poorly documented, or difficult to verify and enforce in downside scenarios.",
    2: "Weak: Some collateral exists, but valuation confidence and legal defensibility are not consistently reliable.",
    3: "Developing: Collateral coverage is moderate with partial documentation and acceptable, but improvable, verification.",
    4: "Strong: Collateral is credible, well-documented, and broadly sufficient for prudent security requirements.",
    5: "Best-in-class: Collateral quality is high, legally robust, regularly revalidated, and easily enforceable if needed."
  },
  assetTracking: {
    1: "Very weak: Asset tracking is mostly manual or absent, with poor visibility into status, location, and value changes.",
    2: "Weak: Basic tracking exists, but updates are irregular and valuation controls are not dependable.",
    3: "Developing: Asset registers and valuation routines are present, though process consistency still has gaps.",
    4: "Strong: Asset monitoring is disciplined with timely updates, clear ownership, and reliable valuation cycles.",
    5: "Best-in-class: Asset and collateral tracking is continuous, auditable, and integrated into risk and funding governance."
  },
  reportingCadence: {
    1: "Very weak: Reporting is infrequent, incomplete, and not suitable for investor decision-making.",
    2: "Weak: Reports are produced occasionally, but data quality and consistency limit strategic usefulness.",
    3: "Developing: Regular reporting exists with reasonable structure, though timeliness and depth need improvement.",
    4: "Strong: Reporting is consistent, accurate, and decision-ready across financial and operational dimensions.",
    5: "Best-in-class: Reporting is high-integrity, fast, and insight-driven, enabling proactive stakeholder decisions."
  },
  kpiVisibility: {
    1: "Very weak: KPI visibility is minimal, delayed, or fragmented, preventing timely correction of risks.",
    2: "Weak: Some KPI tracking exists, but latency and inconsistency reduce confidence in management insight.",
    3: "Developing: Core KPIs are visible with periodic updates, though real-time reliability is still limited.",
    4: "Strong: KPI visibility is timely and consistent, supporting practical decisions on growth and risk.",
    5: "Best-in-class: KPI visibility is near real-time, trusted, and tightly linked to execution and capital controls."
  },
  growthPlan: {
    1: "Very weak: Growth plan is mostly aspirational with no clear sequencing, ownership, or execution discipline.",
    2: "Weak: A roadmap exists, but milestones and resource assumptions are not robust enough for reliable execution.",
    3: "Developing: Growth plan has structure and priorities, though delivery confidence varies by workstream.",
    4: "Strong: Growth roadmap is actionable, milestone-driven, and aligned to capacity and funding realities.",
    5: "Best-in-class: Growth strategy is execution-ready, continuously refined, and backed by strong delivery governance."
  },
  marketRiskPlan: {
    1: "Very weak: There are no meaningful contingency plans for market, regulatory, or operational shocks.",
    2: "Weak: Risks are acknowledged, but contingency actions are generic and not operationally ready.",
    3: "Developing: Key risk scenarios and responses are identified, though stress-testing and ownership are partial.",
    4: "Strong: Contingency plans are specific, owned, and practical, with defined triggers for rapid response.",
    5: "Best-in-class: Risk planning is comprehensive, scenario-tested, and embedded in ongoing strategic execution."
  }
};

const ACTIONS_BY_PILLAR = {
  "Financial discipline": [
    "Build a 13-week rolling cash flow model and review weekly.",
    "Define unit economics thresholds with clear monthly variance triggers.",
    "Introduce approval controls for non-core spend and capex."
  ],
  Governance: [
    "Set a monthly governance meeting with decisions and owners documented.",
    "Formalize risk ownership across finance, operations, and legal.",
    "Create a pre-funding compliance checklist signed by leadership."
  ],
  "Collateral strength": [
    "Update collateral register with valuation dates and evidence links.",
    "Standardize valuation intervals by asset class and risk profile.",
    "Add alerting for expired insurance, title gaps, and covenant exceptions."
  ],
  "Reporting maturity": [
    "Publish one monthly investor pack with fixed KPI definitions.",
    "Automate reconciliations for revenue, cash, and utilization reporting.",
    "Track a lead indicator dashboard and share changes bi-weekly."
  ],
  "Growth readiness": [
    "Sequence the roadmap into stage gates tied to funding release milestones.",
    "Write contingency playbooks for top three downside scenarios.",
    "Align hiring and operating budget to cash runway and performance triggers."
  ]
};

function scoreToPercent(score) {
  return Math.round((score / 5) * 100);
}

function riskBand(percent) {
  if (percent >= 75) return "Low risk";
  if (percent >= 55) return "Moderate risk";
  return "High risk";
}

function recommendationFor(readiness, collateralScore, growthScore) {
  if (readiness >= 80 && collateralScore >= 75) {
    return {
      mix: "Debt-led structure (70% Debt / 20% Convertible / 10% Equity)",
      profile: "Mature controls and strong asset backing support lower-cost debt.",
      focus: "Preserve ownership while scaling with tight covenant monitoring."
    };
  }

  if (readiness >= 65 && growthScore >= 65) {
    return {
      mix: "Balanced structure (45% Debt / 35% Convertible / 20% Equity)",
      profile: "Good readiness with targeted gaps best served by blended instruments.",
      focus: "Stage capital by milestones to reduce dilution and execution risk."
    };
  }

  return {
    mix: "Flex structure (20% Debt / 40% Convertible / 40% Equity)",
    profile: "Readiness gaps suggest prioritizing flexible and support-heavy capital.",
    focus: "Strengthen fundamentals first, then transition toward debt-efficient funding."
  };
}

function buildInitialAnswers() {
  return QUESTIONS.reduce((acc, question) => {
    acc[question.id] = 3;
    return acc;
  }, {});
}

export default function ReadinessSimulator() {
  const [answers, setAnswers] = useState(buildInitialAnswers);

  const analysis = useMemo(() => {
    const byPillar = PILLARS.map((pillar) => {
      const pillarQuestions = QUESTIONS.filter((q) => q.pillar === pillar);
      const rawAverage =
        pillarQuestions.reduce((sum, q) => sum + Number(answers[q.id] || 0), 0) / pillarQuestions.length;
      const percent = scoreToPercent(rawAverage);
      return { pillar, rawAverage, percent, risk: riskBand(percent) };
    });

    const readiness = Math.round(byPillar.reduce((sum, p) => sum + p.percent, 0) / byPillar.length);
    const sortedWeakest = [...byPillar].sort((a, b) => a.percent - b.percent);
    const topRisks = sortedWeakest.slice(0, 3);
    const collateralScore = byPillar.find((p) => p.pillar === "Collateral strength")?.percent || 0;
    const growthScore = byPillar.find((p) => p.pillar === "Growth readiness")?.percent || 0;
    const recommendation = recommendationFor(readiness, collateralScore, growthScore);

    return { byPillar, readiness, topRisks, recommendation };
  }, [answers]);

  function updateAnswer(questionId, value) {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: Number(value)
    }));
  }

  function exportActionPlan() {
    const actionRows = analysis.topRisks
      .map((risk) => {
        const actions = ACTIONS_BY_PILLAR[risk.pillar] || [];
        return `
          <section style="margin-top: 20px;">
            <h3 style="margin: 0 0 8px 0; font-size: 16px;">${risk.pillar} (${risk.percent}% - ${risk.risk})</h3>
            <ul style="margin: 0; padding-left: 18px;">
              ${actions.map((action) => `<li style="margin-bottom: 6px;">${action}</li>`).join("")}
            </ul>
          </section>
        `;
      })
      .join("");

    const printWindow = window.open("", "_blank", "width=900,height=700");
    if (!printWindow) return;

    printWindow.document.write(`
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8" />
          <title>Capital Readiness Action Plan</title>
        </head>
        <body style="font-family: Arial, sans-serif; margin: 28px; color: #111;">
          <h1 style="margin: 0 0 8px 0;">Capital Readiness Action Plan</h1>
          <p style="margin: 0 0 4px 0;">Overall readiness score: <strong>${analysis.readiness}%</strong></p>
          <p style="margin: 0 0 4px 0;">Recommended structure: <strong>${analysis.recommendation.mix}</strong></p>
          <p style="margin: 0 0 18px 0;">Funding focus: ${analysis.recommendation.focus}</p>
          <h2 style="margin: 0; font-size: 18px;">Priority 90-day actions</h2>
          ${actionRows}
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  }

  return (
    <Page>
      <PageHero
        eyebrow="WOW Feature"
        title="Capital Readiness Simulator"
        subtitle="Run a fast, practical diagnostic and generate an investor-ready action plan."
        icon={Gauge}
      />

      <section className="mx-auto max-w-6xl px-4 py-10 lg:py-14">
        <div className="grid gap-6 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="rounded-2xl border border-black/10 bg-white p-6 shadow-soft lg:col-span-7"
          >
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/60">Assessment</div>
            <h2 className="mt-3 text-2xl font-display tracking-tightish text-navy-950">Answer 10 quick questions</h2>
            <div className="mt-6 grid gap-5">
              {QUESTIONS.map((question, index) => (
                <motion.fieldset
                  key={question.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.28, delay: Math.min(index * 0.02, 0.14) }}
                  className="rounded-xl border border-black/10 p-4"
                >
                  <legend className="px-1 text-xs uppercase tracking-[0.12em] text-ink/55">
                    {question.pillar}
                  </legend>
                  <div className="text-sm font-medium text-ink">
                    {index + 1}. {question.label}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[1, 2, 3, 4, 5].map((value) => {
                      const selected = answers[question.id] === value;
                      return (
                        <motion.button
                          layout
                          key={value}
                          type="button"
                          onClick={() => updateAnswer(question.id, value)}
                          whileTap={{ scale: 0.96 }}
                          animate={{
                            scale: selected ? 1.03 : 1,
                            y: selected ? -1 : 0
                          }}
                          transition={{ type: "spring", stiffness: 420, damping: 24 }}
                          className={[
                            "rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] transition",
                            selected
                              ? "border-navy-950 bg-navy-950 text-white"
                              : "border-black/15 bg-white text-ink/75 hover:border-black/30"
                          ].join(" ")}
                        >
                          {value} - {RATING_LABELS[value]}
                        </motion.button>
                      );
                    })}
                  </div>
                  <div className="mt-3 rounded-lg border border-black/10 bg-black/[0.02] p-3">
                    <div className="text-xs font-semibold uppercase tracking-[0.1em] text-ink/60">
                      Selected: {RATING_LABELS[answers[question.id]]}
                    </div>
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={`${question.id}-${answers[question.id]}`}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.2 }}
                        className="mt-1 text-sm leading-6 text-ink/80"
                      >
                        {QUESTION_RATING_DESCRIPTIONS[question.id]?.[answers[question.id]]}
                      </motion.p>
                    </AnimatePresence>
                  </div>
                </motion.fieldset>
              ))}
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.08 }}
            className="space-y-5 lg:col-span-5 lg:sticky lg:top-24 lg:self-start"
          >
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.12 }}
              className="rounded-2xl border border-black/10 bg-navy-950 p-6 text-white shadow-soft"
            >
              <div className="text-xs uppercase tracking-[0.14em] text-white/65">Overall readiness</div>
              <div className="mt-2 text-5xl font-display leading-none">{analysis.readiness}%</div>
              <div className="mt-3 h-2 rounded-full bg-white/15">
                <motion.div
                  className="h-full rounded-full bg-gold-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${analysis.readiness}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  aria-hidden="true"
                />
              </div>
              <p className="mt-4 text-sm text-white/80">{analysis.recommendation.profile}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.16 }}
              className="rounded-2xl border border-black/10 bg-white p-6 shadow-soft"
            >
              <div className="text-xs uppercase tracking-[0.14em] text-ink/60">Funding recommendation</div>
              <div className="mt-2 text-lg font-semibold text-navy-950">{analysis.recommendation.mix}</div>
              <p className="mt-3 text-sm leading-6 text-ink/75">{analysis.recommendation.focus}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.2 }}
              className="rounded-2xl border border-black/10 bg-white p-6 shadow-soft"
            >
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-ink/60">
                <TriangleAlert className="h-4 w-4 text-gold-600" />
                Risk heatmap
              </div>
              <div className="mt-4 grid gap-3">
                {analysis.byPillar.map((item) => (
                  <div key={item.pillar}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-ink/80">{item.pillar}</span>
                      <span className="font-medium text-ink">{item.percent}%</span>
                    </div>
                    <div className="mt-1 h-2 rounded-full bg-black/10">
                      <motion.div
                        className={[
                          "h-full rounded-full",
                          item.percent >= 75 ? "bg-emerald-500" : item.percent >= 55 ? "bg-amber-500" : "bg-red-500"
                        ].join(" ")}
                        initial={{ width: 0 }}
                        animate={{ width: `${item.percent}%` }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-1 text-xs text-ink/60">{item.risk}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.24 }}
              className="rounded-2xl border border-black/10 bg-white p-6 shadow-soft"
            >
              <div className="text-xs uppercase tracking-[0.14em] text-ink/60">Top 3 action priorities</div>
              <ul className="mt-3 space-y-3 text-sm text-ink/80">
                {analysis.topRisks.map((risk) => (
                  <li key={risk.pillar} className="rounded-xl border border-black/10 p-3">
                    <div className="font-medium text-ink">{risk.pillar}</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.1em] text-ink/55">
                      {risk.percent}% readiness - {risk.risk}
                    </div>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={exportActionPlan}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-navy-950 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-navy-900"
              >
                <Download className="h-3.5 w-3.5" />
                Save action plan PDF
              </button>
            </motion.div>
          </motion.aside>
        </div>
      </section>
    </Page>
  );
}
