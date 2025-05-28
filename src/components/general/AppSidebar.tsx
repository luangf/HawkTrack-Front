import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
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
import { useCategoryData } from "@/hooks/categories/useCategoryData";
import { CategoryDataGET } from "@/interface/categoryData";
import {
  ArrowBigRight,
  ChevronDown,
  ChevronUp,
  ListCollapse,
  LoaderCircle,
  LogOut,
  MailWarning,
  MoreHorizontal,
  Plus,
  Settings,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "@/assets/logo.png";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";

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
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  Select Workspace
                  <ChevronDown className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
                <DropdownMenuItem>
                  <span>Workspace 1</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Workspace 2</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarSeparator />
      </SidebarHeader>
      <SidebarContent>
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Categories
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <Collapsible defaultOpen className="group/collapsible">
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton asChild>
                          <Link to="/category">
                            <ListCollapse />
                            See All Categories
                          </Link>
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {data
                            .slice()
                            .reverse()
                            .map((category: CategoryDataGET) => (
                              <SidebarMenuSubItem key={category.name}>
                                <SidebarMenuSubButton asChild>
                                  <Link to="#">
                                    <ArrowBigRight />
                                    {category.name.length > 13
                                      ? `${category.name.slice(0, 13)}...`
                                      : category.name}
                                  </Link>
                                </SidebarMenuSubButton>
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <SidebarMenuAction>
                                      <MoreHorizontal />
                                    </SidebarMenuAction>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent
                                    side="right"
                                    align="start"
                                  >
                                    <DropdownMenuItem>
                                      <span>Edit Project</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                      <span>Delete Project</span>
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </SidebarMenuSubItem>
                            ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                      <SidebarMenuBadge>{data.length}</SidebarMenuBadge>
                    </SidebarMenuItem>
                  </Collapsible>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>
      <SidebarFooter>
        <SidebarSeparator />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
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
