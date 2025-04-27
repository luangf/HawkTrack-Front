import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import OrDivide from "../../components/OrDivide";
import AuthenticateWith from "../../components/AuthenticateWith";
import AuthenticateHeader from "../../components/AuthenticateHeader";
import ErrorFinalMsg from "../../components/ErrorFinalMsg";
import { Eye, EyeClosed, LoaderCircle } from "lucide-react";
import { useState } from "react";
import Label from "../../components/Label";
import PrimaryButton from "../../components/PrimaryButton";
import FieldErrorMsg from "../../components/FieldErrorMsg";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthMutate } from "../../hooks/useAuthMutate";
import LoginFlowWrapper from "../../components/LoginFlowWrapper";

const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .max(254, { message: "Email must be at most 254 characters" })
    .email({ message: "Email invalid" }),
  password: z
    .string()
    .min(12, { message: "Password must be at least 12 characters" })
    .max(140, { message: "Password must be at most 140 characters" }),
  rememberMeCheckbox: z.boolean(),
});

export type LoginSchema = z.infer<typeof loginSchema>;

function LoginPage() {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const navigate = useNavigate();
  const [loginFailError, setLoginFailError] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "emailtest@gmail.com",
      password: "123456789101112",
    },
  });

  const { mutateLoginPost } = useAuthMutate();

  function onSubmit(data: LoginSchema) {
    mutateLoginPost.mutate(data, {
      onSuccess: (response) => {
        sessionStorage.setItem("username", response.data.username);
        sessionStorage.setItem("auth-token", response.data.token);
        navigate("/home");
      },
      onError: () => {
        setLoginFailError(true);
      },
    });
  }

  function onPasswordVisibleClick() {
    setPasswordVisible((prevState: boolean) => !prevState);
    // * Solução que achei para consertar o cursor indo para o inicio sempre devido ao setFocus do React Hook Form, !melhorar depois / tirar!
    // Usar setTimeout para garantir que o foco e o cursor sejam aplicados após a mudança de estado
    setTimeout(() => {
      const passwordInput = document.getElementById(
        "password",
      ) as HTMLInputElement;
      if (passwordInput) {
        const cursorPosition =
          passwordInput.selectionStart || passwordInput.value.length; // Pega a posição atual do cursor ou final do texto
        setFocus("password");
        passwordInput.setSelectionRange(cursorPosition, cursorPosition); // Restaura a posição do cursor
      }
    }, 0);
  }

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
      {/*<h1>emailtest@gmail.com</h1>
            <h1>123456789101112</h1>*/}
      <form
        className="flex w-full flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
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
              onClick={onPasswordVisibleClick}
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

export default LoginPage;
