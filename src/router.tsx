import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/private/HomePage";
import TestsPage from "./pages/private/TestsPage";
import ErrorPage from "./pages/public/ErrorPage";
import LoginPage from "./pages/public/LoginPage";
import RegisterPage from "./pages/public/RegisterPage";
import ForgotPasswordPage from "./pages/public/forgot-pass/ForgotPasswordPage";
import ForgotPasswordPage2 from "./pages/public/forgot-pass/ForgotPasswordPage2";
import ForgotPasswordPage3 from "./pages/public/forgot-pass/ForgotPasswordPage3";

export const router = createBrowserRouter([
  { path: "/", element: <LoginPage />, errorElement: <ErrorPage /> },
  { path: "/home", element: <HomePage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/forgot", element: <ForgotPasswordPage /> },
  { path: "/forgot2", element: <ForgotPasswordPage2 /> },
  { path: "/forgot3", element: <ForgotPasswordPage3 /> },
  { path: "/tests", element: <TestsPage /> },
]);
