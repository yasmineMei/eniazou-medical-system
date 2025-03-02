"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  ChartNoAxesCombined,
  Command,
  GalleryVerticalEnd,
  ShieldPlus,
  User2Icon,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
//import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import logo from "@/images/logo.png";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
//import { TeamSwitcher } from "./team-switcher";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Tableau de bord",
      url: "/dashboard",
      icon: ChartNoAxesCombined,
      isActive: true,
    },
    {
      title: "Patient",
      url: "/patient",
      icon: User2Icon,
    },
    {
      title: "Personnel",
      url: "/personnel",
      icon: ShieldPlus,
    },
    {
      title: "Rapports",
      url: "/report",
      icon: BookOpen,
    },
  ],
  /* projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],*/
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="flex items-center justify-center p-4 group mt-[-25px] mb-[-35px]">
        <img
          src={logo}
          alt="Eniazou Logo"
          className="h-40 w-auto transition-all duration-300 object-contain group-[.collapsed]:h-12 group-[.collapsed]:w-12 group-[.collapsed]:group-hover:h-16 group-[.collapsed]:group-hover:w-16"
        />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/*<NavProjects projects={data.projects} />*/}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
