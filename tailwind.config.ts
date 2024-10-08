import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        grey: {
          100: '#979797',
          200: '#2D2D2D',
          300: '#666666',
          400: '#282828',
          500: '#8E8E8E',
          600: '#797979',
          700: '#747474',
          900: '#ECECEC',
          1000: '#1E1E1E',
          1100: '#9B9B9B',
        },
        blue: {
          100: '#2AABBC',
        },
        green: {
          100: '#15272A',
          200: '#40AE54',
        },
      },
    },
  },
  plugins: [],
};
export default config;
