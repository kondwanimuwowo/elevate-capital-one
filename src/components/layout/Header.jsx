import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { nav } from "../../data/nav.js";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b backdrop-blur-sm",
        scrolled ? "bg-white border-black/10 shadow-lg" : "bg-white/90 border-transparent"
      ].join(" ")}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <NavLink to="/" className="flex items-center" aria-label="Elevate Capital home">
            <LogoMark />
          </NavLink>

          <nav className="hidden items-center gap-6 lg:flex">
            {nav.map((item) => {
              if (!item.children) {
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      [
                        "text-sm transition",
                        isActive ? "text-ink font-medium" : "text-ink/70 hover:text-ink"
                      ].join(" ")
                    }
                    end={item.to === "/"}
                  >
                    {item.label}
                  </NavLink>
                );
              }

              const parentActive = item.children.some((child) => isPathActive(location.pathname, child.to));

              return (
                <div key={item.label} className="group relative">
                  <button
                    type="button"
                    className={[
                      "inline-flex items-center gap-1.5 text-sm transition",
                      parentActive ? "text-ink font-medium" : "text-ink/70 group-hover:text-ink"
                    ].join(" ")}
                    aria-haspopup="menu"
                  >
                    {item.label}
                    <svg
                      viewBox="0 0 12 12"
                      className="h-3 w-3"
                      aria-hidden="true"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="M2.5 4.5L6 8l3.5-3.5" />
                    </svg>
                  </button>

                  <div className="pointer-events-none invisible absolute left-0 top-full z-50 pt-3 opacity-0 transition duration-150 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100">
                    <div className="min-w-[220px] rounded-xl border border-black/10 bg-white p-2 shadow-soft">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.to}
                          to={child.to}
                          className={({ isActive }) =>
                            [
                              "block rounded-lg px-3 py-2 text-sm transition",
                              isActive ? "bg-navy-950 text-white" : "text-ink/80 hover:bg-black/5 hover:text-ink"
                            ].join(" ")
                          }
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              className="rounded-full border border-black/15 px-4 py-2 text-sm font-medium text-ink transition hover:border-black/25"
            >
              {mobileOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={[
          "border-t border-black/10 px-4 py-3 lg:hidden",
          mobileOpen ? "block bg-white" : "hidden"
        ].join(" ")}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1">
          {nav.map((item) => {
            if (!item.children) {
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    [
                      "rounded-xl px-3 py-2 text-sm transition",
                      isActive ? "bg-navy-950 text-white" : "text-ink/80 hover:bg-black/5 hover:text-ink"
                    ].join(" ")
                  }
                  end={item.to === "/"}
                >
                  {item.label}
                </NavLink>
              );
            }

            const parentActive = item.children.some((child) => isPathActive(location.pathname, child.to));

            return (
              <details key={item.label} className="rounded-xl border border-black/10 bg-white">
                <summary
                  className={[
                    "cursor-pointer list-none px-3 py-2 text-sm",
                    parentActive ? "font-medium text-ink" : "text-ink/80"
                  ].join(" ")}
                >
                  <span className="flex items-center justify-between">
                    <span>{item.label}</span>
                    <span className="text-ink/50">+</span>
                  </span>
                </summary>
                <div className="px-2 pb-2">
                  {item.children.map((child) => (
                    <NavLink
                      key={child.to}
                      to={child.to}
                      className={({ isActive }) =>
                        [
                          "mt-1 block rounded-lg px-3 py-2 text-sm transition",
                          isActive ? "bg-navy-950 text-white" : "text-ink/80 hover:bg-black/5 hover:text-ink"
                        ].join(" ")
                      }
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              </details>
            );
          })}
        </nav>
      </div>

      <div className="h-[2px] bg-gold-500" />
    </header>
  );
}

function LogoMark() {
  return (
    <img
      src="/elevate-logo.png"
      alt="Elevate Capital logo"
      className="h-11 w-auto object-contain"
      loading="eager"
      decoding="async"
    />
  );
}

function isPathActive(currentPath, targetPath) {
  return currentPath === targetPath || currentPath.startsWith(`${targetPath}/`);
}
