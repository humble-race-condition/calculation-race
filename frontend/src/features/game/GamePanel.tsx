import styles from "./Game.module.css";
import PanelTitle from "../../shared/panel-title/PanelTitle.tsx";
import PanelDescription from "../../shared/panel-description/PanelDescription.tsx";
import FunctionCalculationContainer from "./FunctionCalculationContainer.tsx";
import type {GameDetails} from "../../config/store/game.ts";
import {useSelector} from "react-redux";
import type {RootState} from "../../config/store/storeConfiguration.ts";
import HostLobby from "./HostLobby.tsx";
import PlayerLobby from "./PlayerLobby.tsx";

export default function GamePanel() {
    const globalGameDetails: GameDetails | null = useSelector((state: RootState) => state.gameSlice.game);

    const hasStarted = !!globalGameDetails?.hasStarted;
    const isHostAndIsLobby = !!(!globalGameDetails?.hasStarted && globalGameDetails?.isHost);
    const isPlayerAndIsLobby = !globalGameDetails?.hasStarted && !globalGameDetails?.isHost;
    
    return (
        <div className={styles.game}>
            <PanelTitle title={"How fast can you calculate?"}/>
            <PanelDescription title={"You must calculate the given formula and submit the result to win this game!"}/>
            <div className={styles.gameContainer}>
                {isHostAndIsLobby && <HostLobby/>}
                {isPlayerAndIsLobby && <PlayerLobby/>}
                {hasStarted && <FunctionCalculationContainer/>}
            </div>
        </div>
    );
}