import { registerSchema, RegisterSchema } from "@/schemas/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuthMutate } from "@/components/auth-flow/useAuthMutate";

export default function useRegister() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [loginFailError, setLoginFailError] = useState(false);
    const { mutateRegisterPost } = useAuthMutate();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        setFocus,
        formState: { errors, isSubmitting },
    } = useForm<RegisterSchema>({ resolver: zodResolver(registerSchema) });

    function handleRegister(data: RegisterSchema): void {
        mutateRegisterPost.mutate(data, {
            onSuccess: (response) => {
                sessionStorage.setItem("username", response.data.username);
                sessionStorage.setItem("auth-token", response.data.token);
                navigate("/category");
            },
            onError: () => {
                setLoginFailError(true);
            },
        });
    }

    function handlePasswordVisible() {
        setPasswordVisible((prevPasswordVisible) => !prevPasswordVisible);
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

    return { passwordVisible, loginFailError, register, handleSubmit, errors, isSubmitting, handleRegister, handlePasswordVisible }
}