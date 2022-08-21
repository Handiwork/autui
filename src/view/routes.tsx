import loadable from "@loadable/component";
import { FaCog } from "react-icons/fa";
import { IRoute } from "../data/IRoute";

const routes: Array<IRoute> = [
  {
    path: "docs",
    title: "Docs",
    component: loadable(() => import("./docs")),
  },
  {
    path: "components",
    title: "Components",
    component: loadable(() => import("./examples")),
  },
  {
    path: "configuration",
    title: <FaCog />,
    component: loadable(() => import("./Configuartion")),
  },
];
export default routes;
