/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#061526",
          900: "#0A1D33",
          850: "#0C2340"
        },
        gold: {
          500: "#C9A227",
          600: "#B9901E"
        },
        ink: "#0E1420"
      },
      fontFamily: {
        display: ["Bebas Neue", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"]
      },
      letterSpacing: {
        tightish: "-0.02em"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)"
      }
    }
  },
  plugins: []
};
