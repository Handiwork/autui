import masterDetailPage from "../../components/masterDetailPage";
import { IRoute } from "../../data/IRoute";
import { lazyExamplePage } from "./ExamplePage";

const de = (it: any) => it.default;

const routes: IRoute[] = [
  {
    title: "Buttons",
    path: "/components/buttons",
    component: lazyExamplePage({
      title: "Buttons",
      sections: [
        {
          component: () => import("./buttons/ContentButtons"),
          code: () => import("./buttons/ContentButtons?raw").then(de),
          description: () =>
            import("./buttons/ContentButtons.txt?raw").then(de),
        },
        {
          component: () => import("./buttons/NormalButtons"),
          code: () => import("./buttons/NormalButtons?raw").then(de),
          description: () => import("./buttons/NormalButtons.txt?raw").then(de),
        },
      ],
    }),
  },
  {
    title: "Compositions",
    path: "/components/compositions",
    component: lazyExamplePage({
      title: "Compositions",
      sections: [
        {
          component: () => import("./compositions/BasicCompositions"),
          code: () => import("./compositions/BasicCompositions?raw").then(de),
          description: () =>
            import("./compositions/BasicCompositions.txt?raw").then(de),
        },
      ],
    }),
  },
  {
    title: "Images",
    path: "/components/images",
    component: lazyExamplePage({
      title: "Images",
      sections: [
        {
          component: () => import("./images/FixedRatioImages"),
          code: () => import("./images/FixedRatioImages?raw").then(de),
          description: () =>
            import("./images/FixedRatioImages.txt?raw").then(de),
        },
      ],
    }),
  },
  {
    title: "Inputs",
    path: "/components/inputs",
    component: lazyExamplePage({
      title: "Inputs",
      sections: [
        {
          component: () => import("./inputs/OutlinedInputs"),
          code: () => import("./inputs/OutlinedInputs?raw").then(de),
          description: () => import("./inputs/OutlinedInputs.txt?raw").then(de),
        },
        {
          component: () => import("./inputs/UnderlinedInputs"),
          code: () => import("./inputs/UnderlinedInputs?raw").then(de),
          description: () =>
            import("./inputs/UnderlinedInputs.txt?raw").then(de),
        },
      ],
    }),
  },
  {
    title: "Layouts",
    path: "/components/layouts",
    component: lazyExamplePage({
      title: "Layouts",
      sections: [
        {
          component: () => import("./layouts/AbsoluteLayouts"),
          code: () => import("./layouts/AbsoluteLayouts?raw").then(de),
          description: () =>
            import("./layouts/AbsoluteLayouts.txt?raw").then(de),
        },
      ],
    }),
  },
];

export default masterDetailPage(routes);
