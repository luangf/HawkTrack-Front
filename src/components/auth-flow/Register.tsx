import useRegister from "@/hooks/auth-flow/useRegister";
import { Eye, EyeClosed, LoaderCircle } from "lucide-react";
import { Link } from "react-router-dom";
import AuthenticateHeader from "./AuthenticateHeader";
import AuthenticateWith from "./AuthenticateWith";
import OrDivide from "./OrDivide";
import ErrorFinalMsg from "../general/ErrorFinalMsg";
import Label from "../general/Label";
import FieldErrorMsg from "../general/FieldErrorMsg";
import PrimaryButton from "../general/PrimaryButton";
import Google from "@/assets/google.svg";
import GitHub from "@/assets/github.svg";
import ProgressRegisterVerification from "./ProgressRegisterVerification";

export default function Register() {
  const {
    passwordVisible,
    loginFailError,
    register,
    handleSubmit,
    errors,
    isSubmitting,
    handleRegister,
    handlePasswordVisible,
    watch,
  } = useRegister();

  const watchPassword = watch("password", "");

  return (
    <>
      <AuthenticateHeader>Register</AuthenticateHeader>
      <AuthenticateWith type="google">
        <img width="34" src={Google} alt="Logo of Google" />
        Register with Google
      </AuthenticateWith>
      <AuthenticateWith type="github">
        <img width="34" src={GitHub} alt="Logo of Google" />
        Register with GitHub
      </AuthenticateWith>
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
          {/* <FieldErrorMsg>{errors.password?.message}</FieldErrorMsg> */}
        </div>

        <ProgressRegisterVerification watchPassword={watchPassword} />

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
    </>
  );
}
