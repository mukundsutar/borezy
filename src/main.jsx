import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Landing from "./components/Landing.jsx";
import LoginNew from "./components/LoginNew.jsx";

function Layout() {
  return (
    <>
      <div className="flex h-screen w-screen flex-col items-center">
        <Navbar />
        <div className="h-full w-[80%] bg-amber-100">
          <Outlet />
        </div>
      </div>
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/auth",
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/landing",
    element: <Landing />,
  },
  {
    path: "/login",
    element: <LoginNew />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
