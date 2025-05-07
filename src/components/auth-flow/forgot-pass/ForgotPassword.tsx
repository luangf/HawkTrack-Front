import useForgotPassword from "@/components/auth-flow/forgot-pass/useForgotPassword";
import { LoaderCircle } from "lucide-react";
import { Link } from "react-router-dom";
import AuthenticateHeader from "../AuthenticateHeader";
import ErrorFinalMsg from "../../general/ErrorFinalMsg";
import FieldErrorMsg from "../../general/FieldErrorMsg";
import Label from "../../general/Label";
import PrimaryButton from "../../general/PrimaryButton";

export default function ForgotPassword() {
  const {
    loginFailError,
    register,
    handleSubmit,
    errors,
    isSubmitting,
    handleForgot,
  } = useForgotPassword();

  return (
    <>
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
    </>
  );
}
