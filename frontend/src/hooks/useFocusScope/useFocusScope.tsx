import { type RefObject, useLayoutEffect, useRef } from "react";
import { activateFocusTrap } from "./utils/activateFocusTrap";

type UseFocusScopeProps = {
  enabled: boolean;
  scopeRef: RefObject<HTMLElement | null>;
};

export function useFocusScope({ enabled, scopeRef }: UseFocusScopeProps) {
  const previousFocusedElementRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    if (!enabled || !scopeRef.current) {
      return;
    }

    rememberFocus();
    focusScope();

    const deactivateFocusTrap = activateFocusTrap(scopeRef.current);

    return () => {
      deactivateFocusTrap();
      restoreFocus();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled]);

  function rememberFocus() {
    if (!(document.activeElement instanceof HTMLElement)) {
      return;
    }

    previousFocusedElementRef.current = document.activeElement;
  }

  function focusScope() {
    scopeRef.current?.focus();
  }

  function restoreFocus() {
    previousFocusedElementRef.current?.focus();
  }
}
