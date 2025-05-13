import { ReactNode } from "react";
import { Button } from "../ui/button";

interface AuthenticateWithProps {
  children: ReactNode;
  type: "google" | "github";
}

function AuthenticateWith({ children, type }: AuthenticateWithProps) {
  return (
    <Button
      onClick={() =>
        (window.location.href = `http://localhost:8080/talkovia/oauth2/authorization/${type}`)
      }
      className="flex w-full items-center justify-center gap-2 p-6 bg-gray-500 hover:bg-gray-400"
    >
      {children}
    </Button>
  );
}

export default AuthenticateWith;
