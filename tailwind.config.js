/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#030504',
          surface: '#070b09',
          'surface-hover': '#0a110e',
          card: '#09100c',
          border: '#14221b',
          'border-strong': '#1d3328',
          accent: '#19E68C',
          'accent-teal': '#14B8A6',
          text: '#FFFFFF',
          muted: '#8A9A91',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      maxWidth: {
        'content': '1200px',
      },
    },
  },
  plugins: [],
};
