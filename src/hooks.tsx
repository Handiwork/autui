import { useMatch, useResolvedPath } from "react-router-dom";

export function useRelativePrefixMatch(path: string) {
  const resolved = useResolvedPath(path);
  return useMatch({ path: resolved.pathname, end: false });
}
