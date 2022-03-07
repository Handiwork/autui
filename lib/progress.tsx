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
  const lStyle: CSSProperties = { position: "relative", ...style };
  return (
    <Wrapper style={lStyle} className={className}>
      <Buffered style={{ position: "absolute", width: `${lBuffered}%` }} />
      <Expired style={{ position: "absolute", width: `${lProgress}%` }} />
      <InnerSlider
        style={{ position: "absolute", width: `100%` }}
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
  height: 4px;
  left: 0;
  border-radius: 2px;
  transition: transform 0.23s ease-in;
  transform: translate3d(0, 0, 0);
  /* &:hover{
    transform: scale(1,1.5);
  } */
`;

const InnerSlider = styled.input.attrs(() => ({ type: "range" }))`
  ${progressBase}
  margin: 0;
  padding: 0;
  background: transparent;
  -webkit-appearance: none;

  @mixin thumb {
    width: 6px;
    height: 6px;
    border-radius: 3px;
    background: red;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 6px;
    height: 6px;
    /* position: relative; */
  }

  ::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    color: transparent;
    background: transparent;
    cursor: pointer;
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
  background: #0001;
`;

const Wrapper = styled.div`
  ${progressBase}
`;
