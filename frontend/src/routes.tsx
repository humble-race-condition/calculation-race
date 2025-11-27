import {createBrowserRouter} from "react-router";
import App from "./App";
import Navbar from "./navbar/Navbar";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        children: [

        ]
    },
]);

export default router;