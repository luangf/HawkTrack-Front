import { AppSidebar } from "@/components/general/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Outlet } from "react-router-dom";
import DashboardMenu from "../../components/general/DashboardMenu";

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
