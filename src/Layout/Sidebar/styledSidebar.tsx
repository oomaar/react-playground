import styled from "styled-components";
import { SidebarWidth } from "../../styles/constants";

export const SidabarContainer = styled.aside`
  position: fixed;
  inset: 16px;
  right: unset;
  width: ${SidebarWidth};
  background: #000;
  border-radius: 16px;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
  padding: 12px;
  display: flex;
  flex-direction: column;
`;

export const SidebarLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: transparent;
    fill: #fff;
  }
`;

export const SidebarFooter = styled.div`
  display: grid;
  justify-content: center;
  gap: 48px 0px;
  padding-bottom: 32px;
`;
