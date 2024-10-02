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
        },
        blue: {
          100: '#2AABBC',
        },
      },
    },
  },
  plugins: [],
};
export default config;
