import {createBrowserRouter} from "react-router";
import Layout from "../../shared/layout/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            // {
            //     path: "/",
            //     element: <Navbar/>,
            //     children: [
            //
            //     ]
            // },
        ]
    },
]);

export default router;