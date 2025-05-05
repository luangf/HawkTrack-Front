import { ReactNode } from "react";

interface FieldErrorMsgProps {
  children: ReactNode;
}

function FieldErrorMsg({ children }: FieldErrorMsgProps) {
  return <small className="text-red-500">{children}</small>;
}

export default FieldErrorMsg;
