/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'noto':['Noto Sans KR']
    },
    extend: {
      colors:{
        'greenPrimary':'#15AC65',
        'whitePrimary':'#FFFFFF',
        'whiteSecond':'#F7F7F7',
        'blackTxt':'#212121',
        'grayTxt':'#9094A0',
        'blackTxtSecond':'#2E3235'
      }
    },
  },
  plugins: [],
}