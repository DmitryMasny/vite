import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  server: {
    port: 3001,
    strictPort: true,
    proxy: {
      "/api": {
        target: process.env.VITE_BASE_URL,
        changeOrigin: true,
        secure: false,
      },
      "/me": {
        target: process.env.VITE_BASE_URL,
      },
    },
  },
  preview: {
    host: "localhost",
    port: 3001,
    strictPort: true,
  },
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: [
          [
            "@emotion",
            {
              importMap: {
                "@mui/system": {
                  styled: {
                    canonicalImport: ["@emotion/styled", "default"],
                    styledBaseImport: ["@mui/system", "styled"],
                  },
                },
                "@mui/material": {
                  styled: {
                    canonicalImport: ["@emotion/styled", "default"],
                    styledBaseImport: ["@mui/material", "styled"],
                  },
                },
              },
            },
          ],
        ],
      },
    }),
    federation({
      name: "remote",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/ui/Button",
      },
      // remotes: {
      //   ui: process.env.UI_BASE_URL || 'localhost:3333/assets/remoteUI.js',
      // },
      shared: ["react", "react-dom", "@mui/material"],
    }),
  ],
  resolve: {
    alias: {
      ui: path.resolve(__dirname, "./src/ui"),
      api: path.resolve(__dirname, "./src/api"),
    },
  },
  build: {
    target: "esnext",
    minify: false,
  },
  esbuild: {
    supported: {
      "top-level-await": true,
    },
  },
  // optimizeDeps: {
  //   include: ["react", "react-dom", "@mui/material"],
  // },
});
