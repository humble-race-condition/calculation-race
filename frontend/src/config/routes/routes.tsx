import {createBrowserRouter} from "react-router";
import Layout from "../../shared/layout/Layout";
import CreateRoom from "../../features/create-room/CreateRoom.tsx";
import Game from "../../features/game/Game.tsx";
import JoinRoom from "../../features/join-room/JoinRoom.tsx";

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
                path: "/game",
                element: <Game/>,
                children: []
            },
            {
                path: "/join-room",
                element: <JoinRoom/>,
                children: []
            },
        ]
    },
]);

export default router;