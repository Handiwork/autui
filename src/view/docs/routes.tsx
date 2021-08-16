import loadable from "@loadable/component";
import { IRoute } from "../../data/IRoute";

const routes: Array<IRoute> = [
  {
    path: "introduction",
    title: "Autui",
    component: loadable(() => import("./Introduction")),
  },
  {
    path: "quick-start",
    title: "Quick Start",
    component: loadable(() => import("./QuickStart")),
  },
];

routes.forEach((it) => {
  it.path = `/docs/${it.path}`;
});

export default routes;
