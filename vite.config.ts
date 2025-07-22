import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],

          icons: ["lucide-react"],

          animations: ["framer-motion"],
        },
      },
    },

    minify: "esbuild",

    cssCodeSplit: true,

    assetsInlineLimit: 4096,

    chunkSizeWarningLimit: 1000,
  },

  css: {
    devSourcemap: true,
  },

  server: {
    hmr: {
      overlay: false,
    },
  },

  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "lucide-react",
      "framer-motion",
    ],
  },
});
