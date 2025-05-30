import { AppWindowMac, Book, Calendar, Home, Inbox, InboxIcon, VerifiedIcon } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Link } from "react-router-dom"

// Menu items.
const items = [
  {
    title: "Faculty",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "App ",
    url: "/dashboard/app",
    icon: AppWindowMac,
  },
  {
    title: "Courses",
    url: "/dashboard/course",
    icon: Inbox,
  },
  {
    title: "Trimesters",
    url: "/dashboard/trimester",
    icon: Calendar,
  },
  {
    title: "Curriculum",
    url: "/dashboard/curriculum",
    icon: Book,
  },
  {
    title:"Certicifate",
    url:"/dashboard/course/upload/certificate",
    icon: VerifiedIcon
  },
  {
    title: "Messages",
    url: "#",
    icon: InboxIcon,
  },
]

export function AdminSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Tiimat Admin Revamped</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className=" py-1">
                  <SidebarMenuButton asChild>
                    <Link to={item.url} className=" text-base ">
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
