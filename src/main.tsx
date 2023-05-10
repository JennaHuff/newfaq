import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Faq from "./components/Faq/Faq";
import Forum from "./components/Forum/Forum";
import Root from "./routes/root";
import {
    FaqLoader,
    ForumLoader,
} from ".//components/DatabaseInteractions/Loaders";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "faq/",
                element: <Faq />,
                loader: FaqLoader,
                children: [
                    {
                        path: ":id",
                        element: <Faq />,
                        loader: FaqLoader,
                    },
                ],
            },

            { path: "forum", element: <Forum />, loader: ForumLoader },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
