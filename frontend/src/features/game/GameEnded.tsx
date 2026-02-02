import styles from "./Game.module.css";
import Button from "../../shared/button/Button.tsx";
import {type GameDetails, resetGame} from "../../config/store/game.ts";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../../config/store/storeConfiguration.ts";
import {useNavigate} from "react-router";
import {UrlPath} from "../../shared/constants.ts";

export default function GameEnded() {
    const globalGameDetails: GameDetails | null = useSelector((state: RootState) => state.gameSlice.game);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    

    return (
        <div className={styles.gameContainer}>
            <div className={styles.gameEndingScoreContainer}>
                <p className={styles.gameEnding}>The game has ended, {globalGameDetails?.player}!</p>
                <p className={styles.gameEnding}>Yours score</p>
                <p className={styles.gameEndingResult}>75</p>
                <p className={styles.gameEnding}>Room score</p>
                <p className={styles.gameEndingResult}>125</p>
            </div>
            <div className={`${styles.buttonContainer} ${styles.nextGameContainerFlex}`}>
                <Button text={"New game?"} onClick={() => {
                    dispatch(resetGame());
                    navigate(UrlPath.HOME_PATH);
                }} />
            </div>
        </div>
    );
}
