import { useCallback } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

export function useJump(to: string) {
  const history = useHistory();
  const match = useRouteMatch({ path: to, exact: true });
  return useCallback(() => !match && history.push(to), [to, match]);
}
