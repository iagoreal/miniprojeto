import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath } from "url";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  const _API_URL = `${env.URL_BASE ?? ""}`;

  return {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    plugins: [vue()],

    server: {
      proxy: {
        // with options: http://localhost:5173/api/bar-> http://jsonplaceholder.typicode.com/bar
        "/api": {
          target: _API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  };
});