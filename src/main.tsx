import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Faq from "./pages/faq/Faq";
import Forum from "./pages/forum/Forum";
import MainLayout from "./components/layout/MainLayout";
import { faqLoader, forumLoader } from "./services/supabase/loaders";
import "./index.css";
import ErrorPage from "./pages/errors/ErrorPage";
import App from "./App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "faq/",
                element: <Faq />,
                loader: faqLoader,
                children: [
                    {
                        path: ":id",
                        element: <Faq />,
                        loader: faqLoader,
                    },
                ],
            },

            { path: "forum", element: <Forum />, loader: forumLoader },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
    <React.StrictMode>
        <App>
            <RouterProvider router={router} />
        </App>
    </React.StrictMode>
);
