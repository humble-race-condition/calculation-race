import styles from './JoinGame.module.css';
import PanelTitle from "../../shared/panel-title/PanelTitle.tsx";
import Button from "../../shared/button/Button.tsx";
import TextInput from "../../shared/text-input/TextInput.tsx";
import PanelDescription from "../../shared/panel-description/PanelDescription.tsx";
import {UrlPath} from "../../shared/constants.ts";
import {toast} from "react-toastify";
import React, {useEffect} from "react";
import {useSetStateField} from "../../shared/set-state-utilities/setStateFieldHook.ts";
import {type GameDetails, joinGame} from "../../config/store/game.ts";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../../config/store/storeConfiguration.ts";
import {useNavigate} from "react-router";

export interface JoinGameState {
    gameName: string;
    playerName: string;
}

export default function JoinGame() {
    const {state, setField} = useSetStateField<JoinGameState>({
        gameName: "",
        playerName: ""
    });

    const dispatch = useDispatch();
    const globalGameDetails: GameDetails | null = useSelector((state: RootState) => state.gameSlice.game);
    const navigate = useNavigate();

    useEffect(() => {
        if (globalGameDetails) {
            const path = UrlPath.GAME_PATH.replace(":id", globalGameDetails.id);
            navigate(path);
        }
    }, [globalGameDetails, navigate]);

    const isStateValid = (): boolean => {
        const errors: string[] = [];
        if (!state.gameName || state.gameName.length < 3 || state.gameName.length > 50) {
            errors.push("Game name must be between 3 and 50 characters.");
        }

        if (!state.playerName || state.playerName.length < 3 || state.playerName.length > 50) {
            errors.push("Player name must be between 3 and 50 characters.");
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

        dispatch(joinGame(state.playerName));
        //ToDo create call
        navigate(`/game/${state.gameName}`);
    };

    return (
        <div className={styles.main}>
            <PanelTitle title={"How fast can you calculate?"}/>
            <PanelDescription title={"You must calculate the given formula and submit the result to win this game!"}/>
            <div className={styles.formContainer}>
                <TextInput
                    id={"game-name"}
                    placeholder={"Game name"}
                    value={state.gameName}
                    label={'Join game?'}
                    additionalContainerStyle={styles.textInputContainerFlex}
                    onChange={e => setField("gameName", e.target.value)}
                />
                <TextInput
                    id={"player-name"}
                    placeholder={"Player name"}
                    value={state.playerName}
                    label={'Player name?'}
                    additionalContainerStyle={styles.textInputContainerFlex}
                    onChange={e => setField("playerName", e.target.value)}
                />
                <div className={styles.buttonContainer}>
                    <Button text={"Join Game"} onClick={handleClick}/>
                </div>
            </div>
        </div>
    );
}
