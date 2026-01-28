import { motion } from "framer-motion";
import { fadeUp } from "../../lib/motion.js";

export default function Section({ eyebrow, title, children }) {
  return (
    <section className="py-14 lg:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div {...fadeUp(0)}>
          <div className="flex items-center gap-3">
            <div className="h-[2px] w-10 bg-gold-500" />
            <div className="text-xs uppercase tracking-[0.18em] text-ink/60">
              {eyebrow}
            </div>
          </div>
          <h2 className="mt-4 font-display text-4xl leading-[0.95] tracking-tightish text-navy-950 sm:text-5xl">
            {title}
          </h2>
          <div className="mt-8">{children}</div>
        </motion.div>
      </div>
    </section>
  );
}
