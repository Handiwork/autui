import { createTheme } from "./theme";

test("hello", () => {
  const newTheme = createTheme();
  expect(newTheme.colors.primary).not.toBeNull();
});
