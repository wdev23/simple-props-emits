/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html", "./src/**/*.{vue,js}", ],
  theme: {
    extend: {
      colors: {
        cl_black: "#222831",
        cl_blackLight: "#393E46",
        cl_blue: "#00ADB5",
        cl_gray: "#EEEEEE",
      }
    },
    container: {
      center: true
    },
    fontFamily: {
      Nunito: ["Nunito", "sans-serif"]
    },
  },
  plugins: [],
}

