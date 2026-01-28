import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-white font-body text-ink">
      <Header />
      <main className="pb-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
