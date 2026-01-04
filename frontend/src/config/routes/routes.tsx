import {createBrowserRouter} from "react-router";
import Layout from "../../shared/layout/Layout";
import CreateRoom from "../../features/create-room/CreateRoom.tsx";
import Game from "../../features/game/Game.tsx";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <CreateRoom/>,
                children: []
            },
            {
                path: "/join-room",
                element: <Game/>,
                children: []
            },
        ]
    },
]);

export default router;