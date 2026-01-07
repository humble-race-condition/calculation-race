import styles from './Game.module.css';
import {PanelTitle} from "../../shared/panel-title/PanelTitle.tsx";

function Scoreboard() {
    return (
        <div className={styles.scoreboard}>
            <PanelTitle title={"Scoreboard"}/>
            <div className={styles.scoreboardHeaderTableContainer}>
                <table className={styles.scoreboardTable}>
                    <thead>
                    <tr className={`${styles.scoreboardRow} ${styles.scoreboardHeaderRow}`}>
                        <th className={styles.scoreboardTablePositionColumn}>Position</th>
                        <th className={styles.scoreboardTableUsernameColumn}>Username</th>
                        <th className={styles.scoreboardTableScoreColumn}>Score</th>
                    </tr>
                    </thead>
                </table>
            </div>
            <div className={styles.scoreboardBodyTableParentContainer}>
                <div className={`${styles.scoreboardBodyTableContainer} ${styles.scrollbarContainer}`}>
                    <table className={styles.scoreboardTable}>
                        <tbody>
                        <tr className={`${styles.scoreboardRow} ${styles.scoreboardRowBorder}`}>
                            <td className={styles.scoreboardTablePositionColumn}>1</td>
                            <td className={styles.scoreboardTableUsernameColumn}>Gosho</td>
                            <td className={styles.scoreboardTableScoreColumn}>15</td>
                        </tr>
                        <tr className={`${styles.scoreboardRow} ${styles.scoreboardRowBorder}`}>
                            <td className={styles.scoreboardTablePositionColumn}>2</td>
                            <td className={styles.scoreboardTableUsernameColumn}>ToshoTodorov</td>
                            <td className={styles.scoreboardTableScoreColumn}>1</td>
                        </tr>
                        <tr className={`${styles.scoreboardRow} ${styles.scoreboardRowBorder}`}>
                            <td className={styles.scoreboardTablePositionColumn}>321</td>
                            <td className={styles.scoreboardTableUsernameColumn}>Gosho123</td>
                            <td className={styles.scoreboardTableScoreColumn}>15</td>
                        </tr>
                        <tr className={`${styles.scoreboardRow} ${styles.scoreboardRowBorder}`}>
                            <td className={styles.scoreboardTablePositionColumn}>4</td>
                            <td className={styles.scoreboardTableUsernameColumn}>Gosho</td>
                            <td className={styles.scoreboardTableScoreColumn}>125</td>
                        </tr>
                        <tr className={`${styles.scoreboardRow} ${styles.scoreboardRowBorder}`}>
                            <td className={styles.scoreboardTablePositionColumn}>4</td>
                            <td className={styles.scoreboardTableUsernameColumn}>Gosho</td>
                            <td className={styles.scoreboardTableScoreColumn}>125</td>
                        </tr>
                        <tr className={`${styles.scoreboardRow} ${styles.scoreboardRowBorder}`}>
                            <td className={styles.scoreboardTablePositionColumn}>4</td>
                            <td className={styles.scoreboardTableUsernameColumn}>Gosho</td>
                            <td className={styles.scoreboardTableScoreColumn}>125</td>
                        </tr>
                        <tr className={`${styles.scoreboardRow} ${styles.scoreboardRowBorder}`}>
                            <td className={styles.scoreboardTablePositionColumn}>4</td>
                            <td className={styles.scoreboardTableUsernameColumn}>Gosho</td>
                            <td className={styles.scoreboardTableScoreColumn}>125</td>
                        </tr>
                        <tr className={`${styles.scoreboardRow} ${styles.scoreboardRowBorder}`}>
                            <td className={styles.scoreboardTablePositionColumn}>4</td>
                            <td className={styles.scoreboardTableUsernameColumn}>Gosho</td>
                            <td className={styles.scoreboardTableScoreColumn}>125</td>
                        </tr>
                        <tr className={`${styles.scoreboardRow} ${styles.scoreboardRowBorder}`}>
                            <td className={styles.scoreboardTablePositionColumn}>4</td>
                            <td className={styles.scoreboardTableUsernameColumn}>Gosho</td>
                            <td className={styles.scoreboardTableScoreColumn}>125</td>
                        </tr>
                        <tr className={`${styles.scoreboardRow} ${styles.scoreboardRowBorder}`}>
                            <td className={styles.scoreboardTablePositionColumn}>4</td>
                            <td className={styles.scoreboardTableUsernameColumn}>Gosho</td>
                            <td className={styles.scoreboardTableScoreColumn}>125</td>
                        </tr>
                        <tr className={`${styles.scoreboardRow} ${styles.scoreboardRowBorder}`}>
                            <td className={styles.scoreboardTablePositionColumn}>4</td>
                            <td className={styles.scoreboardTableUsernameColumn}>Gosho</td>
                            <td className={styles.scoreboardTableScoreColumn}>125</td>
                        </tr>
                        <tr className={`${styles.scoreboardRow} ${styles.scoreboardRowBorder}`}>
                            <td className={styles.scoreboardTablePositionColumn}>4</td>
                            <td className={styles.scoreboardTableUsernameColumn}>Gosho</td>
                            <td className={styles.scoreboardTableScoreColumn}>125</td>
                        </tr>
                        <tr className={`${styles.scoreboardRow} ${styles.scoreboardRowBorder}`}>
                            <td className={styles.scoreboardTablePositionColumn}>4</td>
                            <td className={styles.scoreboardTableUsernameColumn}>Gosho</td>
                            <td className={styles.scoreboardTableScoreColumn}>125</td>
                        </tr>
                        <tr className={`${styles.scoreboardRow} ${styles.scoreboardRowBorder}`}>
                            <td className={styles.scoreboardTablePositionColumn}>4</td>
                            <td className={styles.scoreboardTableUsernameColumn}>Gosho</td>
                            <td className={styles.scoreboardTableScoreColumn}>125</td>
                        </tr>
                        <tr className={`${styles.scoreboardRow} ${styles.scoreboardRowBorder}`}>
                            <td className={styles.scoreboardTablePositionColumn}>4</td>
                            <td className={styles.scoreboardTableUsernameColumn}>Gosho</td>
                            <td className={styles.scoreboardTableScoreColumn}>125</td>
                        </tr>
                        <tr className={`${styles.scoreboardRow} ${styles.scoreboardRowBorder}`}>
                            <td className={styles.scoreboardTablePositionColumn}>4</td>
                            <td className={styles.scoreboardTableUsernameColumn}>Gosho</td>
                            <td className={styles.scoreboardTableScoreColumn}>125</td>
                        </tr>
                        <tr className={`${styles.scoreboardRow} ${styles.scoreboardRowBorder}`}>
                            <td className={styles.scoreboardTablePositionColumn}>4</td>
                            <td className={styles.scoreboardTableUsernameColumn}>Gosho</td>
                            <td className={styles.scoreboardTableScoreColumn}>125</td>
                        </tr>
                        <tr className={`${styles.scoreboardRow} ${styles.scoreboardRowBorder}`}>
                            <td className={styles.scoreboardTablePositionColumn}>4</td>
                            <td className={styles.scoreboardTableUsernameColumn}>Gosho</td>
                            <td className={styles.scoreboardTableScoreColumn}>125</td>
                        </tr>
                        <tr className={`${styles.scoreboardRow} ${styles.scoreboardRowBorder}`}>
                            <td className={styles.scoreboardTablePositionColumn}>4</td>
                            <td className={styles.scoreboardTableUsernameColumn}>Gosho</td>
                            <td className={styles.scoreboardTableScoreColumn}>125</td>
                        </tr>
                        <tr className={`${styles.scoreboardRow} ${styles.scoreboardRowBorder}`}>
                            <td className={styles.scoreboardTablePositionColumn}>4</td>
                            <td className={styles.scoreboardTableUsernameColumn}>Gosho</td>
                            <td className={styles.scoreboardTableScoreColumn}>125</td>
                        </tr>
                        <tr className={`${styles.scoreboardRow} ${styles.scoreboardRowBorder}`}>
                            <td className={styles.scoreboardTablePositionColumn}>4</td>
                            <td className={styles.scoreboardTableUsernameColumn}>Gosho</td>
                            <td className={styles.scoreboardTableScoreColumn}>125</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
}

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

function MainGamePanel() {
    return (
        <div className={styles.game}>
            <PanelTitle title={'How fast can you calculate?'}/>
            <p className="panel-description">You must calculate the given formula and submit the result to win this
                game!</p>
            <h2 className={styles.gameFormula}>This is the mighty formula</h2>
            <div className={styles.submitResultContainer}>
                <label htmlFor="submit-result-input"> </label>
                <input type="text" placeholder="Enter your result here" id="submit-result-input"
                       className="base-text-input"/>
                <button type="button" className="button">Submit the Result</button>
            </div>
        </div>
    );
}

function Game() {
    return (
        <div className={styles.main}>
            <Scoreboard/>
            <MainGamePanel/>
            <Chat/>
        </div>);
}

{/*//ToDo all buttons should be a shared component, so no need for their css.*/
}
export default Game;