import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { resolve } from "path";
import tsConfig from "./tsconfig.json";

const alias = Object.entries(tsConfig.compilerOptions.paths).map(([k, v]) => ({
  find: k,
  replacement: resolve(__dirname, v[0]),
}));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: { alias },
  build: {
    outDir: "./doc",
  },
});