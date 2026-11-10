import { ReactNode } from "react";
import { OverlayContainer } from "./styledOverlay";

type OverlayAnimation = {
  enter: string;
  exit: string;
};

type OverlayProps = {
  children: ReactNode;
  visible: boolean;
  animation?: OverlayAnimation;
};

const DEFAULT_OVERLAY_ANIMATION: OverlayAnimation = {
  enter: "translate-y: 0px;",
  exit: "translate-y: -100%;",
};

export function Overlay({ children, visible, animation }: OverlayProps) {
  const resolvedAnimation: OverlayAnimation =
    animation ?? DEFAULT_OVERLAY_ANIMATION;

  return (
    <OverlayContainer
      style={
        visible
          ? { transform: resolvedAnimation.enter }
          : { transform: resolvedAnimation.exit }
      }
    >
      {children}
    </OverlayContainer>
  );
}
