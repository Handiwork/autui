import { HTMLAttributes } from "react";

interface FixedRatioImageProps {
  src: string;
  width: string | number;
  ratio: number;
  borderRadius?: number | string;
  borderColor?: string;
  borderWidth?: number | string;
  type?: "default" | "circle";
}

export function FixedRatioImage(
  props: HTMLAttributes<HTMLDivElement> & FixedRatioImageProps
) {
  const {
    src,
    width,
    ratio,
    borderRadius,
    borderColor,
    borderWidth,
    type = "default",
    style,
    ...others
  } = props;
  return (
    <div style={{ width, ...style }} {...others}>
      <div
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: 0,
          paddingTop: `${ratio * 100}%`,
          borderRadius,
          clipPath: type === "default" ? "" : "circle(50%)",
        }}
      />
    </div>
  );
}
