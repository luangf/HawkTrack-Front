import useForgotPasswordPage from "@/hooks/useForgotPasswordPage";
import { LoaderCircle } from "lucide-react";
import { Link } from "react-router-dom";
import AuthenticateHeader from "../../components/auth-flow/AuthenticateHeader";
import LoginFlowWrapper from "../../components/auth-flow/LoginFlowWrapper";
import ErrorFinalMsg from "../../components/general/ErrorFinalMsg";
import FieldErrorMsg from "../../components/general/FieldErrorMsg";
import Label from "../../components/general/Label";
import PrimaryButton from "../../components/general/PrimaryButton";

export default function ForgotPasswordPage() {
  const {
    loginFailError,
    register,
    handleSubmit,
    errors,
    isSubmitting,
    handleForgot,
  } = useForgotPasswordPage();

  return (
    <LoginFlowWrapper>
      <AuthenticateHeader>Forgot Password?</AuthenticateHeader>
      <p>We will send you an email to recover your password</p>
      {loginFailError && (
        <ErrorFinalMsg>
          Please check your email. Or unknown error.
        </ErrorFinalMsg>
      )}
      <form
        className="flex w-full flex-col gap-4"
        onSubmit={handleSubmit(handleForgot)}
      >
        <div className="flex flex-col">
          <Label htmlFor="email">
            <span className={errors.email && "text-red-500"}>Email</span>
          </Label>
          <input
            className={`rounded-[var(--border-radius)] border-2 border-gray-300 bg-gray-50 p-3 shadow-md hover:bg-amber-50 focus:border-amber-500 focus:outline-none ${errors.email ? "border-red-500 focus:border-red-500" : ""}`}
            type="email"
            id="email"
            {...register("email")}
            placeholder="Email"
          />
          <FieldErrorMsg>{errors.email?.message}</FieldErrorMsg>
        </div>

        <PrimaryButton disabled={isSubmitting}>
          {isSubmitting ? (
            <div className="flex justify-center gap-2">
              <LoaderCircle className="animate-spin" /> <span>Send Link</span>
            </div>
          ) : (
            "Send Link"
          )}
        </PrimaryButton>
      </form>
      <Link
        className="underline hover:rounded-[var(--border-radius)] hover:bg-amber-100"
        to="/"
      >
        (TEST) go to the next logic
      </Link>
      <Link
        className="underline hover:rounded-[var(--border-radius)] hover:bg-amber-100"
        to="/"
      >
        Return to Login Page
      </Link>
    </LoginFlowWrapper>
  );
}
