/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        matn :'#282828',
        inputBg : '#F2F2F2',
        btnCreate : '#55A3F0'
      },
      spacing: {
        0.25: "1px",
      },
      borderRadius: {
        custom: '40px',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
