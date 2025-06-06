import { Link, useNavigate } from "react-router-dom";
import { Cog, House, LogOut, Menu, User } from "lucide-react";
import { useAuthMutate } from "@/hooks/auth-flow/useAuthMutate";
import { ModeToggle } from "../ui/mode-toggle";
import MenuUserImage from "./MenuUserImage";
import { SidebarTrigger } from "../ui/sidebar";

function DashboardMenu() {
  const { mutateLogoutPost } = useAuthMutate();
  const navigate = useNavigate();

  function logout() {
    sessionStorage.clear(); //limpar username?
    mutateLogoutPost.mutate(undefined, {
      onSuccess: () => {
        navigate("/", {
          state: { showToast: true },
        });
      },
      onError: (error) => {
        console.error("Erro ao fazer logout", error);
      },
    });
  }

  return (
    <header className="fixed bottom-0 z-10 w-full border-t-2 border-[var(--border-color)] bg-amber-500 p-2 shadow-[var(--box-shadow)] sm:static sm:mb-3 sm:border-t-0 sm:border-b-2">
      <nav>
        <ul className="mx-auto flex max-w-[1200px] justify-between sm:justify-around">
          <li>
            <SidebarTrigger />
          </li>
          <li>
            <Link className="flex flex-col items-center" to="#">
              <House />
              Home
            </Link>
          </li>
          <li>
            <Link className="flex flex-col items-center" to="#">
              <Cog />
              Config
            </Link>
          </li>
          <li>
            <Link className="flex flex-col items-center" to="#">
              <User />
              Profile
            </Link>
          </li>
          <li>
            <Link
              onClick={logout}
              className="flex flex-col items-center"
              to="/"
            >
              <LogOut />
              Logout
            </Link>
          </li>
          <li className="lg:hidden">
            <Link className="flex flex-col items-center" to="#">
              <Menu />
              Menu
            </Link>
          </li>
          <li>
            <div className="flex gap-2">
              <ModeToggle />
              <MenuUserImage />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default DashboardMenu;
