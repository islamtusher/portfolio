module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#00A3E1'
      },
    },
  },
  plugins: [require("daisyui")],
}
