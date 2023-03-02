import {
  createContext,
  ReactNode,
  RefObject,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useSyncExternalStore,
} from "react";
import VirtualWindowManger from "./VirtualWindowManager";
import { WindowContext } from "./window-context";

export type VirtualScreenProps = {
  children: ReactNode;
};

/**
 * This component provides screen context.
 */
export default function VirtualScreen(props: VirtualScreenProps) {
  const { children } = props;
  const manager = useRef(new VirtualWindowManger()).current;
  const screenContext = useMemo(() => ({ manager }), undefined);
  return (
    <ScreenContext.Provider value={screenContext}>
      {children}
    </ScreenContext.Provider>
  );
}

function useVirtualScreenOutlet() {
  const manager = useWindowManager();
  const windows = useSyncExternalStore(
    (l) => manager.subscribe(l),
    () => manager.getSnapshot(),
    () => manager.getSnapshot()
  );
  return windows.map((state) => (
    <WindowContext.Provider key={state.id} value={state}>
      {state.content}
    </WindowContext.Provider>
  ));
}

/**
 * Virtual screen layers outlet. It will render content managed by
 *  {@link VirtualWindowManger}.
 */
export function VirtualScreenOutlet() {
  const contents = useVirtualScreenOutlet();
  return <>{contents}</>;
}

interface ScreenContextValue {
  manager: VirtualWindowManger;
}

const ScreenContext = createContext<ScreenContextValue | undefined>(undefined);

export function useScreen() {
  const context = useContext(ScreenContext);
  if (!context) {
    throw new Error(
      `${useScreen.name} must be called within ScreenContextProvider`
    );
  }
  return context;
}

export function useWindowManager() {
  return useScreen().manager;
}

export function ScreenRefNotifier(props: { nodeRef: RefObject<HTMLElement> }) {
  const manager = useWindowManager();
  const ref = props.nodeRef;
  useEffect(() => {
    manager.screenRef = ref;
  }, [ref]);
  return null;
}
