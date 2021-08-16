import loadable from "@loadable/component";
import { IRoute } from "../data/IRoute";

const routes: Array<IRoute> = [
  {
    path: "/docs",
    title: "Docs",
    component: loadable(() => import("./docs")),
  },
  {
    path: "/components",
    title: "Components",
    component: loadable(() => import("./examples")),
  },
];
export default routes;
