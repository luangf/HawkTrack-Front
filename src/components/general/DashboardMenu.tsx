import { Link } from "react-router-dom";
import { Cog, House, LogOut, Menu, User } from "lucide-react";

function DashboardMenu() {
  function logout() {
    sessionStorage.clear();
  }

  return (
    <header className="fixed bottom-0 w-full border-t-2 border-[var(--border-color)] bg-amber-500 p-2 shadow-[var(--box-shadow)] sm:static sm:mb-3 sm:border-t-0 sm:border-b-2">
      <nav>
        <ul className="mx-auto flex max-w-[1200px] justify-between sm:justify-around">
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
        </ul>
      </nav>
    </header>
  );
}

export default DashboardMenu;
