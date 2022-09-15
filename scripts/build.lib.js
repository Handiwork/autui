const vite = require("vite");
const path = require("path");
const fs = require("fs");
const cp = require("child_process");
const packageInfo = require("../package.json");

const rootDir = path.resolve(__dirname, "..");
const srcDir = path.resolve(rootDir, "lib");
const outputDir = path.resolve(rootDir, "dist");
const typesRelativeDir = "./types";

const libName = "autui";

function generateFileName(format) {
  return `${libName}.${format}.js`;
}
const umdFilePath = `./${generateFileName("umd")}`;
const esFilePath = `./${generateFileName("es")}`;

async function buildLib() {
  const external = Object.keys({
    ...packageInfo.peerDependencies,
    ...packageInfo.dependencies,
  });
  return vite.build({
    publicDir: false,
    build: {
      outDir: outputDir,
      emptyOutDir: true,
      target: "es2015",
      lib: {
        entry: path.resolve(srcDir, "index.tsx"),
        name: libName,
        fileName: generateFileName,
      },
      rollupOptions: {
        external,
        output: {
          globals: {
            react: "React",
            "styled-components": "styled",
            polished: "polished",
          },
        },
      },
    },
  });
}

async function buildType() {
  try {
    console.log("building types...");
    cp.execSync(`npm run build:types`);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("building types finished");
  }
}

async function writePackageInfo() {
  console.log("writing package.json...");
  const info = {
    name: libName,
    version: packageInfo.version,
    main: umdFilePath,
    module: esFilePath,
    types: typesRelativeDir,
    exports: {
      ".": {
        import: esFilePath,
        require: umdFilePath,
        default: umdFilePath,
      },
    },
    peerDependencies: packageInfo.peerDependencies,
    dependencies: packageInfo.dependencies,
    files: [esFilePath, umdFilePath, typesRelativeDir],
  };
  fs.writeFileSync(
    path.resolve(outputDir, "package.json"),
    JSON.stringify(info, undefined, 2),
    { encoding: "utf-8" }
  );
}

async function writeIndexTyping() {
  console.log("write index typing...");
  const content = `export * from "./types"\n`;
  fs.writeFileSync(path.resolve(outputDir, "index.d.ts"), content, {
    encoding: "utf-8",
  });
}

async function main() {
  await buildLib();
  await buildType();
  await writePackageInfo();
  await writeIndexTyping();
  console.log("building finished");
}

main();
