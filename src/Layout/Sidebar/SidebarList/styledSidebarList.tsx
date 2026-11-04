import styled from "styled-components";

export const SidebarListUL = styled.ul`
  margin: 32px 0px auto;
  background: #131314;
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
  background: ${({ $active }) => ($active ? "#1827" : "transparent")};

  :hover {
    background: #1827;
  }

  a {
    padding: 8px;
    display: flex;
    align-items: center;
    gap: 0px 12px;
    transition: all 0.5s ease;
    font-weight: 700;
    color: #fff;
    background: transparent;
  }
`;
