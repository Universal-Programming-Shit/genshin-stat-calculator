/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/genshin-stat-calculator/",
  build: {
    outDir: "docs",
    ssr: false,
  },
  test: {
    environment: "jsdom",
  },
});
