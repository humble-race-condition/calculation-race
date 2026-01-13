import styles from "./CreateGame.module.css";
import PanelTitle from "../../shared/panel-title/PanelTitle.tsx";
import Button from "../../shared/button/Button.tsx";
import TextInput from "../../shared/text-input/TextInput.tsx";
import {useDispatch} from "react-redux";
import React, {useState} from "react";

export interface CreateGameState {
    name: string | null;
    type: string | null;
}

export default function CreateGame() {
    const dispatch = useDispatch();
    const [gameDetails, setGameDetails] = useState<CreateGameState>();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGameDetails(prevState => ({...prevState, name: e.target.value}));
    };

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        dispatch({})
    };

    return (
        <div className={styles.main}>
            <PanelTitle title={"Create a game"}/>
            <form className={styles.gameFormContainer}>
                <div className={styles.gameNameContainer}>
                    <label htmlFor="game-name" className={styles.gameLabel}>Name your game?</label>
                    <TextInput id={"game-name"}
                               placeholder={"Enter game name"}
                               value={gameDetails.name}
                               onChange={handleInputChange}
                    />
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
                    <Button text={"Create game"} onClick={handleClick}/>
                </div>
            </form>
        </div>
    );
}
