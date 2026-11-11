import { ReactNode } from "react";
import { Btn } from "./styledButton";

export type ButtonVariant = "Primary" | "Ghost";

type ButtonProps = {
  variant: ButtonVariant;
  children: ReactNode;
};

export function Button({ variant, children }: ButtonProps) {
  return <Btn $variant={variant}>{children}</Btn>;
}
