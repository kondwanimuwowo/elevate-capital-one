export default function Card({ title, text, tone = "light" }) {
  const base =
    "rounded-2xl border border-black/10 p-6 shadow-soft";
  const styles =
    tone === "dark"
      ? "bg-navy-950 text-white border-white/10"
      : "bg-white text-ink";

  return (
    <div className={`${base} ${styles}`}>
      <div className={tone === "dark" ? "text-sm font-semibold" : "text-sm font-semibold text-navy-900"}>
        {title}
      </div>
      <div className="mt-3 h-[2px] w-10 bg-gold-500" />
      <div className={tone === "dark" ? "mt-4 text-[14px] leading-6 text-white/75" : "mt-4 text-[14px] leading-6 text-ink/70"}>
        {text}
      </div>
    </div>
  );
}
