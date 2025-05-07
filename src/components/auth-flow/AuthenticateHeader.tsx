import { Link } from "react-router-dom";
import Logo from "@/assets/logo.png";
import { ReactNode } from "react";

interface AuthenticateHeaderProps {
  children: ReactNode;
}

function AuthenticateHeader({ children }: AuthenticateHeaderProps) {
  return (
    <header>
      <Link to="/category">
        <img
          className="mx-auto"
          width="180"
          src={Logo}
          alt="Logo of HawkTrack"
        />
      </Link>
      <h1 className="mt-3 text-center text-4xl font-bold">{children}</h1>
    </header>
  );
}

export default AuthenticateHeader;
