/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      "5xl": { max: "2301px" },
      // => @media (max-width: 2650px) { ... }

      "4xl": { max: "2001px" },
      // => @media (max-width: 2000px) { ... }

      "3xl": { max: "1537px" },
      // => @media (max-width: 1535px) { ... }

      "2xl": { max: "1440px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1026px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "769px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "428px" },
      // => @media (max-width: 639px) { ... }

      xxs: { max: "378px" },
      // => @media (max-width: 639px) { ... }

      xm: { max: "321px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

