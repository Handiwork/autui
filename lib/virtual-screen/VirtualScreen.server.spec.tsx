/**
 * @jest-environment node
 */

import { renderToString } from "react-dom/server";
import VirtualScreen, { VirtualScreenOutlet } from "./VirtualScreen";

test(`${VirtualScreenOutlet.name} should not throw when using in server side`, () => {
  function serversideRender() {
    renderToString(
      <VirtualScreen>
        <VirtualScreenOutlet />
      </VirtualScreen>
    );
  }
  expect(serversideRender).not.toThrow();
});
