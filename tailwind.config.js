/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'basic': `0px 3px 7px 0px #0000001A, 
                  0px 12px 12px 0px #00000017, 
                  0px 28px 17px 0px #0000000D, 
                  0px 50px 20px 0px #00000003, 
                  0px 77px 22px 0px #00000000`,
      },
      fontFamily: {
        Montserrat: ["Montserrat-Regular", "serif"],
      },
    },
  },
  plugins: [],
};
