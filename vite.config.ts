import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { resolve } from "path";
import tsConfig from "./tsconfig.json";
import docConf from "./doc.config";

const alias = Object.entries(tsConfig.compilerOptions.paths).map(([k, v]) => ({
  find: k,
  replacement: resolve(__dirname, v[0]),
}));

// https://vitejs.dev/config/
export default defineConfig({
  base: docConf.basename,
  plugins: [reactRefresh()],
  resolve: { alias },
  build: {
    outDir: "./doc",
  },
});
