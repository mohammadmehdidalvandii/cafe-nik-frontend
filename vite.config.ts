import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";


export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      "@pages": "/src/pages",
      "@components": "/src/components",
      "@components/modules": "/src/components/modules",
      "@components/templates": "/src/components/templates",
      "@components/UI": "/src/components/UI",
      "@layouts": "/src/layouts",
      "@models": "/src/models",
      "@providers": "/src/providers",
      "@services": "/src/services",
      "@store": "/src/store",
      "@validation": "/src/validations",
      "@utils": "/src/utils",
    },
  },

  build: {
    target: "es2018",
    sourcemap: false,
    minify: "esbuild",

    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          router: ["react-router-dom"],
          query: ["@tanstack/react-query"],
          ui: [
            "@radix-ui/react-dialog",
            "@radix-ui/react-select",
            "@radix-ui/react-tabs",
            "@radix-ui/react-switch",
            "@radix-ui/react-label",
            "@radix-ui/react-slot",
          ],
        },
      },
    },
  },

  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
});