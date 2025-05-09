import { createBrowserRouter } from "react-router-dom";
import TestsPage from "./pages/private/TestsPage";
import ErrorPage from "./pages/public/ErrorPage";

import ForgotPassword from "./components/auth-flow/ForgotPassword";
import ForgotPassword2 from "./components/auth-flow/ForgotPassword2";
import ForgotPassword3 from "./components/auth-flow/ForgotPassword3";
import SystemLayout from "./pages/private/SystemLayout";
import Categories from "./components/categories/Categories";
import Items from "./components/items/Items";
import PublicLayout from "./pages/public/PublicLayout";
import Login from "./components/auth-flow/Login";
import Register from "./components/auth-flow/Register";

export const router = createBrowserRouter([
  {
    path: "/category",
    element: <SystemLayout />,
    children: [
      { path: "", element: <Categories /> },
      { path: ":id", element: <Items /> },
    ],
  },
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { path: "", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "forgot", element: <ForgotPassword /> },
      { path: "forgot2", element: <ForgotPassword2 /> },
      { path: "forgot3", element: <ForgotPassword3 /> },
    ],
    errorElement: <ErrorPage />,
  },
  { path: "/tests", element: <TestsPage /> },
]);
