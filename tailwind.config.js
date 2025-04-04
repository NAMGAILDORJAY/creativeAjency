/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF3366',
          dark: '#E62E5C',
        },
        secondary: '#6C63FF',
        accent: '#00F5D4',
        neon: {
          pink: '#FF61D8',
          blue: '#00F5FF',
          purple: '#9D50FF',
          yellow: '#FFD93D',
        },
        dark: '#171717',
        light: '#FAFAFA',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      fontSize: {
        '2xs': '0.625rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'blob': 'blob 7s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        glow: {
          '0%': { filter: 'brightness(100%)' },
          '100%': { filter: 'brightness(150%)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-candy': 'linear-gradient(135deg, #FF61D8 0%, #6C63FF 100%)',
        'gradient-neon': 'linear-gradient(135deg, #00F5FF 0%, #FF3366 100%)',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(0, 245, 255, 0.5)',
        'neon-pink': '0 0 20px rgba(255, 97, 216, 0.5)',
        'neon-purple': '0 0 20px rgba(157, 80, 255, 0.5)',
      },
    },
  },
  plugins: [],
} 