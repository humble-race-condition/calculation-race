import {createBrowserRouter} from "react-router";
import Layout from "../../shared/layout/Layout";
import CreateGame from "../../features/create-game/CreateGame.tsx";
import Game from "../../features/game/Chat.tsx";
import JoinGame from "../../features/join-game/JoinGame.tsx";
import {UrlPath} from "../../shared/constants.ts";
import ErrorPage from "../../features/error-page/ErrorPage.tsx";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: UrlPath.HOME_PATH,
                element: <CreateGame/>,
                children: []
            },
            {
                path: UrlPath.CREATE_GAME_PATH,
                element: <CreateGame/>,
                children: []
            },
            {
                path: UrlPath.GAME_PATH,
                element: <Game/>,
                children: []
            },
            {
                path: UrlPath.JOIN_GAME_PATH,
                element: <JoinGame/>,
                children: []
            },
            {
                path: UrlPath.ERROR_PATH,
                element: <ErrorPage/>,
            },
        ]
    },
]);

export default router;