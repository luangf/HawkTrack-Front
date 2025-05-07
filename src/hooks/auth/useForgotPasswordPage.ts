import { forgotPasswordSchema, ForgotPasswordSchema } from "@/schemas/forgotPasswordSchema";
import { useState } from "react";
import { useAuthMutate } from "@/hooks/auth/useAuthMutate";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function useForgotPasswordPage() {
    const [loginFailError, setLoginFailError] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<ForgotPasswordSchema>({
        resolver: zodResolver(forgotPasswordSchema),
    });

    const { mutateForgotPasswordPost } = useAuthMutate();

    function handleForgot(data: ForgotPasswordSchema) {
        mutateForgotPasswordPost.mutate(data, {
            onSuccess: (response) => {
                console.log(response);
            },
            onError: () => {
                setLoginFailError(true);
            },
        });
    }
    return { loginFailError, register, handleSubmit, errors, isSubmitting, handleForgot }
}