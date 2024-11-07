import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

const env = loadEnv("", process.cwd());
console.log("Loaded Environment Variables:", env);

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   server: {
//     port: 3000,
//     proxy: {
//       "/api": {
//         target: "https://json-server-for-vue-jobs.onrender.com/",
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, ""),
//       },
//     },
//   },
//   resolve: {
//     alias: {
//       "@": fileURLToPath(new URL("./src", import.meta.url)),
//     },
//   },
// });
export default defineConfig(({ mode }) => {
  // Load environment variables based on the current mode
  const env = loadEnv(mode, process.cwd());
  // Add this to check
  // This should log the correct URL to the console

  return {
    plugins: [vue()],
    server: {
      port: 3000,
      proxy: {
        "/api": {
          target: env.VITE_API_URL, // Use the VITE_API_URL from .env
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  };
});
