/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".src/index.html","./src/**/*.{js,jsx,ts,tsx}","./node_modules/flowbite/**/*.js", "./src/**/*.jsx", "./src/components/**/*.{js,jsx}", "./src/*.jsx"], 
  theme: {
    extend: {
      colors: {
        primary: { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a" }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
