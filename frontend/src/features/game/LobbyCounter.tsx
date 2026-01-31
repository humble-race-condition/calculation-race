import styles from "./Game.module.css";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {startGame} from "../../config/store/game.ts";

export default function LobbyCounter() {
    const [counter, setCounter] = useState<number>(3);
    const dispatch = useDispatch();

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
            <h1 className={styles.counter}
                onClick={() => dispatch(startGame())}>{counter}..</h1>
        </>
    );
}
