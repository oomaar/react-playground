import { type ReactNode } from "react";
import { ModalBodyContainer } from "./styledModalBody";

type ModalBodyProps = {
  children: ReactNode;
};

export function ModalBody({ children }: ModalBodyProps) {
  return <ModalBodyContainer>{children}</ModalBodyContainer>;
}
