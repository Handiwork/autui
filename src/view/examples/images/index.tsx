import { examplePage } from "../ExamplePage";
import FixedRatioImages from "./FixedRatioImages";
import FixedRatioImagesCode from "./FixedRatioImages?raw";
import FixedRatioImagesDes from "./FixedRatioImages.txt?raw";

export default examplePage({
  title: "Image Examples",
  sections: [
    {
      component: FixedRatioImages,
      code: FixedRatioImagesCode,
      description: FixedRatioImagesDes,
    },
  ],
});
