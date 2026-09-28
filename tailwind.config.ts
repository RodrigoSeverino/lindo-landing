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
        // Botón de WhatsApp: ciclo de 38 s = ~2,7 s de actividad (dos latidos
        // del botón y dos ondas del anillo) y ~35 s quieto, para que se note
        // sin volverse invasivo. Todo en CSS: antes titilaba al cargar y
        // después cada 60 s por JS, y parecía que estaba fijo.
        waLatido: {
          "0%, 7%, 100%": { transform: "scale(1)" },
          "1.75%, 5.25%": { transform: "scale(1.08)" },
          "3.5%": { transform: "scale(1)" },
        },
        waOnda: {
          "0%, 3.6%": { transform: "scale(1)", opacity: "0.6" },
          "3.5%, 7%, 100%": { transform: "scale(1.9)", opacity: "0" },
        },
      },
      animation: {
        kenburns: "kenburns 18s ease-in-out infinite alternate",
        "fade-up": "fadeUp 0.8s ease-out both",
        "bounce-slow": "bounceSlow 2s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        drift: "drift 13s ease-in-out infinite",
        "drift-slow": "drift 19s ease-in-out infinite reverse",
        // Ver keyframes.waLatido: arranca a los 3 s de cargar la página.
        "wa-latido": "waLatido 38s ease-in-out 3s infinite",
        "wa-onda": "waOnda 38s cubic-bezier(0,0,0.2,1) 3s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
