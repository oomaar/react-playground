import { Link, useLocation } from "react-router-dom";
import { sidebarLinks } from "../sidebarLinks";
import { SidebarListLI, SidebarListUL } from "./styledSidebarList";
import { useEffect, useState } from "react";

export function SidebarList() {
  const { pathname } = useLocation();

  const [activeLink, setActiveLink] = useState(pathname);

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  return (
    <SidebarListUL style={{ marginTop: "64px" }}>
      {sidebarLinks.map((link) => (
        <SidebarListLI
          $active={activeLink === link.path}
          key={link.id}
          onClick={() => setActiveLink(link.path)}
        >
          <Link to={link.path}>
            <span>{link.icon}</span>
            {link.title}
          </Link>
        </SidebarListLI>
      ))}
    </SidebarListUL>
  );
}
