import {
  CSSProperties,
  useDebugValue,
  useEffect,
  useMemo,
  useState,
} from "react";

export interface TransitionOptions {
  delay?: number;
  duration?: number;
}

export function useTransitionStyle<T extends CSSProperties>(
  target: boolean,
  trueStyle: T,
  falseStyle: T,
  options?: TransitionOptions
) {
  const [last, setLast] = useState(target);
  const [token, setToken] = useState<any>(null);
  const selected = select(target, trueStyle, falseStyle);
  const keys = Object.keys(selected);
  const { duration, delay } = {
    delay: 0,
    duration: 0.23,
    ...(options ?? {}),
  };
  const transition = useMemo(() => {
    return keys.map((it) => `${it} ${delay}s ${duration}s`).join(", ");
  }, keys);
  const [computed, setComputed] = useState(selected);
  useEffect(() => {
    if (last !== target) {
      setLast(target);
      if (token) clearTimeout(token);
      setToken(
        setTimeout(() => {
          clearTimeout(token);
          setToken(null);
        }, duration * 1000)
      );
    }
  }, [last, target, token]);
  const ret = token == null ? selected : { ...selected, transition };
  useDebugValue(ret);
  return ret;
}

function select<T>(value: boolean, trueV: T, falseV: T) {
  if (value) return trueV;
  return falseV;
}
