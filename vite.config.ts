import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import jsx from "vite-react-jsx";
import { resolve } from "path";
import tsConfig from "./tsconfig.json";
import { name } from "./package.json";

const alias = Object.entries(tsConfig.compilerOptions.paths).map(([k, v]) => ({
  find: k,
  replacement: resolve(__dirname, v[0]),
}));

// https://vitejs.dev/config/
export default defineConfig({
  base: `/${name}/`,
  plugins: [reactRefresh(), jsx()],
  resolve: { alias },
  build: {
    outDir: "./doc",
  },
  server: {
    watch: {
      ignored: ["coverage/**/*"],
    },
  },
});
