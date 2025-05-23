/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],   // ← switch to class strategy
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: { extend: {} },
  plugins: [],
}
