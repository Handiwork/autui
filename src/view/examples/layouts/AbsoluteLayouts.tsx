import { AbsoluteLayout, useTheme } from "autui";

export default function AbsoluteLayouts() {
  const {
    colors: { primary, secondary, accent },
  } = useTheme();
  return (
    <div style={{ position: "relative", height: 300 }}>
      <AbsoluteLayout style={{ backgroundColor: secondary }} />
      <AbsoluteLayout
        style={{ backgroundColor: primary }}
        left="50px"
        right="40px"
        bottom="30px"
        top="40px"
      />
      <AbsoluteLayout
        style={{ backgroundColor: accent }}
        left="60px"
        right="calc(100% - 80px)"
      />
    </div>
  );
}
