/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '2rem',
        lg: '3rem',
        xl: '4rem',
      },
    },
    extend: {
      colors: {
        coffee: {
          50: '#FAF6F1',
          100: '#F5F1EB',
          200: '#E8DCC8',
          300: '#DDD3C6',
          400: '#C4A77D',
          500: '#8A5D38',
          600: '#6E4A2C',
          700: '#5A3A22',
          800: '#432B19',
          900: '#2B1D16',
          950: '#1B120C',
        },
        organic: {
          50: '#EAF4EA',
          100: '#CFE6D0',
          200: '#A4CFA7',
          300: '#6FA873',
          400: '#458A49',
          500: '#2E7D32',
          600: '#276A2A',
          700: '#1F5422',
        },
        gold: {
          50: '#FBF3DF',
          100: '#F3E1AE',
          200: '#EBCB74',
          300: '#DFB847',
          400: '#D4A017',
          500: '#B8890F',
          600: '#96700C',
        },
        ink: {
          DEFAULT: '#2B1D16',
          secondary: '#6E6259',
        },
        beige: '#F5F1EB',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        sm: '0.375rem',
        DEFAULT: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.5rem',
        '2xl': '2rem',
      },
      boxShadow: {
        soft: '0 2px 8px 0 rgba(43, 29, 22, 0.06)',
        card: '0 8px 24px -8px rgba(43, 29, 22, 0.14)',
        lifted: '0 20px 45px -15px rgba(43, 29, 22, 0.25)',
        gold: '0 8px 24px -8px rgba(212, 160, 23, 0.35)',
      },
      letterSpacing: {
        widest2: '0.25em',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
      maxWidth: {
        content: '1280px',
      },
      transitionTimingFunction: {
        organic: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
