import useRegisterPage from "@/hooks/useRegisterPage";
import {
  Check,
  Circle,
  CircleCheck,
  CircleX,
  Eye,
  EyeClosed,
  LoaderCircle,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import AuthenticateHeader from "../../components/auth-flow/AuthenticateHeader";
import AuthenticateWith from "../../components/auth-flow/AuthenticateWith";
import LoginFlowWrapper from "../../components/auth-flow/LoginFlowWrapper";
import OrDivide from "../../components/auth-flow/OrDivide";
import ErrorFinalMsg from "../../components/general/ErrorFinalMsg";
import FieldErrorMsg from "../../components/general/FieldErrorMsg";
import Label from "../../components/general/Label";
import PrimaryButton from "../../components/general/PrimaryButton";

export default function RegisterPage() {
  const {
    passwordVisible,
    loginFailError,
    register,
    handleSubmit,
    errors,
    isSubmitting,
    handleRegister,
    handlePasswordVisible,
  } = useRegisterPage();

  return (
    <LoginFlowWrapper>
      <AuthenticateHeader>Register</AuthenticateHeader>
      <AuthenticateWith>Register with Google</AuthenticateWith>
      <OrDivide />
      {loginFailError && (
        <ErrorFinalMsg>
          Register failed. Email or username already exists. Or unknown error.
        </ErrorFinalMsg>
      )}

      <form
        className="flex w-full flex-col gap-4"
        onSubmit={handleSubmit(handleRegister)}
      >
        <div className="flex flex-col gap-1">
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

        <div className="flex flex-col gap-1">
          <Label htmlFor="username">
            <span className={errors.username && "text-red-500"}>Username</span>
          </Label>
          <input
            className={`rounded-[var(--border-radius)] border-2 border-gray-300 bg-gray-50 p-3 shadow-md hover:bg-amber-50 focus:border-amber-500 focus:outline-none ${errors.username ? "border-red-500 focus:border-red-500" : ""}`}
            type="text"
            id="username"
            {...register("username")}
            placeholder="Username"
          />
          <FieldErrorMsg>{errors.username?.message}</FieldErrorMsg>
        </div>

        <div className="flex flex-col gap-1">
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

        <div>
          <div className="rounded-[var(--border-radius)] border-2 border-[var(--border-color)]">
            <div className="h-3 w-1/5 rounded-[var(--border-radius)] bg-green-600"></div>
          </div>
          <small>The password must have at least:</small>
          <div>
            <div className="flex items-center gap-1">
              {errors.password === undefined ? (
                <>
                  <Circle size={19} />
                  <small>1 uppercase letters</small>
                </>
              ) : errors.password?.type === "hasUpperCase" ? (
                <>
                  <CircleX size={19} className="text-red-500" />
                  <small className="text-red-500">1 uppercase letter</small>
                </>
              ) : (
                <>
                  <CircleCheck size={19} className="text-green-600" />
                  <small>1 uppercase letter</small>
                </>
              )}
            </div>

            <div className="flex items-center gap-1">
              {errors.password === undefined ? (
                <>
                  <Circle size={19} />
                  <small>1 lowercase letter</small>
                </>
              ) : errors.password?.type === "hasLowerCase" ? (
                <>
                  <CircleX size={19} className="text-red-500" />
                  <small className="text-red-500">1 lowercase letter</small>
                </>
              ) : (
                <>
                  <CircleCheck size={19} className="text-green-600" />
                  <small>1 lowercase letter</small>
                </>
              )}
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-4 w-4 items-center justify-center rounded-full border bg-green-600">
                <Check />
              </div>
              <div className="flex h-4 w-4 items-center justify-center rounded-full border bg-red-500">
                <X />
              </div>
              <small>1 number</small>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-4 w-4 items-center justify-center rounded-full border bg-green-600">
                <Check />
              </div>
              <div className="flex h-4 w-4 items-center justify-center rounded-full border bg-red-500">
                <X />
              </div>
              <small>1 special character (e.g., ! % & @ #)</small>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-4 w-4 items-center justify-center rounded-full border bg-green-600">
                <Check />
              </div>
              <div className="flex h-4 w-4 items-center justify-center rounded-full border bg-red-500">
                <X />
              </div>
              <small>12 characters in total</small>
            </div>
          </div>
        </div>

        <Label htmlFor="remember-me-checkbox">
          <input
            type="checkbox"
            id="remember-me-checkbox"
            {...register("rememberMeCheckbox")}
          />
          Remember me
        </Label>

        <Label htmlFor="agree-checkbox">
          <input
            type="checkbox"
            id="agree-checkbox"
            {...register("agreeCheckbox")}
          />
          <p>
            I agree to the <Link to="#">Terms of Service</Link>. For more
            information about HawkTrack's privacy practices, see the{" "}
            <Link to="#">HawkTrack Privacy Statement</Link>. We'll occasionally
            send you account-related emails.
          </p>
        </Label>
        <FieldErrorMsg>{errors.agreeCheckbox?.message}</FieldErrorMsg>

        <PrimaryButton disabled={isSubmitting}>
          {isSubmitting ? (
            <div className="flex justify-center gap-2">
              <LoaderCircle className="animate-spin" /> <span>Register</span>
            </div>
          ) : (
            "Register"
          )}
        </PrimaryButton>
      </form>
      <p>
        Already have an account?{" "}
        <Link
          className="underline hover:rounded-[var(--border-radius)] hover:bg-amber-100"
          to="/"
        >
          Login
        </Link>
      </p>
    </LoginFlowWrapper>
  );
}
