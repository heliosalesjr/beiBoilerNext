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
        primary: '#0069B4',
        customBlue: '#0069B4'
      }
    },
  },
  plugins: [require("daisyui")],
          daisyui: {
            themes: ["pastel"],
          }
}
