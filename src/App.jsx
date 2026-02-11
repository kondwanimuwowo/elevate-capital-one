import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import SiteLayout from "./components/layout/SiteLayout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import BusinessModel from "./pages/BusinessModel.jsx";
import Services from "./pages/Services.jsx";
import RiskCompliance from "./pages/RiskCompliance.jsx";
import Compliance from "./pages/Compliance.jsx";
import Impact from "./pages/Impact.jsx";
import Insights from "./pages/Insights.jsx";
import InsightDetail from "./pages/InsightDetail.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";
import { brand } from "./data/brand.js";
import { insights } from "./data/insights.js";

const SITE_URL = "https://www.elevatecapital.co.za";

const pageSeo = {
  "/": {
    title: "Structured Capital. Sustainable Growth.",
    description:
      "Elevate Capital provides structured capital, business development, and risk-aware collateral management for sustainable growth."
  },
  "/about": {
    title: "About Elevate Capital",
    description:
      "Learn about Elevate Capital's mission, vision, values, and strategic approach to enabling sustainable business growth."
  },
  "/business-model": {
    title: "Business Model",
    description:
      "Explore Elevate Capital's business model, including debt, equity, and convertible funding structures."
  },
  "/services": {
    title: "Services",
    description:
      "Discover integrated services across business funding, development, and collateral management."
  },
  "/risk-compliance": {
    title: "Risk & Compliance",
    description:
      "Understand Elevate Capital's risk management and compliance framework for disciplined capital deployment."
  },
  "/compliance": {
    title: "Compliance Documents",
    description:
      "Access company compliance, tax, and registration documentation in one place."
  },
  "/impact": {
    title: "Impact",
    description:
      "See how Elevate Capital drives measurable, long-term impact through strategic and operational support."
  },
  "/insights": {
    title: "Insights",
    description:
      "Read practical insights on structured capital, risk-aware growth, and disciplined business scaling."
  },
  "/contact": {
    title: "Contact",
    description:
      "Get in touch with Elevate Capital for partnerships, inquiries, and funding discussions."
  }
};

function setMetaByName(name, content) {
  let meta = document.querySelector(`meta[name="${name}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", name);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
}

function setMetaByProperty(property, content) {
  let meta = document.querySelector(`meta[property="${property}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("property", property);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
}

function setCanonical(href) {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}
export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });

    const isInsightDetail = location.pathname.startsWith("/insights/");
    const rawSlug = isInsightDetail ? location.pathname.replace("/insights/", "") : "";
    const slug = decodeURIComponent(rawSlug);
    const post = insights.find((x) => x.slug === slug);
    const seo = isInsightDetail
      ? {
          title: post ? post.title : "Insight",
          description: post
            ? post.excerpt
            : "Read insights on structured capital, risk-aware growth, and business performance."
        }
      : pageSeo[location.pathname] || {
          title: "Page",
          description:
            "Elevate Capital provides structured capital and strategic business support for sustainable growth."
        };

    const fullTitle =
      location.pathname === "/" ? `${brand.name} | ${seo.title}` : `${seo.title} | ${brand.name}`;
    const canonicalUrl = `${SITE_URL}${location.pathname === "/" ? "/" : location.pathname}`;
    const isKnownPage = Boolean(pageSeo[location.pathname] || isInsightDetail);

    document.title = fullTitle;
    setCanonical(canonicalUrl);
    setMetaByName("description", seo.description);
    setMetaByName("robots", isKnownPage ? "index,follow" : "noindex,nofollow");
    setMetaByProperty("og:title", fullTitle);
    setMetaByProperty("og:description", seo.description);
    setMetaByProperty("og:url", canonicalUrl);
    setMetaByProperty("og:type", isInsightDetail ? "article" : "website");
    setMetaByName("twitter:title", fullTitle);
    setMetaByName("twitter:description", seo.description);
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
          <Route path="compliance" element={<Compliance />} />
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
