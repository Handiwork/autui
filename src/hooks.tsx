import { useCallback } from "react";
import { useMatch, useNavigate } from "react-router-dom";

export function useJump(to: string) {
  const navigate = useNavigate();
  const match = useMatch({ path: to, end: true });
  return useCallback(() => !match && navigate(to), [to, match]);
}
