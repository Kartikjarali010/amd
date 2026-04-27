/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: '#131315',
        'surface-dim': '#131315',
        'surface-bright': '#39393b',
        'surface-container-lowest': '#0e0e10',
        'surface-container-low': '#1b1b1d',
        'surface-container': '#201f21',
        'surface-container-high': '#2a2a2c',
        'surface-container-highest': '#353437',
        'on-surface': '#e5e1e4',
        'on-surface-variant': '#cbc3d7',
        'inverse-surface': '#e5e1e4',
        'inverse-on-surface': '#303032',
        outline: '#958ea0',
        'outline-variant': '#494454',
        'surface-tint': '#10b981',
        primary: '#10b981',
        'on-primary': '#022c22',
        'primary-container': '#059669',
        'on-primary-container': '#a7f3d0',
        'inverse-primary': '#34d399',
        secondary: '#f472b6',
        'on-secondary': '#831843',
        'secondary-container': '#be185d',
        'on-secondary-container': '#fbcfe8',
        tertiary: '#adc6ff',
        'on-tertiary': '#002e6a',
        'tertiary-container': '#4d8eff',
        'on-tertiary-container': '#00285d',
        error: '#ffb4ab',
        'on-error': '#690005',
        'error-container': '#93000a',
        'on-error-container': '#ffdad6',
        'primary-fixed': '#d1fae5',
        'primary-fixed-dim': '#10b981',
        'on-primary-fixed': '#064e3b',
        'on-primary-fixed-variant': '#047857',
        'secondary-fixed': '#fce7f3',
        'secondary-fixed-dim': '#f472b6',
        'on-secondary-fixed': '#831843',
        'on-secondary-fixed-variant': '#9d174d',
        'tertiary-fixed': '#d8e2ff',
        'tertiary-fixed-dim': '#adc6ff',
        'on-tertiary-fixed': '#001a42',
        'on-tertiary-fixed-variant': '#004395',
        background: '#131315',
        'on-background': '#e5e1e4'
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'sm': '0.25rem',
        DEFAULT: '0.5rem',
        'md': '0.75rem',
        'lg': '1rem',
        'xl': '1.5rem',
        'full': '9999px',
        'inner': '16px', // concentric radius logic
        'card': '24px', // 24px
        'button': '12px' // 12px
      },
      spacing: {
        'sidebar': '280px',
      }
    },
  },
  plugins: [],
}
