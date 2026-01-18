import styles from './JoinGame.module.css';
import PanelTitle from "../../shared/panel-title/PanelTitle.tsx";
import Button from "../../shared/button/Button.tsx";
import LabeledTextInput from "../../shared/text-input/LabeledTextInput.tsx";
import PanelDescription from "../../shared/panel-description/PanelDescription.tsx";

export default function JoinGame() {
    return (
        <div className={styles.main}>
            <PanelTitle title={"How fast can you calculate?"}/>
            <PanelDescription title={"You must calculate the given formula and submit the result to win this game!"}/>
            <div className={styles.formContainer}>
                <LabeledTextInput
                    placeholder={"Game name"}
                    id={"game-name-input"}
                    label={'Join game?'}

                />
                <LabeledTextInput
                    placeholder={"Game name"}
                    id={"player-name-input"}
                    label={'Player name?'}

                />
                <div className={styles.buttonContainer}>
                    <Button text={"Join Game"}/>
                </div>
            </div>
        </div>
    );
}
