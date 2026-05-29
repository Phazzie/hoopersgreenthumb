import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark:         '#060D07',
        forest:       '#1B4332',
        'forest-mid': '#2D6A4F',
        gold:         '#C9A84C',
        'gold-light': '#E8C76A',
        cream:        '#F5F0E8',
        'cream-muted':'#B8B0A3',
        muted:        '#5E7057',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body:    ['var(--font-body)',    'sans-serif'],
      },
      keyframes: {
        slowzoom: { '0%': { transform: 'scale(1.05)' }, '100%': { transform: 'scale(1)' } },
        fadeup:   { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
      animation: {
        slowzoom: 'slowzoom 12s ease forwards',
        fadeup:   'fadeup .7s ease forwards',
      },
    },
  },
  plugins: [],
}

export default config
