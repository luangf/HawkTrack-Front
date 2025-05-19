import { Circle, CircleCheck, CircleX } from "lucide-react";
import { useEffect, useState } from "react";
import { Progress } from "../ui/progress";
import ProgressValidationItem from "./ProgressValidationItem";

interface ProgressRegisterVerificationProps {
  watchPassword: string;
}

export default function ProgressRegisterVerification({
  watchPassword,
}: ProgressRegisterVerificationProps) {
  const liveValidation = {
    hasUppercase: /[A-Z]/.test(watchPassword),
    hasLowercase: /[a-z]/.test(watchPassword),
    hasNumber: /[0-9]/.test(watchPassword),
    hasSpecialChar: /[!@#$%^&*(),.?":{}|<>_\-+=~`[\]\\;/]/.test(watchPassword),
    hasMinLength: watchPassword.length >= 12,
  };

  const [valueProgress, setValueProgress] = useState(0);

  useEffect(() => {
    const liveValidationArray = Object.values(liveValidation);
    const countValidationPassed = liveValidationArray.filter(Boolean).length;
    const actualProgress =
      (countValidationPassed / liveValidationArray.length) * 100;
    setValueProgress(actualProgress);
  }, [watchPassword]);

  return (
    <div>
      <Progress value={valueProgress} />
      <small>The password must have at least:</small>
      <ProgressValidationItem
        watchPassword={watchPassword}
        description="1 uppercase letter"
        validation={liveValidation.hasUppercase}
      />
      <ProgressValidationItem
        watchPassword={watchPassword}
        description="1 lowercase letter"
        validation={liveValidation.hasLowercase}
      />
      <ProgressValidationItem
        watchPassword={watchPassword}
        description="1 number"
        validation={liveValidation.hasNumber}
      />
      <ProgressValidationItem
        watchPassword={watchPassword}
        description="1 special character"
        validation={liveValidation.hasSpecialChar}
      />
      <ProgressValidationItem
        watchPassword={watchPassword}
        description="12 characters in total"
        validation={liveValidation.hasMinLength}
      />
    </div>
  );
}
