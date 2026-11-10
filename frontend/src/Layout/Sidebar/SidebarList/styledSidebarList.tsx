import styled from "styled-components";
import { Transition } from "../../../styles/constants";

export const SidebarListUL = styled.ul`
  margin: 32px 0px auto;
  background: ${({ theme }) => theme.colors.bg};
  border-radius: 8px;

  :first-child,
  :first-child > a {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  :last-child,
  :last-child > a {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

export const SidebarListLI = styled.li<{ $active: boolean }>`
  background: ${({ theme, $active }) =>
    $active ? theme.colors.primary : "transparent"};

  :hover {
    background: ${({ theme }) => theme.colors.primary};
  }

  a {
    padding: 8px;
    display: flex;
    align-items: center;
    gap: 0px 12px;
    transition: ${Transition};
    font-weight: 700;
    color: #fff;
    background: transparent;
  }
`;
