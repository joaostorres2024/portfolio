import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        galano: ['"Galano Grotesque"', 'sans-serif'],
      },
    },
  },
} satisfies Config