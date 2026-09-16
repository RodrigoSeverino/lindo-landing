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
      keyframes: {
        kenburns: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.12)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        bounceSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(24px, -18px) scale(1.08)" },
        },
      },
      animation: {
        kenburns: "kenburns 18s ease-in-out infinite alternate",
        "fade-up": "fadeUp 0.8s ease-out both",
        "bounce-slow": "bounceSlow 2s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        drift: "drift 13s ease-in-out infinite",
        "drift-slow": "drift 19s ease-in-out infinite reverse",
      },
    },
  },
  plugins: [],
};

export default config;
