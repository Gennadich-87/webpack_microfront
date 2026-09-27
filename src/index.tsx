import {createRoot} from "react-dom/client";
import App from "./components/app/App";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {AboutLazy} from "@/pages/about/About.lazy";
import {Shop} from "@/pages/shop";
import {Suspense} from "react";


const root = document.getElementById('root');

if(!root) {
    throw new Error("root is undefined");
}

const container = createRoot(root)

let router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/about",
                element: <Suspense fallback={"Loading..."}><AboutLazy/></Suspense>
            },
            {
                path: "/shop",
                element: <Suspense  fallback={"Loading..."}><Shop/></Suspense>
            }
            ]
    },
]);


container.render(
    <RouterProvider router={router} />
)