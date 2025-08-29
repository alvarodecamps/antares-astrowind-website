import defaultTheme from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'antares-dark-blue': '#3A3A5A',
        'antares-light-gray': '#9696BE',
        'antares-gray': '#5A5A64',
        primary: {
          50: '#E6E6FF',
          100: '#C4C4FF',
          200: '#A2A2FF',
          300: '#8080FF',
          400: '#5F5FFF',
          500: '#3D3DFF',
          600: '#3030CC',
          700: '#242499',
          800: '#181866',
          900: '#0C0C33',
        },
      },
      fontFamily: {
        sans: ['"InterVariable"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [typography],
};