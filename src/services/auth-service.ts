import { RegisterSchema } from "@/schemas/registerSchema";
import { api } from "./api-config";
import { ForgotPasswordSchema } from "@/schemas/forgotPasswordSchema";
import { LoginSchema } from "@/schemas/loginSchema";

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

export async function logout() {
    return await api.post(`${ENDPOINT_URL}/logout`);
}