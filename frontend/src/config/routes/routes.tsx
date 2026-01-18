import {createBrowserRouter} from "react-router";
import Layout from "../../shared/layout/Layout";
import CreateGame from "../../features/create-game/CreateGame.tsx";
import Game from "../../features/game/Game.tsx";
import JoinGame from "../../features/join-game/JoinGame.tsx";
import {Path} from "../../shared/constants.ts";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: Path.HOME_PATH,
                element: <CreateGame/>,
                children: []
            },
            {
                path: Path.CREATE_GAME_PATH,
                element: <CreateGame/>,
                children: []
            },
            {
                path: Path.GAME_PATH,
                element: <Game/>,
                children: []
            },
            {
                path: Path.JOIN_GAME_PATH,
                element: <JoinGame/>,
                children: []
            },
            //ToDo catch all route and page
        ]
    },
]);

export default router;