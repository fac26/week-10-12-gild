/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        green: '#A1AA91',
        accentcolor1: '#540375',
        accentcolor2: '#F9F9F9',
        accentcolor3: '#F5E8DA',
        accentcolor4: '#545C00ff',
      },
      fontFamily: {
        cursive: ['Jomhuria', 'cursive'],
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Finger Paint', 'cursive'],
      },
      fontSize: {
        base: ['2.8rem', '1.5rem'],
        custom: ['1.8rem', '1.25rem'],
      },
      backgroundImage: {
        'hero-image': "url('/bg-image.png')",
        'hero-image-phone': "url('/bg-image-phone-new.png')",
      },
    },
    plugins: [],
  },
};
