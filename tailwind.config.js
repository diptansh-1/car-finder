/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'outfit': ['var(--font-outfit)'],
      'plus-jakarta-sans': ['var(--font-plus-jakarta-sans)'],
      'sans': ['var(--font-plus-jakarta-sans)', 'system-ui', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0eefe',
          200: '#bbd7fe',
          300: '#8ab6fc',
          400: '#5a8ef8',
          500: '#3366f3',
          600: '#2049e5',
          700: '#1c3ad0',
          800: '#1c31a8',
          900: '#1c2f84',
          950: '#141c4d',
        },
        secondary: {
          50: '#fdf3f3',
          100: '#fbe5e5',
          200: '#f8d0d0',
          300: '#f2aeae',
          400: '#e88080',
          500: '#db5757',
          600: '#c93a3a',
          700: '#a92e2e',
          800: '#8c2929',
          900: '#742828',
          950: '#3f1111',
        },
        accent: {
          50: '#f2fbf4',
          100: '#e0f7e4',
          200: '#c2eecb',
          300: '#94dfa5',
          400: '#5fc777',
          500: '#3aad56',
          600: '#278c42',
          700: '#216f37',
          800: '#1e5830',
          900: '#1a492a',
          950: '#0c2816',
        },
        neutral: {
          50: '#f7f7f8',
          100: '#eeeef0',
          200: '#d9d9de',
          300: '#b8b9c1',
          400: '#92939f',
          500: '#757684',
          600: '#5f606c',
          700: '#4d4e58',
          800: '#42434a',
          900: '#3a3a40',
          950: '#242428',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'bounce-light': 'bounceLight 1s infinite',
        'pulse-light': 'pulseLight 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        bounceLight: {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(0)' },
        },
        pulseLight: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [],
}
