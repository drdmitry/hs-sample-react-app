import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans'], // Inter is the name you'll use in your CSS
      },
    },
  },
  plugins: [],
} satisfies Config;
