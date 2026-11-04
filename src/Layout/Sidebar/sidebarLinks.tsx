import {
  BookOpen,
  CalendarDays,
  FlaskConical,
  House,
  LayoutDashboard,
} from "lucide-react";
import { SidebarLink } from "./types/SidebarLink";

export const sidebarLinks: SidebarLink[] = [
  {
    id: "2198dsadf823dh88q8fh",
    title: "Home",
    path: "/",
    icon: <House />,
  },
  {
    id: "1f3rxb90238eudj82349",
    title: "Dashboard",
    path: "/dashboard",
    icon: <LayoutDashboard />,
  },
  {
    id: "2fojeiowr3049djei83r",
    title: "Projects",
    path: "/projects",
    icon: <FlaskConical />,
  },
  {
    id: "0oksjurhnv872hn8n7n6",
    title: "Archives",
    path: "/archives",
    icon: <BookOpen />,
  },
  {
    id: "6hneof73bs930-fhbk29nx",
    title: "Calendar",
    path: "/calendar",
    icon: <CalendarDays />,
  },
];
