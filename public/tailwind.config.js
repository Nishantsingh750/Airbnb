/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
  "./views/**/*.ejs",
  "./public/**/*.html",
  "../**/*.js"
]
,
   safelist: [
    'text-blue-500',
    'hover:underline',
    'bg-blue-500',
    'text-red-500',
    'underline',
    'font-bold',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}