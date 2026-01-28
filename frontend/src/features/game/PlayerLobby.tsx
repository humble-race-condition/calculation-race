import styles from "./Game.module.css";
import Button from "../../shared/button/Button.tsx";
import React from "react";
import {startGame} from "../../config/store/game.ts";
import {useDispatch} from "react-redux";

export default function PlayerLobby() {
    const dispatch = useDispatch();

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();

        dispatch(startGame());
    };

    return (
        <div className={styles.gameContainer}>
            <Button text={"Leave lobby"} onClick={handleClick}/>
        </div>
    );
}
