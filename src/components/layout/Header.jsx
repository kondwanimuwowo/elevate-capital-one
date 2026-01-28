import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { brand } from "../../data/brand.js";
import { nav } from "../../data/nav.js";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b",
        scrolled ? "bg-white border-black/10 shadow-soft" : "bg-white/90 border-transparent"
      ].join(" ")}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <NavLink to="/" className="flex items-center gap-3">
            <LogoMark />
            <div className="leading-tight">
              <div className="text-sm font-semibold text-navy-900">{brand.name}</div>
              <div className="text-[11px] text-ink/60">{brand.taglineTop}</div>
            </div>
          </NavLink>

          <nav className="hidden items-center gap-6 lg:flex">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  [
                    "text-sm transition",
                    isActive ? "text-ink font-medium" : "text-ink/70 hover:text-ink"
                  ].join(" ")
                }
                end={n.to === "/"}
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="lg:hidden">
            <NavLink
              to="/contact"
              className="rounded-full bg-navy-950 px-4 py-2 text-sm font-medium text-white hover:bg-navy-900 transition"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>

      <div className="h-[2px] bg-gold-500" />
    </header>
  );
}

function LogoMark() {
  return (
    <div className="grid h-10 w-10 place-items-center rounded-xl bg-navy-950">
      <div className="h-5 w-5 rounded-full border-2 border-gold-500" />
    </div>
  );
}
