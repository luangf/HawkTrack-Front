import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/public/ErrorPage";
import HomePage from "./pages/private/HomePage";
import LoginPage from "./pages/public/LoginPage";
import RegisterPage from "./pages/public/RegisterPage";
import ForgotPasswordPage from "./pages/public/ForgotPasswordPage";
import PosForgotPasswordPage from "./pages/public/PosForgotPasswordPage";
import TestsPage from "./pages/private/TestsPage";

export const router = createBrowserRouter([
  { path: "/", element: <LoginPage />, errorElement: <ErrorPage /> },
  { path: "/home", element: <HomePage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/forgot", element: <ForgotPasswordPage /> },
  { path: "/pos-forgot", element: <PosForgotPasswordPage /> },
  { path: "/tests", element: <TestsPage /> },
]);
