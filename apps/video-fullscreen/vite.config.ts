import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],  
  base: "./",
  server: { port: 8080 },
  build: {
    rollupOptions: {
      input: {
        video_fullscreen: resolve(__dirname, "index.html"),
        config: resolve(__dirname, "pages/config.html"),
      },
      output: {
        globals: {
          react: "React",
          "react-dom": "React-dom",
        },
      },
    },
  },
});
