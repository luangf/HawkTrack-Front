import { Circle, CircleCheck, CircleX } from "lucide-react";

interface ProgressValidationItemProps {
  watchPassword: string;
  description: string;
  validation: boolean;
}

export default function ProgressValidationItem({
  watchPassword,
  description,
  validation,
}: ProgressValidationItemProps) {
  return (
    <div className="flex gap-1">
      {watchPassword === "" ? (
        <>
          <Circle size={19} />
          <small>{description}</small>
        </>
      ) : validation ? (
        <>
          <CircleCheck size={19} className="text-green-600" />
          <small className="text-green-600">{description}</small>
        </>
      ) : (
        <>
          <CircleX size={19} className="text-red-500" />
          <small className="text-red-500">{description}</small>
        </>
      )}
    </div>
  );
}
