import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    base: mode === "prod" ? "/portfolio/" : "/", // Dynamically set base
    // base: "/portfolio/", // Set base for GitHub Pages
    build: {
      outDir: "dist",
    },
  };
});
