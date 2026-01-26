import styles from "./CreateGame.module.css";
import PanelTitle from "../../shared/panel-title/PanelTitle.tsx";
import Button from "../../shared/button/Button.tsx";
import TextInput from "../../shared/text-input/TextInput.tsx";
import {useDispatch, useSelector} from "react-redux";
import React, {useCallback, useEffect, useState} from "react";
import {createSetField} from "../../shared/set-state-utilities/setStateUtility.ts";
import {Constants, GameType} from "../../shared/constants.ts";
import {useNavigate, useSearchParams} from "react-router";
import {toast} from "react-toastify";
import {type GameDetails, initializeGame, type InitializeGameState} from "../../config/store/game.ts";
import type {RootState} from "../../config/store/storeConfiguration.ts";

export interface CreateGameState {
    gameName: string;
    playerName: string;
    gameType: string;
}

export default function CreateGame() {
    const gameTypeKey: keyof CreateGameState = "gameType";
    const dispatch = useDispatch();
    const globalGameDetails: GameDetails | null = useSelector((state: RootState) => state.gameSlice.game);
    const navigate = useNavigate();

    const [state, setState] = useState<CreateGameState>({
        gameName: "",
        playerName: "",
        gameType: GameType.COOPERATIVE_TYPE,
    });

    const setField = useCallback(
        <K extends keyof CreateGameState>(key: K, value: CreateGameState[K]) =>
            createSetField<CreateGameState>(setState)(key, value),
        [setState]);

    const [searchParams, setSearchParams] = useSearchParams();
    const gameType = searchParams.get(Constants.GAME_TYPE_KEY);

    useEffect(() => {
        if (globalGameDetails) {
            navigate(`/game/${globalGameDetails.id}`);
        }
    }, [globalGameDetails, navigate]);

    useEffect(() => {
        if (gameType) {
            setField(gameTypeKey, gameType);
        }
    }, [gameType, setField]);

    useEffect(() => {
        setSearchParams(prev => {
            const params = new URLSearchParams(prev);
            params.set(Constants.GAME_TYPE_KEY, state.gameType);
            return params;
        });
    }, [state.gameType, setSearchParams]);

    const isStateValid = (): boolean => {
        const errors: string[] = [];
        if (!state.gameName || state.gameName.length < 3 || state.gameName.length > 50) {
            errors.push("Game name must be between 3 and 50 characters.");
        }

        if (!state.playerName || state.playerName.length < 3 || state.playerName.length > 50) {
            errors.push("Player name must be between 3 and 50 characters.");
        }

        if (!state.gameType) {
            errors.push("Game type is not valid");
        }

        if (state.gameType && state.gameType !== GameType.COOPERATIVE_TYPE && state.gameType !== GameType.COMPETITIVE_TYPE) {
            errors.push("Game type must be Cooperative or Competitive");
        }

        if (errors.length === 0) {
            return true;
        }

        errors.forEach(error => {
            toast.error(error);
        });

        return false;
    }

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        const isValid = isStateValid();
        if (!isValid) {
            return;
        }

        const initializeGameState: InitializeGameState = {
            playerName: state.playerName,
            //ToDo this needs to be an Id
            gameId: state.gameName,
            gameName: state.gameName,
            gameType: state.gameType,
        }

        dispatch(initializeGame(initializeGameState));
        //ToDo create call
        navigate(`/game/${initializeGameState.gameId}`);
    };

    return (
        <div className={styles.main}>
            <PanelTitle title={"Create a game"}/>
            <form className={styles.formContainer}>
                <TextInput id={"game-name"}
                           placeholder={"Enter game name"}
                           value={state.gameName}
                           label={'Name your game?'}
                           additionalContainerStyle={styles.textInputContainerFlex}
                           onChange={e => setField("gameName", e.target.value)}
                />
                <TextInput id={"player-name"}
                           placeholder={"Enter player name"}
                           value={state.playerName}
                           label={'Player name?'}
                           additionalContainerStyle={styles.textInputContainerFlex}
                           onChange={e => setField("playerName", e.target.value)}
                />
                <div className={styles.gameTypeContainer}>
                    <p className={styles.gameLabel}>Type of game? Select game type</p>
                    <div>
                        <input className={styles.gameTypeInput}
                               type="radio"
                               id={GameType.COOPERATIVE_TYPE}
                               name={gameTypeKey}
                               checked={GameType.COOPERATIVE_TYPE === state.gameType}
                               value={GameType.COOPERATIVE_TYPE}
                               onChange={(e) => setField(gameTypeKey, e.target.value)}
                        />
                        <label className={styles.gameTypeLabel} htmlFor={GameType.COOPERATIVE_TYPE}>Cooperative</label>
                        <input className={styles.gameTypeInput}
                               type="radio"
                               id={GameType.COMPETITIVE_TYPE}
                               name={gameTypeKey}
                               checked={GameType.COMPETITIVE_TYPE === state.gameType}
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
