import { defineConfig } from "vite";
import path from "path";
import packageInfo from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: false,
    target: "es2015",
    lib: {
      entry: path.resolve(__dirname, "lib/index.tsx"),
      name: "autui",
      fileName: (format) => `autui.${format}.js`,
    },
    rollupOptions: {
      output: {
        dir: "./dist",
      },
      external: Object.keys(packageInfo.peerDependencies),
    },
  },
});
