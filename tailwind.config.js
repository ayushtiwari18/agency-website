/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          black: '#0D0D0D',
          white: '#FFFFFF',
          gray: {
            50:  '#F9F9F9',
            100: '#F3F3F3',
            200: '#E8E8E8',
            300: '#D4D4D4',
            400: '#A3A3A3',
            500: '#737373',
            600: '#525252',
            700: '#404040',
            800: '#262626',
            900: '#171717',
          }
        }
      },
      fontSize: {
        'display-xl': ['clamp(3rem,7vw,6rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.25rem,5vw,4rem)', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(1.75rem,3.5vw,2.75rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
      },
      maxWidth: { content: '1200px' },
      borderRadius: { card: '0.75rem' },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
