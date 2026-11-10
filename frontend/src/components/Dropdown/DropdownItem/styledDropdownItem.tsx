import styled from "styled-components";
import { Transition } from "../../../styles/constants";

export const DropdownItemLI = styled.li<{
  $isSelected?: boolean;
  $isDanger?: boolean;
}>`
  padding: 8px 16px;
  transition: ${Transition};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ $isSelected, $isDanger, theme }) =>
    $isSelected
      ? theme.colors.text
      : $isDanger
        ? theme.colors.text_danger
        : ""};
  background: ${({ $isSelected, $isDanger, theme }) =>
    $isSelected ? theme.colors.primary : $isDanger ? theme.colors.danger : ""};

  svg {
    width: 20px;
    height: 20px;
    color: ${({ $isSelected, $isDanger, theme }) =>
      $isSelected
        ? theme.colors.text
        : $isDanger
          ? theme.colors.text
          : theme.colors.surface};
  }

  :last-child {
    border-radius: 0px 0px 8px 8px;
  }

  &:hover {
    background: ${({ theme, $isDanger }) =>
      $isDanger ? theme.colors.danger : theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};

    svg {
      color: ${({ $isDanger, theme }) =>
        $isDanger ? theme.colors.text_danger : theme.colors.text};
    }
  }
`;
