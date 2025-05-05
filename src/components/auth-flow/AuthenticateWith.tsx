import { ReactNode } from "react";
import Google from "@/assets/google.svg";
import PrimaryButton from "../general/PrimaryButton";

interface AuthenticateWithProps {
  children: ReactNode;
}

function AuthenticateWith({ children }: AuthenticateWithProps) {
  return (
    <PrimaryButton className="flex w-full items-center justify-center gap-2">
      <img width="34" src={Google} alt="Logo of Google" />
      {children}
    </PrimaryButton>
  );
}

export default AuthenticateWith;
