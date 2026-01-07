import styles from "./Game.module.css";
import PanelTitle from "../../shared/panel-title/PanelTitle.tsx";

export default function Scoreboard() {
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