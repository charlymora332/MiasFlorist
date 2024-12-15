/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // colors: {
      //   // Define tus colores con los nombres que prefieras
      //   'unnamed-color-f5f5f5': '#F5F5F5',
      //   'unnamed-color-131313': '#131313',
      //   'unnamed-color-606060': '#606060',
      //   'unnamed-color-ffaa01': '#FFAA01',
      //   'unnamed-color-f6dcdc': '#F6DCDC',
      //   'unnamed-color-f7527a': '#F7527A',
      //   'unnamed-color-F5F5F5': '#F5F5F5',

      // },
      colors: {
        f5f5f5: "#F5F5F5",
        131313: "#131313",
        606060: "#606060",
        ffaa01: "#FFAA01",
        f6dcdc: "#F6DCDC",
        f7527a: "#F7527A",
        606060: '#606060',
      },
      fontFamily: {
        "sf-pro-display": ["SF Pro Display", "sans-serif"],
     "sf-pro-display-italic": ["'SF Pro Display Italic'", "sans-serif"],


        "playfair-display": ["Playfair Display", "serif"],
        "font-sf-pro-display-black-italic": ["SF Pro Display", "Black-italic"]
      },
      fontSize: { 16: "16px", 18: "18px", 20: "20px", 24: "24px", 48: "48px" , 60: "60px"},
      lineHeight: { 24: "24px", 32: "32px", 64: "64px" },
    
    fontWeight: {
      'ultra-bold': 1000, // Puedes añadir un peso más grueso, como 1000
    },
    screens: {
      'mv': { max: '766px' },
      'tv': { max: '1000px' }, // Breakpoint personalizado para dispositivos menores a 780px
    },
    boxShadow: {
      'shadow-inferio': '0 4px 6px rgba(0, 0, 0, 0.1), 0 5px 3px rgba(0, 0, 0, 0.08)',
    },
  },
  },
  plugins: [],
};
