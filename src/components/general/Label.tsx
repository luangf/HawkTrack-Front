import { ReactNode } from "react";

interface LabelProps {
  children: ReactNode;
  htmlFor: string;
}

function Label({ children, htmlFor }: LabelProps) {
  return (
    <label className="flex gap-1" htmlFor={htmlFor}>
      {children}
    </label>
  );
}

export default Label;
