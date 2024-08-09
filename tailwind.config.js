/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { 
                "poppins": ['Poppins', 'sans-serif'] 
      },
      colors: {
        primary: {
          light: '#44B21E',
          DEFAULT: '#44B21E',
          dark: '#8FBF51',
        },
        secondary: {
          light: '#426B1F',
          DEFAULT: '#426B1F',
          dark: '#ffffff',
        },
        tertiary: {
          light: '#F1F1F1',
          DEFAULT: '#F1F1F1',
          dark: '#000000',
        },
        quaternary: {
          light: '#E1B400',
          DEFAULT: '#E1B400',
          dark: '#000000',
        },
      },
    },
  },
  plugins: [],
}

