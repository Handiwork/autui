import { ReactNode } from "react";
import { generateId } from "./utils";

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
  #state = new Map<string, WindowState>();

  /**
   * Cached snapshot, to maintain value consistency.
   */
  #snapshot: WindowState[] = [];

  /**
   * Return windows's states.
   * @returns Windows's states.
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
    this.#state.set(id, {
      ...WINDOW_STATE_DEFAULTS,
      ...(options ?? {}),
      id,
      content,
      z: this.#state.size + 1,
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
    return this.#state.get(id);
  }

  /**
   * Update target window state.
   * @param id Window ID.
   * @param block Updater. Create new state from the old one.
   */
  update(id: string, block: (o: WindowState) => WindowState) {
    const state = this.#state.get(id);
    if (!state) return;
    this.#state.set(id, block(state));
    this.notifyListeners();
  }

  /**
   * Close window and resolve/reject pending promise.
   * @param id Window ID.
   * @param data Data used to resolve.
   * @param error Error used to reject.
   */
  close(id: string, data?: any, error?: any) {
    this.#state.delete(id);
    const handler = this.#promiseHandlers.get(id);
    if (handler) {
      this.#promiseHandlers.delete(id);
      if (error) handler.reject(error);
      else handler.resolve(data);
    }
    this.notifyListeners();
  }

  private notifyListeners() {
    this.#snapshot = Array.from(this.#state.values());
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

  moveTo(id: string, x: number, y: number) {
    this.update(id, (s) => ({
      ...s,
      x,
      y,
    }));
  }

  /**
   * Move window.
   * @param id Window ID.
   * @param deltaX Differential X.
   * @param deltaY Differential Y.
   */
  move(id: string, deltaX: number, deltaY: number) {
    this.update(id, (s) => ({
      ...s,
      x: s.x + deltaX,
      y: s.y + deltaY,
    }));
  }

  /**
   * Resize window to target size.
   * @param id Window ID.
   * @param width Target width.
   * @param height Target height.
   */
  resize(id: string, width: number, height: number) {
    this.update(id, (s) => ({
      ...s,
      width,
      height,
    }));
  }

  /**
   * Focus target window, move the window to top.
   * @param id Window ID.
   */
  focus(id: string) {
    const target = this.#state.get(id);
    if (!target) return;
    const targetZ = target.z;
    this.#state.forEach((v, k) => {
      if (k === id) {
        this.#state.set(k, { ...v, z: this.#state.size });
      } else if (v.z > targetZ) {
        this.#state.set(k, { ...v, z: v.z - 1 });
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

type PartialOptions = "mode" | "fullscreen" | "x" | "y" | "width" | "height";

type WindowInit = Partial<Pick<WindowState, PartialOptions>>;

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
   * X offset to left top.
   */
  x: number;
  /**
   * Y offset to left top.
   */
  y: number;
  /**
   * Z Index, higher the value is, more near the window is to the user, starting from 1.
   */
  z: number;
  /**
   * Widnow width, in pixel.
   */
  width: number;
  /**
   * Window height, in pixcel.
   */
  height: number;
  /**
   * Window Content.
   */
  content: ReactNode;
}

const WINDOW_STATE_DEFAULTS: Omit<WindowState, "id" | "z" | "content"> = {
  mode: "NORMAL",
  fullscreen: false,
  x: 0,
  y: 0,
  width: 800,
  height: 600,
};
