import { lazy } from "react";
import { FaCog } from "react-icons/fa";
import { IRoute } from "../data/IRoute";

const routes: Array<IRoute> = [
  {
    path: "docs",
    title: "Docs",
    component: lazy(() => import("./docs")),
  },
  {
    path: "components",
    title: "Components",
    component: lazy(() => import("./examples")),
  },
  {
    path: "configuration",
    title: <FaCog />,
    component: lazy(() => import("./Configuartion")),
  },
];
export default routes;
