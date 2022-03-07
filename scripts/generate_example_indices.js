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

/**
 *
 * @param {string} dirname dir name
 */
function scanExampleSections(dirname) {
  const files = fs
    .readdirSync(dirname, { withFileTypes: true })
    .filter((it) => it.isFile())
    .map((it) => it.name);
  console.log(files);
  const components = files
    .map((it) => /([A-Z]\w+)\.tsx/.exec(it))
    .filter((it) => it != null)
    .map((it) => it[1]);
  console.log(components);
  return components.map((it) => {
    let p = path.relative(exampleDir, path.resolve(dirname, it));
    p = p.replace(/\\/g, "/");
    if (!p.startsWith(".")) p = `./${p}`;
    return {
      component: `() => import("${p}").then(de)`,
      code: `() => import("${p}?raw").then(de)`,
      description: files.includes(`${it}.txt`)
        ? `() => import("${p}.txt?raw").then(de)`
        : `() => Promise.resolve("")`,
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
  path: "/components/${p}",
  component: lazyExamplePage({
    title: ${title},
    sections: [
${sections.map((it) => generateSection(it)).join("\n,\n")}
    ]
  })
}`;
}

function generateRoutes(indices) {
  return `import masterDetailPage from "@doc/components/masterDetailPage";
import { IRoute } from "@doc/data/IRoute";
import { lazyExamplePage } from "./ExamplePage";

const de = (it: any) => it.default;

const routes: IRoute[] = [
${Object.entries(indices)
  .map(([p, sections]) => generateRoute(p, sections))
  .join("\n,\n")}
]

export default masterDetailPage(routes);
`;
}

function main() {
  const subfolders = scanExamples(exampleDir);
  const indices = {};
  subfolders.forEach((it) => {
    indices[it] = scanExampleSections(path.resolve(exampleDir, it));
  });
  const content = generateRoutes(indices);
  fs.writeFileSync(path.resolve(exampleDir, "index.tsx"), content, {
    encoding: "utf-8",
  });
}

main();
