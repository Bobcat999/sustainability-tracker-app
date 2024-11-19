import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/sustainability-tracker-app/",
  plugins: [react()],
  assetsInclude: ["**/*.png", "**/*.svg"],
});
