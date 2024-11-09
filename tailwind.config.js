/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "screen-minus-244": "calc(100vh - 292px)",
      },
      minHeight: {
        "screen-minus-244": "calc(100vh - 292px)",
      },
    },
  },
  plugins: [daisyui],
};
