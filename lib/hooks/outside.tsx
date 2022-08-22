import { useCallback, useEffect, useRef } from "react";

export function useOutsideClickHandler(
  onClickOutside: () => void,
  dependencies: any[]
) {
  const ref = useRef<any>(null);
  const cb = useCallback(onClickOutside, dependencies);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as any)) {
        cb();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [cb]);
  return ref;
}
