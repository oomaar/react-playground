import { type ReactNode } from "react";
import { ModalHeaderContainer } from "./styledModalHeader";

type ModalHeaderProps = {
  children: ReactNode;
};

export function ModalHeader({ children }: ModalHeaderProps) {
  return <ModalHeaderContainer>{children}</ModalHeaderContainer>;
}
