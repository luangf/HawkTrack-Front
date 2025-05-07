import { loginSchema, LoginSchema } from "@/schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuthMutate } from "./useAuthMutate";

export default function useLoginPage() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [loginFailError, setLoginFailError] = useState(false);
    const { mutateLoginPost } = useAuthMutate();
    const navigate = useNavigate();

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

    function handleLogin(data: LoginSchema) {
        mutateLoginPost.mutate(data, {
            onSuccess: (response) => {
                sessionStorage.setItem("username", response.data.username);
                sessionStorage.setItem("auth-token", response.data.token);
                navigate("/category", {
                    state: { showToast: true },
                });
            },
            onError: () => {
                setLoginFailError(true);
            },
        });
    }

    function handlePasswordVisible() {
        setPasswordVisible((prevState) => !prevState);
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

    return { passwordVisible, loginFailError, register, handleSubmit, errors, isSubmitting, handleLogin, handlePasswordVisible }
}