import { type ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type PortalProps = {
  children: ReactNode;
};

export function Portal({ children }: PortalProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  if (containerRef.current === null) {
    containerRef.current = document.createElement("div");
    containerRef.current.id = `portal-${crypto.randomUUID()}`;
  }

  useEffect(() => {
    const container = containerRef.current;

    if (container === null) {
      return;
    }

    document.body.appendChild(container);

    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return createPortal(children, containerRef.current);
}
