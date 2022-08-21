const path = require("path");
const fs = require("fs");
const { capitalize } = require("lodash");

const exampleDir = path.resolve(__dirname, "../src/view/examples");

/**
 *
 * @param {string} dirname dir name
 */
function scanExamples(dirname) {
  return fs
    .readdirSync(dirname, { withFileTypes: true })
    .filter((it) => it.isDirectory())
    .map((it) => it.name);
}

const descriptionExtensions = [".txt", ".md"];

function getDescriptionImporLiteral(files, componentName, pathname) {
  // eslint-disable-next-line no-restricted-syntax
  for (const ext of descriptionExtensions) {
    if (files.includes(componentName + ext))
      return `() => import("${pathname + ext}?raw").then(de)`;
  }
  return `() => Promise.resolve("")`;
}

/**
 *
 * @param {string} dirname dir name
 */
function scanExampleSections(dirname) {
  const files = fs
    .readdirSync(dirname, { withFileTypes: true })
    .filter((it) => it.isFile())
    .map((it) => it.name);
  console.log("files:");
  console.log(files);
  const components = files
    .map((it) => /([A-Z]\w+)\.tsx/.exec(it))
    .filter((it) => it != null)
    .map((it) => it[1]);
  console.log("components:");
  console.log(components);
  return components.map((componentName) => {
    let pathname = path.relative(
      exampleDir,
      path.resolve(dirname, componentName)
    );
    pathname = pathname.replace(/\\/g, "/");
    if (!pathname.startsWith(".")) pathname = `./${pathname}`;
    return {
      component: `() => import("${pathname}").then(de)`,
      code: `() => import("${pathname}?raw").then(de)`,
      description: getDescriptionImporLiteral(files, componentName, pathname),
    };
  });
}

function generateSection(section) {
  return `{
  component: ${section.component},
  code: ${section.code},
  description: ${section.description},
}`;
}

function generateRoute(p, sections) {
  const title = `"${capitalize(p)}"`;
  return `{
  title: ${title},
  path: "${p}",
  component: lazyExamplePage({
    title: ${title},
    sections: [
${sections.map((it) => generateSection(it)).join("\n,\n")}
    ]
  })
}`;
}

function generateRoutes(indices) {
  return `import { IRoute } from "@doc/data/IRoute";
import { lazyExamplePage } from "./ExamplePage";

const de = (it: any) => it.default;

const routes: IRoute[] = [
${Object.entries(indices)
  .map(([p, sections]) => generateRoute(p, sections))
  .join("\n,\n")}
]

export default routes;
`;
}

function main() {
  const subfolders = scanExamples(exampleDir);
  const indices = {};
  subfolders.forEach((it) => {
    indices[it] = scanExampleSections(path.resolve(exampleDir, it));
  });
  const content = generateRoutes(indices);
  fs.writeFileSync(path.resolve(exampleDir, "routes.tsx"), content, {
    encoding: "utf-8",
  });
}

main();
