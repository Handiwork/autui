import markdownPage from "@doc/components/markdownPage";
import masterDetailPage from "@doc/components/masterDetailPage";
import { IRoute } from "../../data/IRoute";

const routes: Array<IRoute> = [
  {
    path: "introduction",
    title: "Autui",
    component: markdownPage(() => import("./Introduction.md?raw")),
  },
  {
    path: "quick-start",
    title: "Quick Start",
    component: markdownPage(() => import("./QuickStart.md?raw")),
  },
];

routes.forEach((it) => {
  it.path = `/docs/${it.path}`;
});

export default masterDetailPage(routes);
