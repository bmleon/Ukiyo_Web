import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'ukiyo-gold': '#C5A059',
        'ukiyo-dark': '#121212',
        'ukiyo-nav': '#1E1E1E',
      },
    },
  },
  plugins: [],
} satisfies Config
