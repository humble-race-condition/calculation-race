import styles from './Game.module.css';

function Game() {
    return (
        <>
            <div className={styles.scoreboard}>
                <h1 className="panel-title">Scoreboard</h1>
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
                    <div className={`${styles.scoreboardBodyTableParentContainer} ${styles.scrollbarContainer}`}>
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
            <div className={styles.main}>
                <h1 className="panel-title">How fast can you calculate?</h1>
                <p className="panel-description">You must calculate the given formula and submit the result to win this
                    game!</p>
                <h2 className={styles.mainFormula}>This is the mighty formula</h2>
                <div className={styles.submitResultContainer}>
                    <label htmlFor="submit-result-input"> </label>
                    <input type="text" placeholder="Enter your result here" id="submit-result-input"
                           className="base-text-input"/>
                    <button type="button" className="main-button button">Submit the Result</button>
                </div>
            </div>
            <div className={styles.chat}>
                <h1 className="panel-title">Collaborate?</h1>
                <div className={styles.chatContainerParentContainer}>
                    <div className={`${styles.chatMessage} ${styles.scrollbarContainer}`}>
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
        </>);
}

export default Game;