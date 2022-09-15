import { createContext, useContext, useMemo } from "react";
import { useWindowManager } from "./VirtualScreen";
import VirtualWindowManger, { WindowState } from "./VirtualWindowManager";

export const WindowContext = createContext<WindowContextValue | undefined>(
  undefined
);

type Bind1<F> = F extends (a0: infer A0, ...args: infer A) => infer R
  ? (...args: A) => R
  : never;

type BindPicked<O, K extends keyof O> = {
  [x in K]: Bind1<O[x]>;
};

type WindowController = BindPicked<
  VirtualWindowManger,
  "move" | "locate" | "close" | "resize" | "focus" | "update"
>;

export type WindowContextValue = WindowState;

export function useWindow() {
  const context = useContext(WindowContext);
  if (!context)
    throw new Error(
      `${useWindow.name} must be called within ${WindowContext.Provider.name}`
    );
  return context;
}

export function useWindowController(): WindowController {
  const manager = useWindowManager();
  const { id } = useWindow();
  return useMemo(
    () => ({
      move: manager.move.bind(manager, id),
      locate: manager.locate.bind(manager, id),
      resize: manager.resize.bind(manager, id),
      focus: manager.focus.bind(manager, id),
      close: manager.close.bind(manager, id),
      update: manager.update.bind(manager, id),
    }),
    [manager, id]
  );
}
