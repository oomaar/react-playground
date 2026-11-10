import { ReactNode, useRef } from "react";
import { ModalHeader } from "./ModalHeader/ModalHeader";
import { ModalTitle } from "./ModalTitle/ModalTitle";
import { ModalBody } from "./ModalBody/ModalBody";
import { ModalFooter } from "./ModalFooter/ModalFooter";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useEscapeKey } from "../../hooks/useEscapeKey";
import { useTransitionPresence } from "../../hooks/useTransitionPresence";
import { useFocusScope } from "../../hooks/useFocusScope/useFocusScope";
import { useScrollLock } from "../../hooks/useScrollLock/useScrollLock";
import { Overlay } from "../Overlay/Overlay";
import { Portal } from "../Portal";
import { ModalContainer } from "./styledModal";

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: VoidFunction;
  width?: string;
  height?: string;
};

type ModalComponent = React.FC<ModalProps> & {
  Header: typeof ModalHeader;
  Title: typeof ModalTitle;
  Body: typeof ModalBody;
  Footer: typeof ModalFooter;
};

const Modal: ModalComponent = ({
  children,
  isOpen,
  onClose,
  height,
  width,
}: ModalProps) => {
  const modalScopeRef = useRef<HTMLDivElement | null>(null);

  const resolvedHeight = height ? height : "400px";
  const resolvedWidth = width ? width : "400px";

  const { mounted, visible } = useTransitionPresence({
    isOpen,
  });

  useOutsideClick({
    ref: modalScopeRef,
    enabled: mounted,
    onOutsideClick: onClose,
  });

  useEscapeKey({
    enabled: mounted,
    onEscape: onClose,
  });

  useFocusScope({
    enabled: mounted,
    scopeRef: modalScopeRef,
  });

  useScrollLock({
    enabled: mounted,
    scopeRef: modalScopeRef,
  });

  if (!mounted) return <></>;

  return (
    <Portal>
      <Overlay visible={visible}>
        <ModalContainer
          $width={resolvedWidth}
          $height={resolvedHeight}
          ref={modalScopeRef}
          tabIndex={-1}
        >
          {children}
        </ModalContainer>
      </Overlay>
    </Portal>
  );
};

Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export { Modal };
