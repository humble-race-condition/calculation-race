import {createBrowserRouter} from "react-router";
import Layout from "../../shared/layout/Layout";
import Navbar from "../../shared/navbar/Navbar";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Navbar/>,
                children: [

                ]
            },
        ]
    },
]);

export default router;