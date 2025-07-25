/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // now `font-sans` will use Inter
        inter: ['InterCustom', 'sans-serif'],
        // your custom Rajdhani still available via `font-rajdhani`
        rajdhani: ['Rajdhani', 'sans-serif'],
        figtree: ['"Figtree"', 'sans-serif'],
        satoshi: ['Satoshi', 'sans-serif'],
        sf: ['"SF Pro Display"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
