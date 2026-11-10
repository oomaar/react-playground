import { useEffect, useState } from "react";
import { TRANSITION_DURATION } from "../constants/constants";

type UseTransitionPresenceParams = {
  isOpen: boolean;
};

export function useTransitionPresence({ isOpen }: UseTransitionPresenceParams) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);

      requestAnimationFrame(() => {
        setVisible(true);
      });

      return;
    }

    setVisible(false);

    const timeoutId = window.setTimeout(() => {
      setMounted(false);
    }, TRANSITION_DURATION);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isOpen]);

  return {
    mounted,
    visible,
  };
}
