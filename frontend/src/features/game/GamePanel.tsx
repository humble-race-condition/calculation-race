import styles from "./Game.module.css";
import PanelTitle from "../../shared/panel-title/PanelTitle.tsx";
import PanelDescription from "../../shared/panel-description/PanelDescription.tsx";
import type {GameDetails} from "../../config/store/game.ts";
import {useSelector} from "react-redux";
import type {RootState} from "../../config/store/storeConfiguration.ts";
import HostLobby from "./HostLobby.tsx";
import PlayerLobby from "./PlayerLobby.tsx";
import LobbyCounter from "./LobbyCounter.tsx";
import {GameState} from "../../shared/constants.ts";
import FunctionCalculationContainer from "./FunctionCalculationContainer.tsx";

export default function GamePanel() {
    const globalGameDetails: GameDetails | null = useSelector((state: RootState) => state.gameSlice.game);

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
    }

    return (
        <div className={styles.game}>
            <PanelTitle title={"How fast can you calculate?"}/>
            <PanelDescription title={"You must calculate the given formula and submit the result to win this game!"}/>
            <div className={styles.gameContainer}>
                {view}
            </div>
        </div>
    );
}