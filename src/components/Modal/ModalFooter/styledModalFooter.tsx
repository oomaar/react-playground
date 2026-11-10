import styled from "styled-components";

export const ModalFooterContainer = styled.footer`
  margin-top: auto;
  padding: 8px 0px 0px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0px 16px;
`;
