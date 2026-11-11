import styled from "styled-components";
import { ButtonVariant } from "./Button";
import { Transition } from "../../styles/constants";

export const Btn = styled.button<{ $variant: ButtonVariant }>`
  background: ${({ theme, $variant }) =>
    $variant === "Primary" ? theme.colors.primary : "transparent"};
  color: ${({ theme, $variant }) =>
    $variant === "Primary" ? "#fff" : theme.colors.primary};
  border: 1px solid
    ${({ theme, $variant }) =>
      $variant === "Primary" ? "transparent" : theme.colors.primary};
  transition: ${Transition};
  padding: 8px 16px;
  min-width: 60px;
  min-width: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  border-radius: 8px;
`;
