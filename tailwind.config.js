/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        baskit: ["BASKiT", "sans-serif"],
      },
      colors: {
        sun: {
          100: "#ECF86E", // Your yellow
        },
        sky: {
          100: "#8AC3F9", // Your blue
        },
        forest: {
          100: "#105E49", // Your green
        },
        cloud: {
          100: "#F5F5F5", // Your off-white
        },
      },
      fontFamily: {
        baskit: ["BASKiT", "sans-serif"],
      },
      },
  },
  plugins: [],
}