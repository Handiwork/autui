import { CSSProperties } from "react";
import styled, { css } from "styled-components";

interface ProgressBarProps {
  progress: number;
  buffered: number;
  total?: number;
  style?: CSSProperties;
  className?: string;
  onChange?: (value: number) => void;
}

export function ProgressBar(props: ProgressBarProps) {
  const { style, className, progress, buffered, total, onChange } = props;
  const lProgress = total ? Math.min(100, (progress * 100) / total) : 0;
  const lBuffered = total ? Math.min(100, (buffered * 100) / total) : 0;
  const lStyle: CSSProperties = {
    position: "relative",
    minHeight: 4,
    ...style,
  };
  return (
    <Wrapper style={lStyle} className={className}>
      <Buffered style={{ position: "absolute", width: `${lBuffered}%` }} />
      <Expired style={{ position: "absolute", width: `${lProgress}%` }} />
      <InnerSlider
        style={{ position: "absolute", width: `100%`, height: "100%" }}
        min="0"
        max={total}
        step="any"
        value={progress}
        onChange={(e) => onChange && onChange(parseFloat(e.target.value))}
      />
    </Wrapper>
  );
}

const progressBase = css`
  height: 100%;
  left: 0;
  border-radius: 2px;
  transition: width 0.13s ease-out;
`;

const thumbStyle = css`
  appearance: none;
  border: none;
  background-color: transparent;
  width: 6px;
  height: 6px;
  cursor: pointer;
`;

const trackStyle = css`
  appearance: none;
  color: transparent;
  background: transparent;
  cursor: pointer;
`;

const InnerSlider = styled.input.attrs(() => ({ type: "range" }))`
  ${progressBase}
  margin: 0;
  padding: 0;
  background: transparent;
  -webkit-appearance: none;

  &::-webkit-slider-thumb {
    ${thumbStyle}
  }

  &::-moz-range-thumb {
    ${thumbStyle}
  }

  &::-webkit-slider-runnable-track {
    ${trackStyle}
  }

  &::-moz-range-progress {
    ${trackStyle}
  }

  &::-moz-range-track {
    ${trackStyle}
  }
`;

const Expired = styled.div`
  ${progressBase}
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.colors.lightPrimary} 0%,
    ${(props) => props.theme.colors.primary} 70%
  );
  /* background-color: ${(ps) => ps.theme.colors.primary}; */
`;
const Buffered = styled.div`
  ${progressBase}
  background: ${(p) => p.theme.colors.hoverLayer};
`;

const Wrapper = styled.div`
  ${progressBase}
`;
