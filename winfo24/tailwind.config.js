/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'black': '#333637',
        'white': '#F5F5F5',
        'light-yellow': '#FFEBB9',
        'med-yellow': '#FFD063',
        'dark-yellow': '#FFB300',
        'dark-blue': '#00A9FF',
        'med-blue': '#89CFF3',
        'light-blue': '#A0E9FF',
        'lightest-blue': '#CDF5FD',
      },
    },
  },
  plugins: [],
};
