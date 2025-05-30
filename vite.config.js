import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
  server: {
    historyApiFallback: true,
  },
  assetsInclude: [
    "**/*.JPG",
    "**/*.jpg",
    "**/*.jpeg",
    "**/*.JPEG",
    "**/*.PNG",
    "**/*.png",
    "**/*.gif",
    "**/*.GIF",
    "**/*.svg",
    "**/*.SVG",
  ],
});
