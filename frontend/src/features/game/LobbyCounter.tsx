import styles from "./Game.module.css";
import {useEffect, useState} from "react";

export default function LobbyCounter() {
    const [counter, setCounter] = useState<number>(3);

    useEffect(() => {
        if (counter <= 0) {
            return;
        }

        const timeout = setTimeout(() => {
            setCounter(prevState => prevState - 1);
        }, 1000);

        return () => {
            clearTimeout(timeout);
        };
    }, [counter, setCounter]);

    return (
        <>
            <h1 className={styles.counter}>{counter}..</h1>
        </>
    );
}
