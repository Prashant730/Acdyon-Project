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
          bg: '#050807',
          'bg-secondary': '#0A110E',
          card: '#0E1713',
          border: '#1A2A22',
          accent: '#19E68C',
          'accent-secondary': '#14B8A6',
          text: '#F2F7F4',
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
