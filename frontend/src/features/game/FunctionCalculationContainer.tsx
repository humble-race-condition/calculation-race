import styles from "./Game.module.css";
import Button from "../../shared/button/Button.tsx";
import TextInput from "../../shared/text-input/TextInput.tsx";

export default function FunctionCalculationContainer() {
    return (
        <div className={styles.gameContainer}>
            <h2 className={styles.gameFormula}>This is the mighty formula</h2>
            <form className={styles.submitResultContainer}>
                <TextInput id={"submit-result-input"} placeholder={"Enter your result here"}/>
                <div className={styles.buttonContainer}>
                    <Button text={"Submit"}/>
                </div>
            </form>
        </div>
    );
}
