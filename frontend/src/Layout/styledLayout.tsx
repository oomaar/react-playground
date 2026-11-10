import styled from "styled-components";
import { NavbarHeight, SidebarWidth } from "../styles/constants";

export const LayoutContainer = styled.main`
  padding: calc(${NavbarHeight} + 32px) 32px 0px calc(${SidebarWidth} + 32px);
`;
