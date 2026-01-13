import styles from "./Game.module.css";
import PanelTitle from "../../shared/panel-title/PanelTitle.tsx";
import PanelDescription from "../../shared/panel-description/PanelDescription.tsx";
import FunctionCalculationContainer from "./FunctionCalculationContainer.tsx";

export default function GamePanel() {
    return (
        <div className={styles.game}>
            <PanelTitle title={"How fast can you calculate?"}/>
            <PanelDescription title={"You must calculate the given formula and submit the result to win this game!"}/>
            <div className="game-container">
                <FunctionCalculationContainer/>
            </div>
        </div>
    );
}