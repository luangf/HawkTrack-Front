import LoginFlowWrapper from "@/components/auth-flow/LoginFlowWrapper";
import { MailPlus } from "lucide-react";
import { Link } from "react-router-dom";

export default function PosForgotPasswordPage() {
  return (
    <LoginFlowWrapper>
      <MailPlus size={50} />
      <p>
        Check your email for a link to reset your password. If it doesn’t appear
        within a few minutes, check your spam folder.
      </p>

      <Link
        className="underline hover:rounded-[var(--border-radius)] hover:bg-amber-100"
        to="/"
      >
        Return to Login Page
      </Link>
    </LoginFlowWrapper>
  );
}
