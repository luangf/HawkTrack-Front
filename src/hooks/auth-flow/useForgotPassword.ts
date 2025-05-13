import { forgotPasswordSchema, ForgotPasswordSchema } from "@/schemas/forgotPasswordSchema";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthMutate } from "./useAuthMutate";

export default function useForgotPassword() {
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