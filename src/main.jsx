import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Products from "./routes/Products.jsx";
import ProductId from "./routes/ProductId.jsx";
import ProductEdit from "./routes/ProductEdit.jsx";
import CreateProdut from "./routes/createProduct.jsx";
import ErrorPage from "./components/Error-page.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/productos",
    element: <Products />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/productos/:id",
    element: <ProductId />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/productos/edit/:id",
    element: <ProductEdit />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/productos/create",
    element: <CreateProdut />,
    errorElement: <ErrorPage />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
