import {createBrowserRouter} from "react-router";
import Layout from "../../shared/layout/Layout";
import CreateRoom from "../../features/create-room/CreateRoom.tsx";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <CreateRoom/>,
                children: []
            },
        ]
    },
]);

export default router;