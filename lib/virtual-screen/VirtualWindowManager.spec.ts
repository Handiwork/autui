import VirtualWindowManger from "./VirtualWindowManager";

let manager: VirtualWindowManger;

beforeEach(() => {
  manager = new VirtualWindowManger();
});

test("Default contructor should work", () => {
  expect(manager).not.toBeNull();
});

test("subscribe function should return an unsubscribe function", () => {
  const mockCallback = jest.fn();
  const unsubscribe = manager.subscribe(mockCallback);
  const { id } = manager.create(undefined);
  expect(mockCallback).toBeCalled();
  expect(unsubscribe).toBeInstanceOf(Function);
  unsubscribe();
  manager.close(id);
  expect(mockCallback).toBeCalledTimes(1);
});

test("create window should return id and promise", async () => {
  const r = manager.create(undefined);
  expect(typeof r.id).toBe("string");
  manager.close(r.id);
  await expect(r.result).resolves.toBeUndefined();
});

describe("query state", () => {
  test("query with id of existing window should return state", () => {
    const w = manager.create(undefined);
    const state = manager.query(w.id);
    expect(state).toBeTruthy();
    manager.close(w.id);
  });

  test("query with id of nonexisting window should return undefined", () => {
    const state = manager.query("-1");
    expect(state).toBeUndefined();
  });
});

describe("conditions of close", () => {
  test("close with data should resolve the promise", async () => {
    const { id, result } = manager.create(undefined);
    manager.close(id, "something");
    await expect(result).resolves.toBe("something");
  });

  test("close with err should reject the promise", async () => {
    const { id, result } = manager.create(undefined);
    manager.close(id, undefined, "some reason");
    await expect(result).rejects.toBe("some reason");
  });
});

test("bad listener should not break the manager", () => {
  manager.subscribe(() => {
    throw new Error("error");
  });
  let result: string;
  try {
    const { id } = manager.create(undefined);
    manager.close(id);
    result = "ok";
  } catch (e) {
    result = "failed";
  }
  expect(result).toBe("ok");
});

test("delta X and delta Y should be counted accumulately", () => {
  const notified: number[][] = [];
  const delta: number[][] = [];
  manager.screenRef = {
    current: { offsetHeight: 10000, offsetWidth: 10000 } as any,
  };
  const { id } = manager.create(undefined);
  const unsubscribe = manager.subscribe(() => {
    const { x0, y0, x1, y1 } = manager.query(id) ?? {
      x0: 0,
      y0: 0,
      x1: 0,
      y1: 0,
    };
    notified.push([x0, y0, x1, y1]);
  });
  for (let i = 0; i < 10; i += 1) {
    const deltaX = Math.floor(Math.random() * 100);
    const deltaY = Math.floor(Math.random() * 100);
    manager.move(id, deltaX, deltaY);
    delta.push([deltaX, deltaY]);
  }
  manager.close(id);
  unsubscribe();
  for (let i = 1; i < 10; i += 1) {
    for (let j = 0; j < 4; j += 1) {
      expect(notified[i][j] - notified[i - 1][j]).toBe(delta[i][j % 2]);
    }
  }
});

test("trying to update non-existing window should be treated as no-op", () => {
  const callback = jest.fn();
  const unsubscribe = manager.subscribe(callback);
  manager.update("12", () => {
    throw new Error("this should not be called");
  });
  unsubscribe();
  expect(callback).not.toBeCalled();
});

test("focus function should update z value correctly", () => {
  const WINDOW_COUNT = 10;
  for (let i = 0; i < WINDOW_COUNT; i += 1) {
    manager.create(undefined);
  }
  const origin = manager.getSnapshot().map((it) => it.id);
  // avoid to focus top window for reason of code coverage.
  const target = Math.floor(Math.random() * (WINDOW_COUNT - 1));
  const deleted = origin.splice(target);
  origin.push(...deleted);
  const targetId = manager.getSnapshot()[target].id;
  manager.focus(targetId);
  const newState = manager
    .getSnapshot()
    .sort((it) => it.z)
    .map((it) => it.id);
  expect(newState).toEqual(origin);
});

test("trying to focus a non-existing window should be treated as no-op", () => {
  const callback = jest.fn();
  const unsubscribe = manager.subscribe(callback);
  manager.focus("12");
  unsubscribe();
  expect(callback).not.toBeCalled();
});
