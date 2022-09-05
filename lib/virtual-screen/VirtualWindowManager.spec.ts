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
  manager.create(undefined);
  expect(mockCallback).toBeCalled();
  expect(unsubscribe).toBeInstanceOf(Function);
  unsubscribe();
  manager.close(manager.getSnapshot()[0].id);
  expect(mockCallback).toBeCalledTimes(1);
});

describe("promise functions", () => {
  test("close with data should resolve the promise", async () => {
    const p = manager.create(undefined);
    manager.close(manager.getSnapshot()[0].id, "something");
    await expect(p).resolves.toBe("something");
  });

  test("close with err should reject the promise", async () => {
    const p = manager.create(undefined);
    manager.close(manager.getSnapshot()[0].id, undefined, "some reason");
    await expect(p).rejects.toBe("some reason");
  });
});

test("bad listener should not break the manager", () => {
  manager.subscribe(() => {
    throw new Error("error");
  });
  let result: string;
  try {
    manager.create(undefined);
    manager.close(manager.getSnapshot()[0].id);
    result = "ok";
  } catch (e) {
    result = "failed";
  }
  expect(result).toBe("ok");
});

test("delta X and delta Y should be counted accumulately", () => {
  const notified: number[][] = [];
  const origin: number[][] = [];
  const unsubscribe = manager.subscribe(() => {
    const state = manager.getSnapshot()[0];
    notified.push([state.x, state.y]);
  });
  manager.create(undefined);
  const id = manager.getSnapshot()[0].id;
  for (let i = 0; i < 10; i += 1) {
    const deltaX = Math.floor(Math.random() * 100);
    const deltaY = Math.floor(Math.random() * 100);
    manager.move(id, deltaX, deltaY);
    origin.push([deltaX, deltaY]);
  }
  manager.close(id);
  unsubscribe();
  notified.shift(); // first call with intial value '0'
  let sumX = 0;
  let sumY = 0;
  for (let i = 0; i < 10; i += 1) {
    sumX += origin[i][0];
    sumY += origin[i][1];
    expect(notified[i][0]).toBe(sumX);
    expect(notified[i][1]).toBe(sumY);
  }
});

test("width and height should be updated independently", () => {
  const notified: number[][] = [];
  const origin: number[][] = [];
  const unsubscribe = manager.subscribe(() => {
    const state = manager.getSnapshot()[0];
    notified.push([state.width, state.height]);
  });
  manager.create(undefined);
  const id = manager.getSnapshot()[0].id;
  for (let i = 0; i < 10; i += 1) {
    const width = Math.floor(Math.random() * 100);
    const height = Math.floor(Math.random() * 100);
    manager.resize(id, width, height);
    origin.push([width, height]);
  }
  manager.close(id);
  unsubscribe();
  notified.shift(); // first call with intial value '0'
  for (let i = 0; i < 10; i += 1) {
    expect(notified[i]).toEqual(origin[i]);
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
