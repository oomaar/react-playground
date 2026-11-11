import { SidabarContainer, SidebarLogoContainer } from "./styledSidebar";
import { Settings, TreePalm, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { SidebarList } from "./SidebarList/SidebarList";
import { SidebarListLI, SidebarListUL } from "./SidebarList/styledSidebarList";
import { useEffect, useState } from "react";

export function Sidebar() {
  const { pathname } = useLocation();

  const [activeLink, setActiveLink] = useState(pathname);

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  return (
    <SidabarContainer>
      <SidebarLogoContainer>
        <TreePalm width={50} height={50} />
      </SidebarLogoContainer>
      <SidebarList />
      <SidebarListUL style={{ margin: "auto 0px 32px" }}>
        <SidebarListLI
          $active={activeLink === "/settings"}
          onClick={() => setActiveLink("/settings")}
        >
          <Link to={"/settings"}>
            <Settings width={30} height={30} />
            Settings
          </Link>
        </SidebarListLI>
        <SidebarListLI
          $active={activeLink === "/account"}
          onClick={() => setActiveLink("/account")}
        >
          <Link to={"/account"}>
            <User width={30} height={30} />
            Account
          </Link>
        </SidebarListLI>
      </SidebarListUL>
    </SidabarContainer>
  );
}
