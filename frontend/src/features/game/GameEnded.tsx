import styles from "./Game.module.css";
import Button from "../../shared/button/Button.tsx";
import React from "react";

export default function GameEnded() {
    return (
        <div className={styles.gameContainer}>
            <div className={styles.gameEndingScoreContainer}>
                <p className={styles.gameEnding}>The game has ended, PLAYER_NAME!</p>
                <p className={styles.gameEnding}>Yours score</p>
                <p className={styles.gameEndingResult}>75</p>
                <p className={styles.gameEnding}>Room score</p>
                <p className={styles.gameEndingResult}>125</p>
            </div>
            <div className={`${styles.buttonContainer} ${styles.nextGameContainerFlex}`}>
                <Button text={"New game?"}/>
            </div>
        </div>
    );
}
