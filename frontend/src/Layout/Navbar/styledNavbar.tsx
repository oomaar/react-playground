import styled from "styled-components";
import { NavbarHeight, SidebarWidth } from "../../styles/constants";

export const NavbarNav = styled.nav`
  background: ${({ theme }) => theme.colors.surface};
  padding: 12px 16px;
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  height: ${NavbarHeight};
  display: flex;
  align-items: center;
  position: fixed;
  top: 16px;
  left: calc(${SidebarWidth} + 32px);
  right: 32px;
`;

export const NavbarLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 0px 8px;
  color: #fff;

  p {
    font-weight: 700;
  }
`;
