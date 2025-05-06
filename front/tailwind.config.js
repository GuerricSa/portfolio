/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#222222',
        secondary: '#F7F2E8',
        tertiary: '#E16C38',
        white: '#FFF',
        dark: '#000'
      },
      animation: {
        'fade-in-zoom': 'fadeInZoom 0.7s ease-out forwards',
      },
      keyframes: {
        fadeInZoom: {
          '0%': { opacity: 0, transform: 'scale(0.8) blur(8px)' },
          '100%': { opacity: 1, transform: 'scale(1) blur(0)' },
        },
      },
    },
    container: {
      center: true, // centre automatiquement le container
      padding: "var(--container_horizontal_padding)", // padding horizontal par défaut
      screens: {
        xsm: "449px",
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px"
      },
    }
  },
  plugins: [],
}
