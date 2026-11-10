import styled from "styled-components";
import { TRANSITION_DURATION } from "../../constants/constants";

export const OverlayContainer = styled.div`
  position: fixed;
  inset: 0px;
  z-index: 900;
  background: rgba(0, 0, 0, 0.75);
  transition: all ${TRANSITION_DURATION} ease;
`;
