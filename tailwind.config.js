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
        horizontal: {
          "100%": { transform: "translateX(calc(100vw)" },
        },
        vertical: {
          "100%": { transform: "translateY(calc(100vh)" },
        },

        marquee2: {
          "0%": { transform: "translateY(0%)" },
          "10%": { transform: "translateY(25%)" },
          "20%": { transform: "translateY(50%)" },
          "30%": { transform: "translateY(75%)" },
          "40%": { transform: "translateY(170%)" },
          "50%": { transform: "translateY(75%)" },
          "60%": { transform: "translateY(50%)" },
          "70%": { transform: "translateY(25%)" },
          "80%": { transform: "translateY(0%)" },
        },
      },

      animation: {
        slow: "bounce 1s linear infinite",
        newSpin: "marqee 1s linear infinite",
        wiggle: "marquee2 5s linear infinite",
        wiggleBig: "marquee2 7s linear infinite",

        across: "x 13s linear infinite alternate",
        up: "y 7s linear infinite alternate",
      },
    },
  },
};
