import { AppSidebar } from "@/components/general/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Outlet } from "react-router-dom";
import DashboardMenu from "../../components/general/DashboardMenu";
import Cookies from "js-cookie";

export default function SystemLayout() {
  const defaultOpen = Cookies.get("sidebar_state") === "true";
  
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Toaster richColors position="top-center" />
      <SidebarProvider className="flex-col" defaultOpen={defaultOpen}>
        <DashboardMenu />
        <AppSidebar />
        <Outlet />
      </SidebarProvider>
    </ThemeProvider>
  );
}
