import { Mail } from "lucide-react";
import { useState } from "react";
import Page from "../components/ui/Page.jsx";
import PageHero from "../components/ui/PageHero.jsx";
import Section from "../components/ui/Section.jsx";
import { brand } from "../data/brand.js";

export default function Contact() {
  const [submitState, setSubmitState] = useState("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const websiteHref = brand.contact.website.startsWith("http")
    ? brand.contact.website
    : `https://${brand.contact.website}`;

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      setSubmitState("error");
      setSubmitMessage("Please complete all fields before sending your message.");
      return;
    }

    const subject = `Website enquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoHref = `mailto:${brand.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoHref;
    event.currentTarget.reset();
    setSubmitState("success");
    setSubmitMessage("Your email app should open now. If it doesn't, contact us directly by email.");
  }

  return (
    <Page>
      <PageHero
        eyebrow="Contact"
        title="Let's talk"
        subtitle="Reach out for partnerships, enquiries, and engagement discussions."
        icon={Mail}
      />

      <Section eyebrow="Reach us" title="Contact details">
        <div className="rounded-2xl bg-navy-950 px-6 py-8 text-white lg:px-10 lg:py-10">
          <div className="grid gap-8 lg:grid-cols-3">
            <Item label="Phone" value={brand.contact.phone} href={`tel:${brand.contact.phone.replace(/\s+/g, "")}`} />
            <Item label="Email" value={brand.contact.email} href={`mailto:${brand.contact.email}`} />
            <Item label="Website" value={brand.contact.website} href={websiteHref} external />
          </div>
          <div className="mt-8 border-t border-white/15 pt-6 text-sm text-white/80">
            {brand.contact.address}
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <div>
              <div className="text-xs uppercase tracking-[0.16em] text-white/60">Get in touch</div>
              <p className="mt-2 text-sm text-white/75">
                Send us your details and we will follow up to discuss your needs.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="rounded-2xl bg-white/5 p-6">
              <label htmlFor="contact-name" className="block text-xs uppercase tracking-[0.16em] text-white/60">
                Full name
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  className="mt-2 w-full rounded-xl border border-white/15 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/30"
                  placeholder="Your name"
                />
              </label>

              <label htmlFor="contact-email" className="mt-4 block text-xs uppercase tracking-[0.16em] text-white/60">
                Email
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-xl border border-white/15 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/30"
                  placeholder="you@email.com"
                />
              </label>

              <label htmlFor="contact-message" className="mt-4 block text-xs uppercase tracking-[0.16em] text-white/60">
                Message
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  className="mt-2 w-full rounded-xl border border-white/15 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/30"
                  placeholder="How can we help?"
                />
              </label>

              <button
                type="submit"
                className="mt-5 w-full rounded-full bg-white px-5 py-2.5 text-sm font-medium text-navy-950 transition hover:bg-white/90"
              >
                Send message
              </button>

              {submitState !== "idle" ? (
                <p
                  className={
                    submitState === "error"
                      ? "mt-3 text-xs text-red-300"
                      : "mt-3 text-xs text-white/75"
                  }
                >
                  {submitMessage}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </Section>
    </Page>
  );
}

function Item({ label, value, href, external = false }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.16em] text-white/60">{label}</div>
      <a
        className="mt-2 inline-block text-base font-medium text-white transition hover:text-gold-500"
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
      >
        {value}
      </a>
    </div>
  );
}
