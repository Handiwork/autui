import { useEffect, useState } from "react";

export function useOneShotData<T>(fetcher: () => Promise<T>, deps: any[] = []) {
  const [state, setState] = useState<T | null>(null);
  useEffect(() => {
    fetcher().then(setState);
  }, deps);
  return state;
}
