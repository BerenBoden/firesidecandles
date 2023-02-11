module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        width: {
          '15': '15%',
          '70': '70%',
        },
        height: {
          '112': '28rem',
          '128': '32rem',
        }
      },
    },
    plugins: [],
  }