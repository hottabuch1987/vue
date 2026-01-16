/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      // для class="container"
      padding: {
        DEFAULT: "16px", // px-4
        sm: "24px",      // sm:px-6
        lg: "95px",      // lg:px-[95px]
      },
    },
    extend: {
      // под макет
      screens: {
        "3xl": "1440px",
      },
      // max-w-page
      maxWidth: {
        page: "1440px",
      },
    },
  },
  plugins: [],
}
