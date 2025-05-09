import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const api = axios.create({
    baseURL: BASE_URL,
    withCredentials: true
});

/*
api.interceptors.request.use((config) => {
    const token = sessionStorage.getItem("auth-token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
antes de modo com cookie*/

/* erro global, dps fazer
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Redireciona login se o usuário não autenticado
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);
*/