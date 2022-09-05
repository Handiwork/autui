/* eslint-disable no-await-in-loop */
import { cleanup, render, renderHook, waitFor } from "@testing-library/react";
import VirtualScreen, {
  useScreen,
  useWindowManager,
  VirtualScreenOutlet,
} from "./VirtualScreen";
import VirtualWindowManger from "./VirtualWindowManager";

test("hook without provider should throw an error", () => {
  expect(() => {
    renderHook(() => useScreen());
  }).toThrow("must be called within");
});

test(`${VirtualScreen.name} should provide ScreenContext`, () => {
  const { result } = renderHook(() => useWindowManager(), {
    wrapper: VirtualScreen,
  });
  expect(result.current).not.toBeUndefined();
});

test(`${VirtualScreenOutlet.name} should render state correctly`, async () => {
  const managerHolder: { current?: VirtualWindowManger } = {
    current: undefined,
  };
  function Receiver() {
    managerHolder.current = useWindowManager();
    return null;
  }
  const { findByTestId } = render(
    <VirtualScreen>
      <Receiver />
      <VirtualScreenOutlet />
    </VirtualScreen>
  );
  expect(managerHolder.current).not.toBeUndefined();
  for (let i = 0; i < 10; i += 1) {
    const id = `id${Math.floor(Math.random() * 1000)}`;
    managerHolder.current?.create(<div id={id} data-testid={id} />);
    waitFor(async () => {
      await findByTestId(id);
    });
    expect(await findByTestId(id)).not.toBeFalsy();
  }
  cleanup();
});
