module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./src/**/*.{js,jsx,ts,tsx}",

    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  plugins: [require("tw-elements/dist/plugin"), require("flowbite/plugin")],
  theme: {
    extend: {
      fontFamily: {
        // oswald: ['"Oswald"'],
        // creepster: ['"Creepster"'],
        // monospace: "monospace",
        // Roboto: "Roboto",
      },
      backgroundImage: {
        "hero-pattern": "url('/assets/mountain.png')",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateY(30%)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
      animation: {
        "marquee-infinite": "marquee2 20s linear infinite",
      },
    },
  },
};
