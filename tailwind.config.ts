import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        bordo: "#802930",
        crema: "#EBE3D7",
        blanco: "#FEFEFE",
        negro: "#000000",
      },
    },
  },
  plugins: [],
};

export default config;
