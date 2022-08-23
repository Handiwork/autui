import viteReact from "@vitejs/plugin-react";
import { resolve } from "path";
import { AliasOptions, defineConfig } from "vite";
import { name } from "./package.json";
import tsConfig from "./tsconfig.json";

const alias: AliasOptions = Object.entries(tsConfig.compilerOptions.paths).map(
  ([k, v]) => ({
    find: k,
    replacement: resolve(__dirname, v[0]),
  })
);

// https://vitejs.dev/config/
export default defineConfig({
  base: `/${name}/`,
  plugins: [viteReact()],
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
