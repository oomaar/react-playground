import styled from "styled-components";

export const ModalContainer = styled.div<{ $width: string; $height: string }>`
  background: ${({ theme }) => theme.colors.bg};
  border-radius: 16px;
  position: fixed;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: ${({ theme }) => theme.shadows.lg};
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
`;
