import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./About";
import NotFound from "./NotFound";
import { Layout } from "./Layout";
import Home from "./Home";
import Products from "./Products";
import { StyledEngineProvider } from "@mui/material/styles";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "about",
                element: <About />,
            },
            { path: "products", element: <Products /> },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <StyledEngineProvider injectFirst>
            <RouterProvider router={router} />
        </StyledEngineProvider>
    </StrictMode>
);
