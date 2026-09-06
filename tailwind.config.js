/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        raiz: {
          // deep earthy forest greens
          green: '#122017',
          'green-800': '#1a2e1a',
          'green-700': '#223a24',
          'green-600': '#2f4a30',
          // warm cream / off-white
          cream: '#f5f0e8',
          'cream-200': '#ece2d1',
          'cream-300': '#ddceb4',
          // warm gold / ochre accent
          gold: '#c9922a',
          'gold-400': '#dcab4b',
          'gold-600': '#a9791d',
          ink: '#26261f',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'Cambria', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      maxWidth: {
        content: '1180px',
      },
      transitionTimingFunction: {
        'out-soft': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'kenburns': {
          '0%': { transform: 'scale(1) translateY(0)' },
          '100%': { transform: 'scale(1.08) translateY(-1.5%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'kenburns': 'kenburns 18s ease-out both',
      },
    },
  },
  plugins: [],
}
