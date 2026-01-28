import { Link } from "react-router-dom";
import Page from "../components/ui/Page.jsx";
import PageHero from "../components/ui/PageHero.jsx";

export default function NotFound() {
  return (
    <Page>
      <PageHero eyebrow="404" title="Page not found" subtitle="This route does not exist." />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Link
          to="/"
          className="rounded-full bg-navy-950 px-5 py-2.5 text-sm font-medium text-white hover:bg-navy-900 transition"
        >
          Back home
        </Link>
      </div>
    </Page>
  );
}
