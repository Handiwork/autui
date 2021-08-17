import loadable from "@loadable/component";
import masterDetailPage from "../../components/masterDetialPage";
import { IRoute } from "../../data/IRoute";

const routes: Array<IRoute> = [
  {
    path: "buttons",
    title: "Buttons",
    component: loadable(() => import("./buttons")),
  },
  {
    path: "layouts",
    title: "Layouts",
    component: loadable(() => import("./layouts")),
  },
  {
    path: "compositions",
    title: "Compositions",
    component: loadable(() => import("./compositions")),
  },
  {
    path: "inputs",
    title: "Inputs",
    component: loadable(() => import("./inputs")),
  },
];

routes.forEach((it) => {
  it.path = `/components/${it.path}`;
});

export default masterDetailPage(routes);
