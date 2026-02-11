export const nav = [
  { label: "Home", to: "/" },
  {
    label: "Company",
    children: [
      { label: "About", to: "/about" },
      { label: "Business Model", to: "/business-model" },
      { label: "Services", to: "/services" },
      { label: "Impact", to: "/impact" }
    ]
  },
  {
    label: "Compliance",
    children: [
      { label: "Risk & Compliance", to: "/risk-compliance" },
      { label: "Compliance Documents", to: "/compliance" }
    ]
  },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" }
];
