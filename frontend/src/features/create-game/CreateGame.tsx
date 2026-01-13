import styles from "./CreateGame.module.css";
import PanelTitle from "../../shared/panel-title/PanelTitle.tsx";
import Button from "../../shared/button/Button.tsx";
import TextInput from "../../shared/text-input/TextInput.tsx";

export default function CreateGame() {
    return (
        <div className={styles.main}>
            <PanelTitle title={"Create a game"}/>
            <div className={styles.gameFormContainer}>
                <div className={styles.gameNameContainer}>
                    <label htmlFor="game-name" className={styles.gameLabel}>Name your game?</label>
                    <TextInput id={"game-name"} placeholder={"Enter game name"}/>
                </div>
                <div className={styles.gameTypeContainer}>
                    <p className={styles.gameLabel}>Type of game? Select game type</p>
                    <div>
                        <input className={styles.gameTypeInput} type="radio" id="red" name="color"/>
                        <label className={styles.gameTypeLabel} htmlFor="red">Cooperative</label>
                        <input className={styles.gameTypeInput} type="radio" id="blue" name="color"/>
                        <label className={styles.gameTypeLabel} htmlFor="blue">Competitive</label>
                    </div>
                </div>
                <div className={styles.gameButtonContainer}>
                    <Button text={"Create game"}/>
                </div>
            </div>
        </div>
    );
}
