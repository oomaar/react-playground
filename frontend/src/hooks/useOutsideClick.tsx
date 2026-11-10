import { RefObject, useEffect } from "react";

type UseOutsideClickOptions = {
  ref: RefObject<HTMLElement | null>;
  enabled?: boolean;
  onOutsideClick: () => void;
};

export function useOutsideClick({
  ref,
  enabled = true,
  onOutsideClick,
}: UseOutsideClickOptions) {
  useEffect(() => {
    if (!enabled) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      const container = ref.current;

      if (container === null) {
        return;
      }

      if (!(event.target instanceof Node)) {
        return;
      }

      if (container.contains(event.target)) {
        return;
      }

      onOutsideClick();
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [enabled, onOutsideClick, ref]);
}
