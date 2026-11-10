import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar/Sidebar";
import { LayoutContainer } from "./styledLayout";
import { Navbar } from "./Navbar/Navbar";

export function Layout() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    </>
  );
}
