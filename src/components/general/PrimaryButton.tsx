import { ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}

function PrimaryButton({
  children,
  className = "",
  disabled,
}: PrimaryButtonProps) {
  return (
    <button
      className={`${className} cursor-pointer rounded-[var(--border-radius)] bg-amber-500 p-3 shadow-[var(--box-shadow)] transition-colors hover:bg-amber-400 disabled:bg-amber-100`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
