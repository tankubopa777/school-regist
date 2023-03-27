/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
          'mobile': '425px',
          // => @media (min-width: 425px) { ... }
          
          'tablet': '769px',
          // => @media (min-width: 769px) { ... }

          'laptop': '1024px',
          // => @media (min-width: 1024px) { ... }

          'desktop': '1280px',
          // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}
