import { ReactNode } from "react";
import { ModalTitleText } from "./styledModalTitle";

type ModalTitleProps = {
  children: ReactNode;
};

export function ModalTitle({ children }: ModalTitleProps) {
  return <ModalTitleText>{children}</ModalTitleText>;
}
