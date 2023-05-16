/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html"],
  theme: {
    screens: {
      desktop: "1024px",
    },
    extend: {
      colors: {
        solitude: "#E0E8FF",
        bunting: "#1F2E55",
        shipcove: "#717FA6",
        "ghost-white": "#F7F9FF",
        "han-purple": "#382AE1",
        "medium-slate-blue": "#766CF1",
      },
      backgroundImage: {
        mobile: "url('pattern-background-mobile.svg')",
        desktop: "url('pattern-background-desktop.svg')",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        card: "0 4rem 4rem -2rem rgba(13, 48, 189, 0.15)",
        button: "0 2rem 2rem rgba(56, 42, 225, 0.2)",
      },
    },
  },
  plugins: [],
};
