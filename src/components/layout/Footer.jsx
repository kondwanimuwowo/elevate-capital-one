import { brand } from "../../data/brand.js";
import { Link } from "react-router-dom";

export default function Footer() {
  const websiteHref = brand.contact.website.startsWith("http")
    ? brand.contact.website
    : `https://${brand.contact.website}`;

  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 lg:grid-cols-3">
          <div>
            <img
              src="/elevate-logo.png"
              alt="Elevate Capital logo"
              className="h-11 w-auto object-contain"
              loading="lazy"
              decoding="async"
            />
            <Link className="mt-3 inline-block text-sm text-ink/80 hover:text-ink" to="/compliance">
              Compliance Documents
            </Link>
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

        <div className="mt-10 text-xs text-ink/60">
          <div>&copy; {new Date().getFullYear()} {brand.name}. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
