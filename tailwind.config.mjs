/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Open Sans'", 'system-ui', 'sans-serif'],
        display: ["'Outfit'", 'system-ui', 'sans-serif'],
        jakarta: ["'Plus Jakarta Sans'", 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: '#001F3F',
        gold: '#E5A524',
        slate: '#3F5767',
        'gold-light': '#E9C466',
      },
    },
  },
  plugins: [],
};
