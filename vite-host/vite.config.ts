import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    strictPort: true,
  },
  preview: {
    port: 3000,
    strictPort: true,
  },
  plugins: [
    react(),
    federation({
      name: "host",
      remotes: {
        remote: "http://localhost:3001/assets/remoteEntry.js",
        // remoteDynamic: {
        //   external: `Promise.resolve(window.__shell__.UI_URL + '/assets/remote.js')`,
        //   externalType: "promise",
        // },
        // shared: {
        //   react: { singleton: true },
        //   "react-dom": { singleton: true },
        // },
      },
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
  },
  // optimizeDeps: {
  //   include: ["react", "react-dom", "@mui/material"],
  // },
});
