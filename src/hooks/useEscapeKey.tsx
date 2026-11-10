import { useEffect } from "react";

type UseEscapeKeyOptions = {
  enabled?: boolean;
  onEscape: () => void;
};

export function useEscapeKey({
  enabled = true,
  onEscape,
}: UseEscapeKeyOptions) {
  useEffect(() => {
    if (!enabled) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") {
        return;
      }

      onEscape();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [enabled, onEscape]);
}
