import styled, { keyframes } from "styled-components";
import { NavbarHeight, SidebarWidth } from "../../styles/constants";

const rotateLogo = keyframes`
  from {
    transform: rotateX(0deg);
  }

  to {
    transform: rotateX(360deg);
  }
`;

export const NavbarNav = styled.nav`
  background: #000;
  padding: 12px 16px;
  border-radius: 16px;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
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

  svg {
    animation: ${rotateLogo} 5s ease infinite;
  }

  p {
    font-weight: 700;
  }
`;
