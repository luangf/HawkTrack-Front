import { ReactNode } from "react";
import Footer from "../general/Footer";

interface LoginFlowWrapperProps {
  children: ReactNode;
}

function LoginFlowWrapper({ children }: LoginFlowWrapperProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex items-center justify-center md:flex-1">
        <main className="flex w-full max-w-3xl flex-col items-center gap-4 border-b-2 border-[var(--border-color)] bg-white p-4 shadow-[var(--box-shadow)] md:rounded-[var(--border-radius)] md:border-2">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default LoginFlowWrapper;
