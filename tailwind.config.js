/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
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

