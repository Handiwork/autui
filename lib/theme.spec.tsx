import { renderHook } from "@testing-library/react";
import { ReactNode, useRef } from "react";
import {
  AutuiThemeProvider,
  createTheme,
  useTheme,
  useThemeUpdater,
} from "./theme";

test("created theme should match type", () => {
  const newTheme = createTheme();
  const { borderRadius, colors, spacing, fontSizes } = newTheme;

  expect(typeof borderRadius).toBe("string");

  expect(typeof colors.primary).toBe("string");
  expect(typeof colors.onPrimary).toBe("string");
  expect(typeof colors.secondary).toBe("string");
  expect(typeof colors.onSecondary).toBe("string");
  expect(typeof colors.surface).toBe("string");
  expect(typeof colors.onSurface).toBe("string");
  expect(typeof colors.accent).toBe("string");
  expect(typeof colors.lightPrimary).toBe("string");
  expect(typeof colors.darkPrimary).toBe("string");
  expect(typeof colors.highlight).toBe("string");
  expect(typeof colors.hoverLayer).toBe("string");

  expect(typeof spacing.containerMargin).toBe("string");
  expect(typeof spacing.containerPadding).toBe("string");

  expect(typeof fontSizes.root).toBe("string");
  expect(typeof fontSizes.h1).toBe("string");
  expect(typeof fontSizes.h2).toBe("string");
  expect(typeof fontSizes.h3).toBe("string");
  expect(typeof fontSizes.h4).toBe("string");
  expect(typeof fontSizes.h5).toBe("string");
  expect(typeof fontSizes.h6).toBe("string");
});

test(`call ${useThemeUpdater} withou context should throw`, () => {
  expect(() => {
    renderHook(() => useThemeUpdater());
  }).toThrow("should be called within");
});

function AutuiThemeProviderWrapper(props: { children: ReactNode }) {
  const theme = useRef(createTheme());
  return (
    <AutuiThemeProvider initTheme={theme.current}>
      {props.children}
    </AutuiThemeProvider>
  );
}

test(`${AutuiThemeProvider.name} should provide theme`, () => {
  const { result } = renderHook(() => useTheme(), {
    wrapper: AutuiThemeProviderWrapper,
  });
  expect(result.current).not.toBeFalsy();
});

test(`${AutuiThemeProvider.name} should provide updater`, () => {
  const { result } = renderHook(() => useThemeUpdater(), {
    wrapper: AutuiThemeProviderWrapper,
  });
  expect(result.current).toBeInstanceOf(Function);
});
