import styles from "./Game.module.css";
import Button from "../../shared/button/Button.tsx";
import TextInput from "../../shared/text-input/TextInput.tsx";
import React, {useEffect, useState} from "react";



export default function FunctionCalculationContainer() {
    const [timer, setTimer] = useState<number>(180);

    const formatTimer = () => {
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = seconds.toString().padStart(2, '0');
        return `${formattedMinutes}:${formattedSeconds}`;
    }

    useEffect(() => {
        if (timer <= 0) {
            return;
        }

        const timeout = setTimeout(() => {
            setTimer(prevState => prevState - 1);
        }, 1000);

        return () => {
            clearTimeout(timeout);
        };
    }, [timer, setTimer]);

    return (
        <div className={styles.gameContainer}>
            <h2 className={styles.gameTimer}>{formatTimer()}</h2>
            <h2 className={styles.gameFormula}>This is the mighty formula</h2>
            <form className={styles.submitResultContainer}>
                <TextInput
                    id={"submit-result-input"}
                    placeholder={"Enter your result here"}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        e.preventDefault();
                    }}
                />
                <div className={styles.buttonContainer}>
                    <Button text={"Submit"}/>
                </div>
            </form>
        </div>
    );
}
