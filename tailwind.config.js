/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        medieval: {
          darkest: "#0f172a",
          red: "#334155",
          gold: "#d4af37",
          cream: "#f1f5f9",
          brown: "#64748b",
        },
        primary: {
          400: "#475569",
          500: "#334155",
          600: "#1e293b",
        },
        accent: {
          400: "#fbbf24",
          500: "#d4af37",
          600: "#b8941f",
        },
        status: {
          online: "#22c55e",
          offline: "#ef4444",
        },
      },

      fontFamily: {
        minecraft: ["Minecraft", "Orbitron", "Arial Black", "sans-serif"],

        display: ["Minecraft", "Orbitron", "system-ui", "sans-serif"],

        heading: ["Raleway", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
