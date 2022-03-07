import React, { HTMLAttributes, CSSProperties } from "react";
import styled, { css } from "styled-components";

const scrollableListBase = css`
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 6px;
    height: 6px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    -webkit-appearance: none;
    border-radius: 4px;
    background-color: ${(p) => p.theme.colors.lightPrimary};
  }

  &::-webkit-scrollbar-track {
    -webkit-appearance: none;
    background-color: ${(p) => p.theme.colors.hoverLayer};
    border-radius: 4px;
  }
`;

export const HoverScrollableArea = styled.div`
  ${scrollableListBase}
  overflow: hidden;
  &:hover {
    overflow: auto;
  }
`;

export const PureHoverScrollableArea = styled.div`
  overflow: hidden;
  &:hover {
    overflow: auto;
  }
`;

export const ScrollableArea = styled.div`
  ${scrollableListBase}
  overflow: auto;
`;

export const DragableArea = styled.div`
  -webkit-app-region: drag;

  & button,
  input,
  a {
    -webkit-app-region: no-drag;
  }
`;

export function PatchStyleArea(
  props: HTMLAttributes<HTMLDivElement> & { patchStyle?: CSSProperties | false }
) {
  const { children, patchStyle, style, ...others } = props;

  return (
    <div style={{ ...style, ...patchStyle }} {...others}>
      {children}
    </div>
  );
}

export const HoverOpacityArea = styled.div`
  transition: all 1.2s ease-in;
  background: white;
  opacity: 0;
  &:hover {
    /* background: rgba(255,255,255,0.9); */
    transition: all 0.4s ease-out;
    opacity: 0.9;
  }
`;

export const Marquee = styled.div`
  white-space: nowrap;
  overflow: hidden;
  box-sizing: border-box;

  & > * {
    display: inline-block;
    padding-left: 100%;
    animation: marquee 15s linear infinite;
  }

  @keyframes marquee {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-100%, 0);
    }
  }
`;
