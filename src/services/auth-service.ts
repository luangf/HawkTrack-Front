import { ForgotPasswordSchema } from "../pages/public/forgot-pass/ForgotPasswordPage";
import { LoginSchema } from "../pages/public/LoginPage";
import { RegisterSchema } from "../pages/public/RegisterPage";
import { api } from "./api-config";

const ENDPOINT_URL: string = "/auth";

export async function login(data: LoginSchema) {
    return await api.post(`${ENDPOINT_URL}/login`, data);
}

export async function register(data: RegisterSchema) {
    return await api.post(`${ENDPOINT_URL}/register`, data);
}

export async function forgotPassword(data: ForgotPasswordSchema) {
    return await api.post(`${ENDPOINT_URL}/forgot`, data);
}