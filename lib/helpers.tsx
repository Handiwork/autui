import { CSSProperties } from "react";

export class StyleBuilder {
  private style: CSSProperties = {};

  constructor(init: CSSProperties = {}) {
    Object.assign(this.style, init);
  }

  absoluteLayout(
    constraints: Pick<CSSProperties, "top" | "right" | "bottom" | "left">
  ) {
    Object.assign(this.style, {
      position: "absolute",
      top: constraints.top ?? 0,
      right: constraints.right ?? 0,
      bottom: constraints.bottom ?? 0,
      left: constraints.left ?? 0,
    });
    return this;
  }

  append(appendices: CSSProperties) {
    Object.assign(this.style, appendices);
    return this;
  }

  build() {
    return this.style;
  }
}

export function sb(init?: CSSProperties) {
  return new StyleBuilder(init);
}
