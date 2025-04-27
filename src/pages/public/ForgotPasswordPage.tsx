import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import AuthenticateHeader from "../../components/AuthenticateHeader";
import { useState } from "react";
import ErrorFinalMsg from "../../components/ErrorFinalMsg";
import Label from "../../components/Label";
import FieldErrorMsg from "../../components/FieldErrorMsg";
import PrimaryButton from "../../components/PrimaryButton";
import { LoaderCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuthMutate } from "../../hooks/useAuthMutate";
import LoginFlowWrapper from "../../components/LoginFlowWrapper";

const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .max(254, { message: "Email must be at most 254 characters" })
    .email({ message: "Email invalid" }),
});

export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;

function ForgotPasswordPage() {
  const [loginFailError, setLoginFailError] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const { mutateForgotPasswordPost } = useAuthMutate();

  function onSubmit(data: ForgotPasswordSchema) {
    mutateForgotPasswordPost.mutate(data, {
      onSuccess: (response) => {
        console.log(response);
      },
      onError: () => {
        setLoginFailError(true);
      },
    });
  }

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
        Return to Login Page
      </Link>
    </LoginFlowWrapper>
  );
}

export default ForgotPasswordPage;
