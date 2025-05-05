import { AppSidebar } from "@/components/general/AppSidebar";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import useHomePage from "@/hooks/useHomePage";
import {
  FolderPen,
  LoaderCircle,
  LogOut,
  MessageCircleMore,
  Settings,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";
import AllCardsCategories from "../../components/categories/AllCardsCategories";
import DashboardMenu from "../../components/general/DashboardMenu";
import Footer from "../../components/general/Footer";
import PrimaryButton from "../../components/general/PrimaryButton";

export default function HomePage() {
  const { register, handleSubmit, errors, isSubmitting, handleSaveCategory } =
    useHomePage();

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

        <div className="flex min-h-screen flex-col items-center md:justify-center">
          <main className="flex w-full max-w-3xl flex-col items-center gap-4 border-b-2 border-[var(--border-color)] bg-white p-4 shadow-[var(--box-shadow)] md:rounded-[var(--border-radius)] md:border-2">
            <h1 className="text-center text-4xl font-bold">
              Create new Category
            </h1>
            <form
              className="flex w-full flex-col gap-3"
              onSubmit={handleSubmit(handleSaveCategory)}
            >
              <div className="flex flex-col gap-1">
                <label className="flex gap-1" htmlFor="name">
                  <FolderPen className={errors.name && "text-red-500"} />
                  <span className={errors.name && "text-red-500"}>Name</span>
                </label>
                <input
                  className={`rounded-[var(--border-radius)] border-2 border-gray-300 bg-gray-50 p-3 shadow-md hover:bg-amber-50 focus:border-amber-500 focus:outline-none ${errors.name ? "border-red-500 focus:border-red-500" : ""}`}
                  type="text"
                  id="name"
                  {...register("name")}
                  placeholder="Name"
                />
                <small className="text-red-500">{errors.name?.message}</small>
              </div>
              <div className="flex flex-col gap-1">
                <label className="flex gap-1" htmlFor="description">
                  <MessageCircleMore
                    className={errors.description && "text-red-500"}
                  />
                  <span className={errors.description && "text-red-500"}>
                    Description
                  </span>
                </label>
                <textarea
                  className={`h-36 max-h-72 rounded-[var(--border-radius)] border-2 border-gray-300 bg-gray-50 p-3 shadow-md hover:bg-amber-50 focus:border-amber-500 focus:outline-none sm:h-32 ${errors.description ? "border-red-500 focus:border-red-500" : ""}`}
                  id="description"
                  {...register("description")}
                  placeholder="Description"
                  maxLength={750}
                />
                <small className="text-red-500">
                  {errors.description?.message}
                </small>
              </div>
              <PrimaryButton disabled={isSubmitting}>
                {isSubmitting ? (
                  <div className="flex justify-center gap-2">
                    <LoaderCircle className="animate-spin" />{" "}
                    <span>Create</span>
                  </div>
                ) : (
                  "Create"
                )}
              </PrimaryButton>
            </form>
          </main>
          <AllCardsCategories />
          <Footer />
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
}
