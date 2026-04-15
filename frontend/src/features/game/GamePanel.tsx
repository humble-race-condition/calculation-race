import styles from "./Game.module.css";
import PanelTitle from "../../shared/panel-title/PanelTitle.tsx";
import PanelDescription from "../../shared/panel-description/PanelDescription.tsx";
import type {GameDetails} from "../../config/store/game.ts";
import {resetGame} from "../../config/store/game.ts";
import {useSelector, useDispatch} from "react-redux";
import type {RootState} from "../../config/store/storeConfiguration.ts";
import HostLobby from "./HostLobby.tsx";
import PlayerLobby from "./PlayerLobby.tsx";
import LobbyCounter from "./LobbyCounter.tsx";
import {GameState, UrlPath} from "../../shared/constants.ts";
import FunctionCalculationContainer from "./FunctionCalculationContainer.tsx";
import GameEnded from "./GameEnded.tsx";
import PanelTitleWithExitButton from "../../shared/panel-title/PanelTitleWithExitButton";
import {useNavigate} from "react-router";

export default function GamePanel() {
    const globalGameDetails: GameDetails | null = useSelector((state: RootState) => state.gameSlice.game);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let view = null;
    switch (globalGameDetails?.state) {
        case GameState.LOBBY:
            view = globalGameDetails.isHost ? <HostLobby/> : <PlayerLobby/>;
            break;
        case GameState.LOADING:
            view = <LobbyCounter/>;
            break;
        case GameState.RUNNING:
            view = <FunctionCalculationContainer/>;
            break;
        case GameState.ENDED:
            view = <GameEnded/>;
            break;
    }

    return (
        <div className={styles.game}>
            <PanelTitleWithExitButton
                title={"How fast can you calculate?"}
                onClick={() => {
                    dispatch(resetGame());
                    navigate(UrlPath.HOME_PATH);
                }}
            />
            <PanelDescription title={"You must calculate the given formula and submit the result to win this game!"}/>
            <div className={styles.gameContainer}>
                {view}
            </div>
        </div>
    );
}