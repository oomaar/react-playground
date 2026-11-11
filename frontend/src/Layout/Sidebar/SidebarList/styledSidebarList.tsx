import styled from "styled-components";
import { Transition } from "../../../styles/constants";

export const SidebarListUL = styled.ul`
  border-radius: 8px;
`;

export const SidebarListLI = styled.li<{ $active: boolean }>`
  background: ${({ theme, $active }) =>
    $active ? theme.colors.primary : "transparent"};
  color: #fff;

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
