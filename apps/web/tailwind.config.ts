import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Angela Spa brand colors
        sage: {
          DEFAULT: '#9DAB97',
          50: '#F5F7F4',
          100: '#E8ECE6',
          200: '#D4DCD0',
          300: '#B8C5B2',
          400: '#9DAB97',
          500: '#7F8F79',
          600: '#677360',
          700: '#515C4D',
          800: '#3D4439',
          900: '#2A2E27',
        },
        beige: {
          light: '#EDE5DB',
          DEFAULT: '#C4AE91',
          50: '#FAF8F5',
          100: '#F5F0EA',
          200: '#EDE5DB',
          300: '#E0D3C3',
          400: '#D2C1A9',
          500: '#C4AE91',
          600: '#A89175',
          700: '#8A755C',
          800: '#6B5A46',
          900: '#4D4132',
        },
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
        audrey: ['var(--font-audrey)', 'cursive'],
      },
    },
  },
  plugins: [],
};

export default config;
