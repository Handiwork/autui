import { generateId } from "./utils";

test("generated ids should be unique", () => {
  let pre = generateId();
  for (let i = 0; i < 1000; i += 1) {
    const cur = generateId();
    expect(cur).not.toEqual(pre);
    pre = cur;
  }
});
