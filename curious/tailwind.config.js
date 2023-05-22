/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        'loading-skeleton': {
          '0%': { 'background-position': '200% 0' },
          '100%': { 'background-position': '-200% 0' },
        },
      },
      animation: {
        'loading-skeleton': 'loading-skeleton 1.5s infinite',
      },
      gridTemplateColumns: {
        sidebar: "300px auto",
      },
      gridTemplateRows: {
        header: "64px auto",
      },
      colors: {
        transparent: 'transparent',
        black: '#000000', // cta buttons, main text
        dark: '#121212', // dark mode sidebar and header
        anthracite: '#1d1d1f', // dark mode main background, light mode search border
        darkerGrey: '#3b3b3f', // light mode sidebar texts
        darkGrey: '#b8b7b7', // dark mode sidebar texts and whole search bar, light mode search bar text
        grey: '#dcdcdc', // light mode header and sidebar borders 
        lightGrey: '#f1f1f1', // sidebar background light mode
        white: '#ffffff', // main light mode backgrounds
        placeholder: '#a9a9a9', //placeholder color for index typing animation
      },
      width: {
        '272': '272px',
      }
    },
  },
  plugins: [],
}
