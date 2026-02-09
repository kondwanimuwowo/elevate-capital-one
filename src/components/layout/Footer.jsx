import { brand } from "../../data/brand.js";

export default function Footer() {
  const websiteHref = brand.contact.website.startsWith("http")
    ? brand.contact.website
    : `https://${brand.contact.website}`;

  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 lg:grid-cols-3">
          <div>
            <div className="text-sm font-semibold text-navy-950">{brand.name}</div>
            <div className="mt-2 text-sm text-ink/70">
              {brand.taglineTop} {brand.taglineBottom}
            </div>
          </div>

          <div className="text-sm text-ink/70">
            <div className="font-medium text-ink">Address</div>
            <div className="mt-2">{brand.contact.address}</div>
          </div>

          <div className="text-sm text-ink/70">
            <div className="font-medium text-ink">Contact</div>
            <a className="mt-2 block hover:text-ink" href={`tel:${brand.contact.phone.replace(/\s+/g, "")}`}>
              {brand.contact.phone}
            </a>
            <a className="mt-1 block hover:text-ink" href={`mailto:${brand.contact.email}`}>
              {brand.contact.email}
            </a>
            <a
              className="mt-1 block hover:text-ink"
              href={websiteHref}
              target="_blank"
              rel="noreferrer"
            >
              {brand.contact.website}
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 text-xs text-ink/60">
          <div>&copy; {new Date().getFullYear()} {brand.name}. All rights reserved.</div>
          <div className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-ink/30" />
            <span>Built for clarity and performance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
