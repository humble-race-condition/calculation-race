import styles from "./Game.module.css";
import Button from "../../shared/button/Button.tsx";
import TextInput from "../../shared/text-input/TextInput.tsx";

export default function FunctionCalculationContainer() {
    return (
        <>
            <h2 className={styles.gameFormula}>This is the mighty formula</h2>
            <form className={styles.submitResultContainer}>
                <label htmlFor="submit-result-input"> </label>
                <TextInput id={"submit-result-input"} placeholder={"Enter your result here"}/>
                <Button text={"Submit the Result"}/>
            </form>
        </>
    );
}
