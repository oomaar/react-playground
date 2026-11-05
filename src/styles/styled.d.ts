import "styled-components";
import { Theme } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    colors: {
      bg: string;
      surface: string;
      border: string;
      text: string;
      text_danger: string;
      primary: string;
      danger: string;
    };
    shadows: {
      lg: string;
    };
  }
}
