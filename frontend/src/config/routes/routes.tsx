import {createBrowserRouter} from "react-router";
import Layout from "../../shared/layout/Layout";
import CreateRoom from "../../features/create-room/CreateRoom.tsx";
import Game from "../../features/game/Game.tsx";
import JoinRoom from "../../features/join-room/JoinRoom.tsx";
import {Paths} from "../../shared/paths.ts";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: Paths.HOME_PATH,
                element: <CreateRoom/>,
                children: []
            },
            {
                path: Paths.CREATE_ROOM_PATH,
                element: <CreateRoom/>,
                children: []
            },
            {
                path: Paths.GAME_PATH,
                element: <Game/>,
                children: []
            },
            {
                path: Paths.JOIN_ROOM_PATH,
                element: <JoinRoom/>,
                children: []
            },
            //ToDo catch all route and page
        ]
    },
]);

export default router;