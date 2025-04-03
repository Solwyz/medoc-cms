/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        AnekLatin: ["Anek Latin", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"], // Fixed the spelling
      },
      backgroundImage: {
        adminLogin: "url('/src/Cms/Assets/bg-admin.png')", // Fixed path issue
      },
      colors: {
        grayTextColor: "#AEAEAE", // Fixed naming convention
      },
    },
  },
  plugins: [],
};
