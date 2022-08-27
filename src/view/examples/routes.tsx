import { IRoute } from "@doc/data/IRoute";
import { lazyExamplePage } from "./ExamplePage";

const de = (it: any) => it.default;

const routes: IRoute[] = [
  {
    title: "Buttons",
    path: "buttons",
    component: lazyExamplePage({
      title: "Buttons",
      sections: [
        {
          component: () => import("./buttons/FlatButtons").then(de),
          code: () => import("./buttons/FlatButtons?raw").then(de),
          description: () => import("./buttons/FlatButtons.txt?raw").then(de),
        },
        {
          component: () => import("./buttons/PureButtons").then(de),
          code: () => import("./buttons/PureButtons?raw").then(de),
          description: () => import("./buttons/PureButtons.txt?raw").then(de),
        },
      ],
    }),
  },
  {
    title: "Images",
    path: "images",
    component: lazyExamplePage({
      title: "Images",
      sections: [
        {
          component: () => import("./images/FixedRatioImages").then(de),
          code: () => import("./images/FixedRatioImages?raw").then(de),
          description: () =>
            import("./images/FixedRatioImages.txt?raw").then(de),
        },
      ],
    }),
  },
  {
    title: "Inputs",
    path: "inputs",
    component: lazyExamplePage({
      title: "Inputs",
      sections: [
        {
          component: () => import("./inputs/OutlinedInputs").then(de),
          code: () => import("./inputs/OutlinedInputs?raw").then(de),
          description: () => import("./inputs/OutlinedInputs.txt?raw").then(de),
        },
        {
          component: () => import("./inputs/UnderlinedInputs").then(de),
          code: () => import("./inputs/UnderlinedInputs?raw").then(de),
          description: () =>
            import("./inputs/UnderlinedInputs.txt?raw").then(de),
        },
      ],
    }),
  },
  {
    title: "Layouts",
    path: "layouts",
    component: lazyExamplePage({
      title: "Layouts",
      sections: [
        {
          component: () => import("./layouts/AbsoluteLayouts").then(de),
          code: () => import("./layouts/AbsoluteLayouts?raw").then(de),
          description: () =>
            import("./layouts/AbsoluteLayouts.txt?raw").then(de),
        },
        {
          component: () => import("./layouts/Container").then(de),
          code: () => import("./layouts/Container?raw").then(de),
          description: () => import("./layouts/Container.md?raw").then(de),
        },
        {
          component: () => import("./layouts/Dividers").then(de),
          code: () => import("./layouts/Dividers?raw").then(de),
          description: () => import("./layouts/Dividers.md?raw").then(de),
        },
      ],
    }),
  },
  {
    title: "Typography",
    path: "typography",
    component: lazyExamplePage({
      title: "Typography",
      sections: [
        {
          component: () => import("./typography/BasicCompositions").then(de),
          code: () => import("./typography/BasicCompositions?raw").then(de),
          description: () =>
            import("./typography/BasicCompositions.txt?raw").then(de),
        },
      ],
    }),
  },
];

export default routes;
