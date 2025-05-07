import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCategoryData } from "@/hooks/category/useCategoryData";
import { CategoryDataGET } from "@/interface/categoryData";
import {
  ArrowBigRight,
  ChevronUp,
  ListCollapse,
  LoaderCircle,
  LogOut,
  MailWarning,
  Settings,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "@/assets/logo.png";

export function AppSidebar() {
  const { isPending, isError, data, error } = useCategoryData();

  if (isPending) {
    return (
      <div className="flex">
        <span className="text-3xl">"Loading..."</span>
        <LoaderCircle size={40} className="animate-spin" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex">
        <MailWarning size={40} />
        <span className="text-3xl">{error.message}</span>
      </div>
    );
  }

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <Link to="/category">
          <img src={Logo} alt="Logo" className="w-26" />
        </Link>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Categories</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/category">
                    <ListCollapse />
                    See All Categories
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuSub>
                  {data
                    .slice()
                    .reverse()
                    .map((category: CategoryDataGET) => (
                      <SidebarMenuSubItem key={category.name}>
                        <SidebarMenuSubButton asChild>
                          <Link to="#">
                            <ArrowBigRight />
                            {category.name}
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                </SidebarMenuSub>
                <SidebarMenuBadge>{data.length}</SidebarMenuBadge>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>SidebarGroup on SidebarContent</SidebarGroup>
      </SidebarContent>
      <SidebarSeparator />
      <SidebarFooter>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <SidebarMenuButton>
              <User />
              {sessionStorage.getItem("username")}
              <ChevronUp className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
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
      </SidebarFooter>
    </Sidebar>
  );
}
