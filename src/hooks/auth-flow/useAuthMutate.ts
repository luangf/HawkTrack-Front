import { useMutation } from "@tanstack/react-query";
import { forgotPassword, login, logout, register } from "../../services/auth-service";

export function useAuthMutate() {
    const mutateLoginPost = useMutation({
        mutationFn: login
    });

    const mutateRegisterPost = useMutation({
        mutationFn: register
    });

    const mutateForgotPasswordPost = useMutation({
        mutationFn: forgotPassword
    });

    const mutateLogoutPost = useMutation({
        mutationFn: logout
    });

    return { mutateLoginPost, mutateRegisterPost, mutateForgotPasswordPost,mutateLogoutPost };
}