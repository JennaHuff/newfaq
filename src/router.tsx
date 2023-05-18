import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import ErrorPage from "./pages/errors/ErrorPage";
import Faq from "./pages/faq/Faq";
import Forum from "./pages/forum/Forum";
import { faqLoader, forumLoader } from "./services/supabase/loaders";

// unsure which of the two ways is best, second allows prop-passing but redeclares the router every time it is called

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Navigate to="/faq/" replace />,
            },
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

            {
                path: "forum",
                element: <Forum />,
                loader: forumLoader,
            },
        ],
    },
]);

export default () => <RouterProvider router={router} />;
// export default function RouterComponent() {
//     const router = createBrowserRouter([
//         {
//             path: "/",
//             element: <MainLayout />,
//             errorElement: <ErrorPage />,
//             children: [
//                 {
//                     path: "/",
//                     element: <Navigate to="/faq/" replace />,
//                 },
//                 {
//                     path: "faq/",
//                     element: <Faq />,
//                     loader: faqLoader,
//                     children: [
//                         {
//                             path: ":id",
//                             element: <Faq />,
//                             loader: faqLoader,
//                         },
//                     ],
//                 },

//                 {
//                     path: "forum",
//                     element: <Forum />,
//                     loader: forumLoader,
//                 },
//             ],
//         },
//     ]);
//     return <RouterProvider router={router} />;
// }
