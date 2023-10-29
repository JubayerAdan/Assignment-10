import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Layout/Main.jsx";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login.jsx";
import Signup from "./components/SignUp/Signup.jsx";
import AuthProvider, { AuthContext } from "./Firebase/AuthProvider.jsx";
import Recipes from "./components/Recipes/Recipes.jsx";
import PrivateRoutes from "./components/Shared/PrivateRoutes.jsx";
import Chef from "./components/Chef/Chef.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
      {
        path: "/recipes",
        element: (
          <PrivateRoutes>
            {" "}
            <Recipes></Recipes>
          </PrivateRoutes>
        ),
        loader: () => fetch("http://localhost:3000/recipe"),
      },
      {
        path: "chef/:id",
        element: (
          <PrivateRoutes>
            <Chef></Chef>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/chefs/${params.id}`),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
