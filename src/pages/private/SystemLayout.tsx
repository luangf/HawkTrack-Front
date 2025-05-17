import { AppSidebar } from "@/components/general/AppSidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { LogOut, Settings, User } from "lucide-react";
import { Link, Outlet } from "react-router-dom";
import DashboardMenu from "../../components/general/DashboardMenu";
import MenuUserImage from "@/components/general/MenuUserImage";

export default function SystemLayout() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Toaster richColors position="top-center" />
      <SidebarProvider className="flex-col">
        <DashboardMenu />
        <AppSidebar />
        <Outlet />
      </SidebarProvider>
    </ThemeProvider>
  );
}
