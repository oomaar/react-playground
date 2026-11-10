import { type ReactNode } from "react";
import { ModalFooterContainer } from "./styledModalFooter";

type ModalFooterProps = {
  children: ReactNode;
};

export function ModalFooter({ children }: ModalFooterProps) {
  return <ModalFooterContainer>{children}</ModalFooterContainer>;
}
