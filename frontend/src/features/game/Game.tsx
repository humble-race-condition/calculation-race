import styles from './Game.module.css';
import PanelDescription from "../../shared/panel-description/PanelDescription.tsx";
import PanelTitle from "../../shared/panel-title/PanelTitle.tsx";
import Scoreboard from "./Scoreboard.tsx";
import Button from "../../shared/button/Button.tsx";
import TextInput from "../../shared/text-input/TextInput.tsx";

function Chat() {
    return (
        <div className={styles.chat}>
            <PanelTitle title={"Collaborate?"}/>
            <div className={styles.chatContainerParentContainer}>
                <div className={`${styles.chatMessagesContainer} ${styles.scrollbarContainer}`}>
                    <div className={styles.chatMessage}>User1: Hello there</div>
                    <div className={styles.chatMessage}>User2: Whats appppppssssssssssssssss</div>
                    <div className={styles.chatMessage}>User3: Whats appppppssssssssssssssss. HERE WE GO
                        AGAINNNNNNNNNNNNNNNNNNNNNN
                    </div>
                    <div className={styles.chatMessage}>User3: Whats appppppssssssssssssssss. HERE WE GO
                        AGAINNNNNNNNNNNNNNNNNNNNNN
                    </div>
                    <div className={styles.chatMessage}>User3: Whats appppppssssssssssssssss. HERE WE GO
                        AGAINNNNNNNNNNNNNNNNNNNNNN
                    </div>
                    <div className={styles.chatMessage}>User3: Whats appppppssssssssssssssss. HERE WE GO
                        AGAINNNNNNNNNNNNNNNNNNNNNN
                    </div>
                    <div className={styles.chatMessage}>User3: Whats appppppssssssssssssssss. HERE WE GO
                        AGAINNNNNNNNNNNNNNNNNNNNNN
                    </div>
                    <div className={styles.chatMessage}>User3: Whats appppppssssssssssssssss. HERE WE GO
                        AGAINNNNNNNNNNNNNNNNNNNNNN
                    </div>
                    <div className={styles.chatMessage}>User3: Whats appppppssssssssssssssss. HERE WE GO
                        AGAINNNNNNNNNNNNNNNNNNNNNN
                    </div>
                    <div className={styles.chatMessage}>User3: Whats appppppssssssssssssssss. HERE WE GO
                        AGAINNNNNNNNNNNNNNNNNNNNNN
                    </div>
                    <div className={styles.chatMessage}>User3: Whats appppppssssssssssssssss. HERE WE GO
                        AGAINNNNNNNNNNNNNNNNNNNNNN
                    </div>
                    <div className={styles.chatMessage}>User3: Whats appppppssssssssssssssss. HERE WE GO
                        AGAINNNNNNNNNNNNNNNNNNNNNN
                    </div>
                </div>
            </div>
            <div className={styles.chatInputContainer}>
                <label>
                    <textarea className={styles.chatInput} placeholder="Want to collaborate?"></textarea>
                </label>
            </div>
        </div>
    );
}

export function GamePanel() {
    return (
        <div className={styles.game}>
            <PanelTitle title={"How fast can you calculate?"}/>
            <PanelDescription title={"You must calculate the given formula and submit the result to win this game!"}/>
            <h2 className={styles.gameFormula}>This is the mighty formula</h2>
            <div className={styles.submitResultContainer}>
                <label htmlFor="submit-result-input"> </label>
                <TextInput id={"submit-result-input"} placeholder={"Enter your result here"}/>
                <Button text={"Submit the Result"}/>
            </div>
        </div>
    );
}

export default function Game() {
    return (
        <div className={styles.main}>
            <Scoreboard/>
            <GamePanel/>
            <Chat/>
        </div>);
}
