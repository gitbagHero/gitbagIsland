import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  integrations: [react()],
  experimental: {
    rustCompiler: true,
  },
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: ["animal-island-ui"],
    },
  },
});
