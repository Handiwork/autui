import {
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

type EffectCallback = (e: { movementX: number; movementY: number }) => void;

function useUserSelectSuppression(suppressed: boolean) {
  const originUserSelect = useRef("");
  useEffect(() => {
    if (suppressed) {
      originUserSelect.current = document.body.style.userSelect;
      document.body.style.userSelect = "none";
    } else {
      document.body.style.userSelect = originUserSelect.current;
    }
  }, [suppressed]);
}

export function useDraggingEffect(effect: EffectCallback, deps?: any[]) {
  const [dragging, setDragging] = useState(false);
  const lastPos = useRef({ x: 0, y: 0 });
  useUserSelectSuppression(dragging);
  const trigger = useCallback<MouseEventHandler<HTMLElement>>((e) => {
    setDragging(true);
    lastPos.current = { x: e.clientX, y: e.clientY };
  }, []);
  const handle = useCallback(effect, deps ?? []);
  useEffect(() => {
    const stopDragging = () => {
      setDragging(false);
    };
    document.addEventListener("mouseup", stopDragging);
    return () => {
      document.removeEventListener("mouseup", stopDragging);
    };
  });
  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (dragging) {
        const { x, y } = lastPos.current;
        handle({
          movementX: e.clientX - x,
          movementY: e.clientY - y,
        });
        lastPos.current = { x: e.clientX, y: e.clientY };
      }
    };
    document.addEventListener("mousemove", move);
    return () => document.removeEventListener("mousemove", move);
  }, [dragging]);
  return trigger;
}
