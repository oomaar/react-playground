import { type RefObject, useLayoutEffect } from "react";
import { activateScrollLock } from "./utils/activateScrollLock";

type UseScrollLockProps = {
  enabled: boolean;
  scopeRef: RefObject<HTMLElement | null>;
};

export function useScrollLock({ enabled, scopeRef }: UseScrollLockProps) {
  useLayoutEffect(() => {
    if (!enabled || !scopeRef.current) {
      return;
    }

    const deactivateScrollLock = activateScrollLock(scopeRef.current);

    return deactivateScrollLock;
  }, [enabled, scopeRef]);
}
