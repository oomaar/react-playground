import styled from "styled-components";

export const DropdownSearchLI = styled.li`
  background: ${({ theme }) => theme.colors.bg};
  display: flex;
  padding: 8px;
`;

export const DropdownSearchInputContainer = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  display: flex;
  align-items: center;
  gap: 0px 8px;
  border-radius: 12px;
  padding: 0px 8px;
`;

export const DropdownSearchInput = styled.input`
  font-size: 14px;
  border: 0px;
  outline: 0px;
  width: 100%;
  height: 100%;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  padding: 8px 0px;
`;
