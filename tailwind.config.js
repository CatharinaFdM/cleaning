/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkblue: "#001965",
        white: "#FFFFFF",
        lightblue: "#E6E8F0",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      height: {
        20: "20px",
        25: "35px",
        30: "30px",
        50: "50px",
        75: "75px",
        90: "90px",
        100: "100px",
        150: "150px",
        200: "200px",
        300: "300px",
        500: "500px",
        1200: "1200px",
      },
      width: {
        20: "20px",
        25: "35px",
        50: "50px",
        75: "75px",
        90: "90px",
        100: "100px",
        150: "150px",
        200: "200px",
        300: "300px",
        400: "400px",
        500: "500px",
        550: "550px",
        700: "700px",
        1920: "1920px"
      },
      borderRadius: {
        12: "12px",
        15: "15px",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      screens: {
        xs: "400px",
        sm: "680px",
        md: "888px",
        lg: "1284px",
        xl: "1920px",
      },

    },
  };
