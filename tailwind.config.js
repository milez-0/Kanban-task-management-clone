/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      margin: ({ theme }) => ({
        auto: 'auto',
        sidePanel: ('95px'),
      }),
      width: {
        hideButton : '262px',
        '3.5': '14px'
      },
      height: {
        '3.5': '14px'
      },
      padding: {
        '0.7': '3px',
      },
      maxWidth: {
        custom1: '475px',
      },
      boxShadow: {
        custom1: '0px 0px 10px rgba(0, 0, 0, 0.2)',
        darkCustom1: '0px 0px 10px rgba(72, 72, 72, 0.2)'
      },
      colors: {
        transGray: 'rgba(20, 20, 20, 0.5)',
        darkTransGray: 'rgba(5, 5, 5, 0.7)',
        secondary: 'rgb(32, 33, 44)',
        primary: 'rgb(54, 54, 63)',
        extra: 'rgba(199, 210, 254, 0.7)',
        extraDark: 'rgba(199, 210, 254, 0.2)'
      },
      screens: {
        smd: '720px',
      },
    },
  },
  plugins: [],
}

