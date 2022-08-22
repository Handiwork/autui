import { useMemo, useState } from "react";
import styled, { css } from "styled-components";

const sliderThumbStyle = css`
  -webkit-appearance: none;
  width: 1px;
  height: ${(p) => p.theme.spacing.containerPadding};
  background: ${(p) => p.theme.colors.primary};
  border: none;
  border-radius: 0;
  cursor: pointer;
  box-shadow: -401px 0 0 400px ${(p) => p.theme.colors.primary};
`;

const colorSwatchStyle = css`
  border: none;
  border-radius: ${(p) => p.theme.borderRadius};
`;

const inputBaseStyle = css`
  outline: none;
  margin: ${(p) => p.theme.spacing.containerMargin};
  padding: ${(p) => p.theme.spacing.containerPadding};
  background-color: transparent;

  &[type="range"] {
    -webkit-appearance: none;
    padding: 0;
    height: ${(p) => p.theme.spacing.containerPadding};
    outline: none;
    overflow: hidden;
    &::-webkit-slider-thumb {
      ${sliderThumbStyle}
    }
    &::-moz-range-thumb {
      ${sliderThumbStyle}
    }
  }

  &[type="color"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    padding: 0;
    height: 0.8rem;
    width: 4rem;
    border: none;
    &::-moz-color-swatch {
      ${colorSwatchStyle}
    }
    &::-webkit-color-swatch {
      ${colorSwatchStyle}
    }
    &::-webkit-color-swatch-wrapper {
      padding: 0;
    }
  }
`;

export const OutlinedInput = styled.input`
  border: ${(p) => p.theme.colors.lightPrimary} 1px solid;
  &:focus {
    border: ${(p) => p.theme.colors.primary} 1px solid;
  }
  border-radius: ${(p) => p.theme.borderRadius};
  ${inputBaseStyle}
`;

export const UnderlinedInput = styled.input`
  border: none;
  border-bottom: ${(p) => p.theme.colors.lightPrimary} 1px solid;
  &:focus {
    border-bottom: ${(p) => p.theme.colors.primary} 1px solid;
  }
  border-radius: 0;
  ${inputBaseStyle}
`;

interface DataBinder<T> {
  value: T;
  onInput: React.FormEventHandler<HTMLInputElement> | undefined;
}

type DataBinders<T> = { [k in keyof T]: DataBinder<T[k]> };

export function useForm<T>(init: T): [T, DataBinders<T>] {
  const [state, setState] = useState(init);
  const binders: DataBinders<T> = useMemo(() => {
    return new Proxy<DataBinders<T>>({} as any, {
      get(_, p) {
        return {
          value: (state as any)[p],
          onChange: (e: any) =>
            setState((s) => ({ ...s, [p]: e.target.value })),
        };
      },
    });
  }, [state, setState]);
  return [state, binders];
}

const textFieldBase = css`
  padding: 8px;
  border-radius: 4px;
  /* border: solid 1px ${({ theme }) => theme.colors.primary}; */
  border: none;
  box-sizing: border-box;
  background: transparent;
`;

export const TextField = styled.input.attrs(() => ({ type: "text" }))`
  ${textFieldBase}
`;

export const PasswordField = styled.input.attrs(() => ({ type: "password" }))`
  ${textFieldBase}
`;

export const PhoneField = styled.input.attrs(() => ({ type: "tel" }))`
  ${textFieldBase}
`;
