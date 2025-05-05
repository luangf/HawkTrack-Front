import { ReactNode } from "react";

interface ErrorFinalMsgProps {
  children: ReactNode;
}

function ErrorFinalMsg({ children }: ErrorFinalMsgProps) {
  return (
    <small className="rounded-[var(--border-radius)] bg-amber-100 p-3 shadow-[var(--box-shadow)]">
      {children}
    </small>
  );
}

export default ErrorFinalMsg;
