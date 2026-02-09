import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import SiteLayout from "./components/layout/SiteLayout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import BusinessModel from "./pages/BusinessModel.jsx";
import Services from "./pages/Services.jsx";
import RiskCompliance from "./pages/RiskCompliance.jsx";
import Impact from "./pages/Impact.jsx";
import Insights from "./pages/Insights.jsx";
import InsightDetail from "./pages/InsightDetail.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";
export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });

    const pageTitles = {
      "/": "Home",
      "/about": "About",
      "/business-model": "Business Model",
      "/services": "Services",
      "/risk-compliance": "Risk & Compliance",
      "/impact": "Impact",
      "/insights": "Insights",
      "/contact": "Contact"
    };

    const pageTitle =
      location.pathname.startsWith("/insights/") ? "Insight" : pageTitles[location.pathname] || "Page";

    document.title = `${pageTitle} | Elevate Capital`;
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="business-model" element={<BusinessModel />} />
          <Route path="services" element={<Services />} />
          <Route path="risk-compliance" element={<RiskCompliance />} />
          <Route path="impact" element={<Impact />} />
          <Route path="insights" element={<Insights />} />
          <Route path="insights/:slug" element={<InsightDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
