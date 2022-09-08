import { ReactNode } from "react";
import { coerceBetween, generateId } from "./utils";

/**
 * A Manager for virtual windows.
 */
export default class VirtualWindowManger {
  /**
   * Registered listeners.
   */
  #listeners: VoidFunction[] = [];

  /**
   * Pending promises' handlers.
   */
  #promiseHandlers = new Map<string, PromiseHandler>();

  /**
   * Windows' states.
   */
  #windowStates = new Map<string, WindowState>();

  /**
   * Cached snapshot, to maintain value consistency.
   */
  #snapshot: WindowState[] = [];

  screenRef: { current: HTMLElement | null } = { current: null };

  get screenSize() {
    const ele = this.screenRef.current;
    return { width: ele?.offsetWidth ?? 0, height: ele?.offsetHeight ?? 0 };
  }

  /**
   * Return windows' states.
   * @returns Windows' states.
   */
  getSnapshot() {
    return this.#snapshot;
  }

  /**
   * Create a new window and return
   * @param options Initial window options.
   * @param args Passed-in argumemts.
   * @returns Value returned by {@link VirtualWindowManger.close}.
   * @throws  Error returned by {@link VirtualWindowManger.close}.
   */
  create<A extends any[], R>(
    content: ReactNode,
    options?: WindowInit,
    ...args: A
  ): CreateResult<R> {
    const id = generateId();

    const { width, height, ...rest } = {
      ...WINDOW_STATE_DEFAULTS,
      ...(options ?? {}),
    };
    const x = options?.x ?? (this.screenSize.width - width) / 2;
    const y = options?.y ?? (this.screenSize.height - height) / 2;
    this.#windowStates.set(id, {
      id,
      content,
      ...rest,
      ...this.#computeContrainedLocation(x, y, x + width, y + height),
      z: this.#windowStates.size + 1,
    });
    const result = new Promise<R>((resolve, reject) => {
      this.#promiseHandlers.set(id, { args, resolve, reject });
    });
    this.notifyListeners();
    return { id, result };
  }

  /**
   * Get target window state.
   * @param id Window ID
   * @returns WindowState
   */
  query(id: string) {
    return this.#windowStates.get(id);
  }

  /**
   * Update target window state.
   * @param id Window ID.
   * @param block Updater. Create new state from the old one.
   */
  update(id: string, block: (o: WindowState) => WindowState) {
    const state = this.#windowStates.get(id);
    if (!state) return;
    this.#windowStates.set(id, block(state));
    this.notifyListeners();
  }

  /**
   * Close window and resolve/reject pending promise.
   * @param id Window ID.
   * @param data Data used to resolve.
   * @param error Error used to reject.
   */
  close(id: string, data?: any, error?: any) {
    this.#windowStates.delete(id);
    const handler = this.#promiseHandlers.get(id);
    if (handler) {
      this.#promiseHandlers.delete(id);
      if (error) handler.reject(error);
      else handler.resolve(data);
    }
    this.notifyListeners();
  }

  private notifyListeners() {
    this.#snapshot = Array.from(this.#windowStates.values());
    this.#listeners.forEach((l) => {
      try {
        l();
      } catch (e) {
        console.error(e);
      }
    });
  }

  /**
   * Subscribe to this manager, the listener will be called when states update
   * @param listener Listener.
   * @returns Cancel function.
   */
  subscribe(listener: VoidFunction) {
    this.#listeners.push(listener);
    return () => {
      this.#listeners = this.#listeners.filter((l) => l !== listener);
    };
  }

  #computeContrainedLocation(x0: number, y0: number, x1: number, y1: number) {
    const { width, height } = this.screenSize;
    return {
      x0: Math.max(0, x0),
      y0: Math.max(0, y0),
      x1: Math.min(width, x1),
      y1: Math.min(height, y1),
    };
  }

  /**
   * Update target window position.
   * @param id Target window id.
   * @param x0 Target X.
   * @param y0 Target Y.
   */
  locate(id: string, x0: number, y0: number, x1: number, y1: number) {
    this.update(id, (s) => ({
      ...s,
      ...this.#computeContrainedLocation(x0, y0, x1, y1),
    }));
  }

  /**
   * Move window.
   * @param id Window ID.
   * @param deltaX Differential X.
   * @param deltaY Differential Y.
   */
  move(id: string, deltaX = 0, deltaY = 0) {
    this.update(id, (s) => {
      const { x0, y0, x1, y1 } = s;
      const { width, height } = this.screenSize;
      const consumedX = coerceBetween(deltaX, -x0, width - x1);
      const consumedY = coerceBetween(deltaY, -y0, height - y1);
      return {
        ...s,
        x0: s.x0 + consumedX,
        y0: s.y0 + consumedY,
        x1: s.x1 + consumedX,
        y1: s.y1 + consumedY,
      };
    });
  }

  /**
   * Resize window to target size.
   * @param id Window ID.
   * @param width Target width.
   * @param height Target height.
   */
  resize(
    id: string,
    delta: { dx0: number; dy0: number; dx1: number; dy1: number }
  ) {
    const { dx0, dy0, dx1, dy1 } = delta;
    this.update(id, (s) => ({
      ...s,
      ...this.#computeContrainedLocation(
        s.x0 + dx0,
        s.y0 + dy0,
        s.x1 + dx1,
        s.y1 + dy1
      ),
    }));
  }

  /**
   * Focus target window, move the window to top.
   * @param id Window ID.
   */
  focus(id: string) {
    const target = this.#windowStates.get(id);
    if (!target) return;
    const targetZ = target.z;
    this.#windowStates.forEach((v, k) => {
      if (k === id) {
        this.#windowStates.set(k, { ...v, z: this.#windowStates.size });
      } else if (v.z > targetZ) {
        this.#windowStates.set(k, { ...v, z: v.z - 1 });
      }
    });
    this.notifyListeners();
  }
}

interface CreateResult<T> {
  id: string;
  result: Promise<T>;
}

interface PromiseHandler {
  args: any[];
  resolve: Function1<any, any>;
  reject: Function1<any, any>;
}

type WindowInit = {
  mode: "NORMAL" | "MINIMIZED" | "MAXIMIZED";
  /**
   * Whether in fullscreen mode.
   */
  fullscreen: boolean;
  /**
   * X offset to left top.
   */
  x?: number;
  /**
   * Y offset to left top.
   */
  y?: number;
  /**
   * Widnow width, in pixel.
   */
  width: number;
  /**
   * Window height, in pixcel.
   */
  height: number;
};

type Function1<A, R> = (a: A) => R;

/**
 * Window's state object.
 */
export interface WindowState {
  id: string;

  mode: "NORMAL" | "MINIMIZED" | "MAXIMIZED";
  /**
   * Whether in fullscreen mode.
   */
  fullscreen: boolean;
  /**
   * Left X.
   */
  x0: number;
  /**
   * Top Y.
   */
  y0: number;
  /**
   * Right X.
   */
  x1: number;
  /**
   * Bottom Y.
   */
  y1: number;
  /**
   * Z Index, higher the value is, more near the window is to the user, starting from 1.
   */
  z: number;
  /**
   * Window Content.
   */
  content: ReactNode;
}

const WINDOW_STATE_DEFAULTS: WindowInit = {
  mode: "NORMAL",
  fullscreen: false,
  width: 800,
  height: 600,
};
