import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import SignUp from "../pages/SignUp";
import ProductPage from "../pages/ProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/products",
    element: <ProductPage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
