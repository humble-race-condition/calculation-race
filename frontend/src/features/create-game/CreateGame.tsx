import styles from "./CreateGame.module.css";
import PanelTitle from "../../shared/panel-title/PanelTitle.tsx";
import Button from "../../shared/button/Button.tsx";
import LabeledTextInput from "../../shared/text-input/LabeledTextInput.tsx";
import {useDispatch} from "react-redux";
import React, {useCallback, useEffect, useState} from "react";
import {createSetField} from "../../shared/set-state-utilities/setStateUtility.ts";
import {Constants, GameType} from "../../shared/constants.ts";
import {useSearchParams} from "react-router";

export interface CreateGameState {
    name: string;
    hostName: string;
    type: string;
}

export default function CreateGame() {
    const gameTypeKey: string = "type";
    const dispatch = useDispatch();
    const [gameDetails, setState] = useState<CreateGameState>({
        name: "",
        hostName: "",
        type: GameType.COOPERATIVE_TYPE,
    });

    const setField = useCallback(
        <K extends keyof CreateGameState>(key: K, value: CreateGameState[K]) =>
            createSetField<CreateGameState>(setState)(key, value),
        [setState]);

    const [searchParams, setSearchParams] = useSearchParams();
    const gameType = searchParams.get(Constants.GAME_TYPE_KEY);

    useEffect(() => {
        if (gameType) {
            setField("type", gameType);
        }
    }, [gameType, setField]);

    useEffect(() => {
        setSearchParams(prev => {
            const params = new URLSearchParams(prev);
            params.set(Constants.GAME_TYPE_KEY, gameDetails.type);
            return params;
        });
    }, [gameDetails.type, setSearchParams]);


    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
    };
    debugger;
    return (
        <div className={styles.main}>
            <PanelTitle title={"Create a game"}/>
            <form className={styles.formContainer}>
                <LabeledTextInput id={"game-name"}
                                  placeholder={"Enter game name"}
                                  value={gameDetails.name}
                                  label={'Name your game?'}
                                  onChange={e => setField("name", e.target.value)}
                />
                <LabeledTextInput id={"player-name"}
                                  placeholder={"Enter player name"}
                                  value={gameDetails.hostName}
                                  label={'Player name?'}
                                  onChange={e => setField("hostName", e.target.value)}
                />
                <div className={styles.gameTypeContainer}>
                    <p className={styles.gameLabel}>Type of game? Select game type</p>
                    <div>
                        <input className={styles.gameTypeInput}
                               type="radio"
                               id={GameType.COOPERATIVE_TYPE}
                               name={gameTypeKey}
                               checked={GameType.COOPERATIVE_TYPE === gameDetails.type}
                               value={GameType.COOPERATIVE_TYPE}
                               onChange={(e) => setField(gameTypeKey, e.target.value)}
                        />
                        <label className={styles.gameTypeLabel} htmlFor={GameType.COOPERATIVE_TYPE}>Cooperative</label>
                        <input className={styles.gameTypeInput}
                               type="radio"
                               id={GameType.COMPETITIVE_TYPE}
                               name={gameTypeKey}
                               checked={GameType.COMPETITIVE_TYPE === gameDetails.type}
                               value={GameType.COMPETITIVE_TYPE}
                               onChange={(e) => setField(gameTypeKey, e.target.value)}
                        />
                        <label className={styles.gameTypeLabel} htmlFor={GameType.COMPETITIVE_TYPE}>Competitive</label>
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                    <Button text={"Create game"} onClick={handleClick}/>
                </div>
            </form>
        </div>
    );
}
