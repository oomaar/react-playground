import { Bot } from "lucide-react";
import { NavbarLogo, NavbarNav } from "./styledNavbar";

export function Navbar() {
  return (
    <NavbarNav>
      <NavbarLogo>
        <Bot width={40} height={40} />
        <p>React Playground</p>
      </NavbarLogo>
    </NavbarNav>
  );
}
