import createMarkdownPage from "@doc/components/markdownPage";
import createMasterDetailPage from "@doc/components/masterDetailPage";
import { IRoute } from "@doc/data/IRoute";

const routes: Array<IRoute> = [
  {
    path: "introduction",
    title: "Autui",
    component: createMarkdownPage(() => import("./Introduction.md?raw")),
  },
  {
    path: "quick-start",
    title: "Quick Start",
    component: createMarkdownPage(() => import("./QuickStart.md?raw")),
  },
];

export default createMasterDetailPage(routes);
