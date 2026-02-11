import { motion } from "framer-motion";

export default function PageHero({ eyebrow, title, subtitle, icon: Icon }) {
  return (
    <section className="border-b border-black/10">
      <div className="mx-auto max-w-6xl px-4 py-10 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
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

          {Icon ? (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="hidden lg:flex"
              aria-hidden="true"
            >
              <div className="grid h-24 w-24 place-items-center rounded-2xl border border-gold-500/35 bg-gold-500/10">
                <Icon className="h-12 w-12 text-gold-500" strokeWidth={1.75} />
              </div>
            </motion.div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
