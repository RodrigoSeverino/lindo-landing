import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// output "static": HTML/CSS puro, sin runtime de servidor — funciona en
// cualquier hosting (Vercel, Hostinger, lo que se decida) sin restricciones.
export default defineConfig({
  output: "static",
  integrations: [tailwind()],
});
