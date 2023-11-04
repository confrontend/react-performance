import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: "src/main.tsx",
      output: {
        entryFileNames: `[name]-test.js`,
        chunkFileNames: `[name]-test.js`,
        assetFileNames: `[name]-test.[ext]`,
        format: "system",
      },
      external: ["@mui/material", "react", "react-dom"],
    },
  },
});
