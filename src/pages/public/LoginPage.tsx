import useLoginPage from "@/hooks/useLoginPage";
import { Eye, EyeClosed, LoaderCircle } from "lucide-react";
import { Link } from "react-router-dom";
import AuthenticateHeader from "../../components/auth-flow/AuthenticateHeader";
import AuthenticateWith from "../../components/auth-flow/AuthenticateWith";
import LoginFlowWrapper from "../../components/auth-flow/LoginFlowWrapper";
import OrDivide from "../../components/auth-flow/OrDivide";
import ErrorFinalMsg from "../../components/general/ErrorFinalMsg";
import FieldErrorMsg from "../../components/general/FieldErrorMsg";
import Label from "../../components/general/Label";
import PrimaryButton from "../../components/general/PrimaryButton";

export default function LoginPage() {
  const {
    passwordVisible,
    loginFailError,
    register,
    handleSubmit,
    errors,
    isSubmitting,
    handleLogin,
    handlePasswordVisible,
  } = useLoginPage();

  return (
    <LoginFlowWrapper>
      <AuthenticateHeader>Login</AuthenticateHeader>
      <AuthenticateWith>Continue with Google</AuthenticateWith>
      <OrDivide />
      {loginFailError && (
        <ErrorFinalMsg>
          Login failed. Please check your email and password. Or unknown error.
        </ErrorFinalMsg>
      )}
      <form
        className="flex w-full flex-col gap-4"
        onSubmit={handleSubmit(handleLogin)}
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

        <div className="flex flex-col">
          <Label htmlFor="password">
            <span className={errors.password && "text-red-500"}>Password</span>
          </Label>
          <div className="flex">
            <input
              className={`w-full rounded-l-[var(--border-radius)] border-2 border-gray-300 bg-gray-50 p-3 shadow-md hover:bg-amber-50 focus:border-amber-500 focus:outline-none ${
                errors.password ? "border-red-500 focus:border-red-500" : ""
              }`}
              type={passwordVisible ? "text" : "password"}
              id="password"
              {...register("password")}
              placeholder="Password"
            />
            <button
              onClick={handlePasswordVisible}
              type="button"
              className={`flex cursor-pointer items-center justify-center rounded-r-[var(--border-radius)] border-2 border-l-0 border-gray-300 bg-gray-50 px-2 hover:bg-amber-50 ${errors.password ? "border-red-500" : ""}`}
            >
              {passwordVisible ? (
                <Eye className={errors.password && "text-red-500"} />
              ) : (
                <EyeClosed className={errors.password && "text-red-500"} />
              )}
            </button>
          </div>
          <FieldErrorMsg>{errors.password?.message}</FieldErrorMsg>
        </div>

        <div className="flex justify-between">
          <Label htmlFor="remember-me-checkbox">
            <input
              type="checkbox"
              id="remember-me-checkbox"
              {...register("rememberMeCheckbox")}
            />
            Remember me
          </Label>

          <Link
            className="hover:rounded-[var(--border-radius)] hover:bg-amber-100"
            to="/forgot"
            title="Reset your password"
          >
            Forgot password?
          </Link>
        </div>
        <PrimaryButton disabled={isSubmitting}>
          {isSubmitting ? (
            <div className="flex justify-center gap-2">
              <LoaderCircle className="animate-spin" /> <span>Log In</span>
            </div>
          ) : (
            "Log In"
          )}
        </PrimaryButton>
      </form>

      <p>
        Don’t have an account?{" "}
        <Link
          className="underline hover:rounded-[var(--border-radius)] hover:bg-amber-100"
          to="/register"
        >
          Register
        </Link>
      </p>
    </LoginFlowWrapper>
  );
}
