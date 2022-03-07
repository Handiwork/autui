import styled, { css } from "styled-components";

const rippleEffect = css`
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: linear-gradient(to right, #000 10%, transparent 10.01%);
    background-repeat: no-repeat;
    transform-origin: center left;
    transform: scale(10, 1);
    opacity: 0;
    transition: transform 0.25s, opacity 0.6s;
  }

  &:active::after {
    transform: scale(0, 1);
    opacity: 0.2;
    transition: 0s;
  }
`;

const hoverEffect = css`
  &:hover::before {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    background: black;
    opacity: 0.0625;
  }
`;

const colorHoverEffect = css`
  &:hover {
    color: ${(prop) => prop.theme.colors.highlight};
  }
`;

const buttonBaseCss = css`
  border: none;
  border-radius: ${(props) => props.theme.borderRadius};
  outline: none;
  padding: 8px;
  background: transparent;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
`;

export const FlatButton = styled.button`
  ${buttonBaseCss}
  ${hoverEffect}
  ${rippleEffect}
`;
export const ColorFlatButton = styled(FlatButton)`
  color: ${(props) => props.theme.colors.primary};
`;

export const InversedFlatButton = styled(FlatButton)`
  background: ${({ theme }) => theme.colors.primary};
  color: ${(props) => props.theme.colors.textSecondary};
`;

export const PureButton = styled.button`
  ${buttonBaseCss}
  border-radius: 0;
  ${colorHoverEffect}
`;

export const ColorPureButton = styled(PureButton)`
  color: ${(props) => props.theme.colors.primary};
`;

export const InverseColorPureButton = styled(PureButton)`
  color: ${(props) => props.theme.colors.textSecondary};
`;
