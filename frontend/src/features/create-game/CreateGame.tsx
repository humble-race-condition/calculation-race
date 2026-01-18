import styles from "./CreateGame.module.css";
import PanelTitle from "../../shared/panel-title/PanelTitle.tsx";
import Button from "../../shared/button/Button.tsx";
import LabeledTextInput from "../../shared/text-input/LabeledTextInput.tsx";
import {useDispatch} from "react-redux";
import React, {useState} from "react";
import {createSetField} from "../../shared/set-state-utilities/setStateUtility.ts";
import {GameTypes} from "../../shared/constants.ts";

export interface CreateGameState {
    name: string;
    hostName: string;
    type: GameTypes.COMPETITIVE_TYPE | GameTypes.COOPERATIVE_TYPE;
}

export default function CreateGame() {
    const gameTypeKey: string = "type";
    const dispatch = useDispatch();
    const [gameDetails, setState] = useState<CreateGameState>({
        name: "",
        hostName: "",
        type: GameTypes.COOPERATIVE_TYPE,
    });

    const setField = createSetField<CreateGameState>(setState);

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
                               id={GameTypes.COOPERATIVE_TYPE}
                               name={gameTypeKey}
                               checked={GameTypes.COOPERATIVE_TYPE === gameDetails.type}
                               value={GameTypes.COOPERATIVE_TYPE}
                               onChange={(e) => setField(gameTypeKey, e.target.value)}
                        />
                        <label className={styles.gameTypeLabel} htmlFor={GameTypes.COOPERATIVE_TYPE}>Cooperative</label>
                        <input className={styles.gameTypeInput}
                               type="radio"
                               id={GameTypes.COMPETITIVE_TYPE}
                               name={gameTypeKey}
                               checked={GameTypes.COMPETITIVE_TYPE === gameDetails.type}
                               value={GameTypes.COMPETITIVE_TYPE}
                               onChange={(e) => setField(gameTypeKey, e.target.value)}
                        />
                        <label className={styles.gameTypeLabel} htmlFor={GameTypes.COMPETITIVE_TYPE}>Competitive</label>
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                    <Button text={"Create game"} onClick={handleClick}/>
                </div>
            </form>
        </div>
    );
}
