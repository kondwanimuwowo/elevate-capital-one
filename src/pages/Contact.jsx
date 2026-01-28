import Page from "../components/ui/Page.jsx";
import PageHero from "../components/ui/PageHero.jsx";
import Section from "../components/ui/Section.jsx";
import { brand } from "../data/brand.js";

export default function Contact() {
  return (
    <Page>
      <PageHero
        eyebrow="Contact"
        title="Let’s talk"
        subtitle="Reach out for partnerships, enquiries, and engagement discussions."
      />

      <Section eyebrow="Reach us" title="Contact details">
        <div className="rounded-2xl bg-navy-950 px-6 py-10 text-white lg:px-10">
          <div className="grid gap-8 lg:grid-cols-3">
            <Item label="Phone" value={brand.contact.phone} />
            <Item label="Email" value={brand.contact.email} />
            <Item label="Website" value={brand.contact.website} />
          </div>
          <div className="mt-8 border-t border-white/15 pt-6 text-sm text-white/80">
            {brand.contact.address}
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <div>
              <div className="text-xs uppercase tracking-[0.16em] text-white/60">Message</div>
              <p className="mt-2 text-sm text-white/75">
                This is a static contact section for now. When you’re ready, we can wire it to email, a CRM, or a backend endpoint.
              </p>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="rounded-2xl bg-white/5 p-6"
            >
              <label className="block text-xs uppercase tracking-[0.16em] text-white/60">
                Full name
                <input
                  className="mt-2 w-full rounded-xl border border-white/15 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/30"
                  placeholder="Your name"
                />
              </label>

              <label className="mt-4 block text-xs uppercase tracking-[0.16em] text-white/60">
                Email
                <input
                  className="mt-2 w-full rounded-xl border border-white/15 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/30"
                  placeholder="you@email.com"
                />
              </label>

              <label className="mt-4 block text-xs uppercase tracking-[0.16em] text-white/60">
                Message
                <textarea
                  rows={4}
                  className="mt-2 w-full rounded-xl border border-white/15 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/30"
                  placeholder="How can we help?"
                />
              </label>

              <button
                type="submit"
                className="mt-5 w-full rounded-full bg-white px-5 py-2.5 text-sm font-medium text-navy-950 hover:bg-white/90 transition"
              >
                Send (placeholder)
              </button>
            </form>
          </div>
        </div>
      </Section>
    </Page>
  );
}

function Item({ label, value }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.16em] text-white/60">{label}</div>
      <div className="mt-2 text-base font-medium">{value}</div>
    </div>
  );
}
