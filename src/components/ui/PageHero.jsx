import { motion } from "framer-motion";

export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="border-b border-black/10">
      <div className="mx-auto max-w-6xl px-4 py-10 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3">
            <div className="h-[2px] w-10 bg-gold-500" />
            <div className="text-xs uppercase tracking-[0.18em] text-ink/60">
              {eyebrow}
            </div>
          </div>

          <h1 className="mt-4 font-display text-5xl leading-[0.95] tracking-tightish text-navy-950 sm:text-6xl">
            {title}
          </h1>

          {subtitle ? (
            <p className="mt-5 text-[15px] leading-7 text-ink/75">{subtitle}</p>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
