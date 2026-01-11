import styles from "./Game.module.css";
import PanelTitle from "../../shared/panel-title/PanelTitle.tsx";
import PanelDescription from "../../shared/panel-description/PanelDescription.tsx";
import TextInput from "../../shared/text-input/TextInput.tsx";
import Button from "../../shared/button/Button.tsx";

export default function GamePanel() {
    return (
        <div className={styles.game}>
            <PanelTitle title={"How fast can you calculate?"}/>
            <PanelDescription title={"You must calculate the given formula and submit the result to win this game!"}/>
            <div className={styles.gameContainer}>
                <h2 className={styles.gameFormula}>This is the mighty formula</h2>
                <form className={styles.submitResultContainer}>
                    <label htmlFor="submit-result-input"> </label>
                    <TextInput id={"submit-result-input"} placeholder={"Enter your result here"}/>
                    <Button text={"Submit the Result"}/>
                </form>
            </div>
        </div>
    );
}