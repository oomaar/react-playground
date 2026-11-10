import {
  SidabarContainer,
  SidebarFooter,
  SidebarLogoContainer,
} from "./styledSidebar";
import { Settings, TreePalm, User } from "lucide-react";
import { Link } from "react-router-dom";
import { SidebarList } from "./SidebarList/SidebarList";

export function Sidebar() {
  return (
    <SidabarContainer>
      <SidebarLogoContainer>
        <TreePalm width={50} height={50} />
      </SidebarLogoContainer>
      <SidebarList />
      <SidebarFooter>
        <Link to={"/settings"}>
          <Settings width={30} height={30} />
        </Link>
        <Link to={"/account"}>
          <User width={30} height={30} />
        </Link>
      </SidebarFooter>
    </SidabarContainer>
  );
}
