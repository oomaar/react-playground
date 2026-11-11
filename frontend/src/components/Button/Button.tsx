import { ButtonHTMLAttributes, ReactNode } from "react";
import { Btn } from "./styledButton";

export type ButtonVariant = "Primary" | "Ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: ButtonVariant;
  children: ReactNode;
};

export function Button({ variant, children, ...props }: ButtonProps) {
  return (
    <Btn {...props} $variant={variant}>
      {children}
    </Btn>
  );
}
