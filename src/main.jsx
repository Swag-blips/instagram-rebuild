import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from "./pages/auth/login/Login";
import Signup from "./pages/auth/signup/Signup";
import { Toaster } from "react-hot-toast";
import UserProvider from "../context/UserContext";
import Home from "./pages/home/Home";
import RootLayout from "./layout/RootLayout";
import PublicRoute from "../routes/PublicRoute";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: (
          <PublicRoute>
            <Home />
          </PublicRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
      <Toaster />
    </UserProvider>
  </StrictMode>
);
