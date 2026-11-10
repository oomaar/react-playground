import styled from "styled-components";

export const ModalContainer = styled.div<{ $width: string; $height: string }>`
  /* flex flex-col bg-(--background) rounded-lg 
fixed z-30 top-[50%] left-[50%] -translate-1/2 
p-4 shadow-(--shadow-lg) */
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.bg};
  border-radius: 16px;
  position: fixed;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  padding: 16px;
  box-shadow: ${({ theme }) => theme.shadows.lg};
`;
