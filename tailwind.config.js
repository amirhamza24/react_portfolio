/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--background-primary)",
        secondary: "var(--background-secondary)",
        tertiary: "var(--background-tertiary)",
        card: "var(--background-card)",
        glass: "var(--background-glass)",
        elevated: "var(--background-elevated)",

        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-secondary)",
        textMuted: "var(--text-muted)",
        textAccent: "var(--text-accent)",

        textMain: "var(--text-main)",
      },
      fontFamily: {
        sans: "var(--font-sans)",
        mono: "var(--font-mono)",
      },
    },
  },
  plugins: [
    require("daisyui"),
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow-main": {
          textShadow: "var(--text-shadow-main)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
