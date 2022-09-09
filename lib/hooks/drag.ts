import {
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

type Handler = (e: { movementX: number; movementY: number }) => void;

export function useDraggingEffect(callback: Handler, deps?: any[]) {
  const [dragging, setDragging] = useState(false);
  const lastPos = useRef({ x: 0, y: 0 });
  const originUserSelect = useRef("");
  const trigger = useCallback<MouseEventHandler<HTMLElement>>((e) => {
    setDragging(true);
    lastPos.current = { x: e.clientX, y: e.clientY };
    originUserSelect.current = document.body.style.userSelect;
    document.body.style.userSelect = "none";
  }, []);
  const handle = useCallback(callback, deps ?? []);
  useEffect(() => {
    const stopDragging = () => {
      setDragging(false);
      document.body.style.userSelect = originUserSelect.current;
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
