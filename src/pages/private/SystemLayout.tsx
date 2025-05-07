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

export default function SystemLayout() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Toaster richColors position="top-center" />
      <SidebarProvider className="flex-col">
        <DashboardMenu />
        <div className="flex h-fit w-full items-center justify-between p-2">
          <div className="flex">
            <AppSidebar />
            <SidebarTrigger />
          </div>
          <div className="flex gap-2">
            <ModeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src="https://static.zenmarket.jp/images/blog/uvldflh1.3qi" />
                  <AvatarFallback>
                    <User size={36} />
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="#">
                    <User />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="#">
                    <Settings />
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/" onClick={() => sessionStorage.clear()}>
                    <LogOut className="text-red-400" />
                    Logout
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <Outlet />
      </SidebarProvider>
    </ThemeProvider>
  );
}
