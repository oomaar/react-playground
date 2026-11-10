import styled from "styled-components";
import { Transition } from "../../styles/constants";

export const DropdownContainer = styled.div<{ $width?: string }>`
  position: relative;
  width: ${({ $width }) => ($width ? $width : "200px")};
`;

export const DropdownButton = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  border-radius: ${({ $isOpen }) => ($isOpen ? "8px 8px 0px 0px" : "8px")};

  svg {
    width: 15px;
    height: 15px;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const DropdownButtonIcon = styled.div<{ $isOpen: boolean }>`
  width: 15px;
  height: 15px;
  transition: ${Transition};
  rotate: ${({ $isOpen }) => ($isOpen ? "-180deg" : "0deg")};

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const DropdownMenu = styled.ul<{ $menuWidth: string; $isOpen: boolean }>`
  width: ${({ $menuWidth }) => $menuWidth};
  position: absolute;
  display: block;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 0px 0px 8px 8px;
  left: 0px;
  top: 17px;
  right: 0px;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  height: fit-content;
  z-index: 2000;
  max-height: ${({ $isOpen }) => ($isOpen ? "200px" : "0px")};
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  overflow-y: ${({ $isOpen }) => ($isOpen ? "auto" : "hidden")};
  transition: ${({ $isOpen }) => ($isOpen ? Transition : "none")};
`;
