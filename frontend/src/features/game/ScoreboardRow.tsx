import styles from "./Game.module.css";

type ScoreboardRowProps = {
    position: number;
    username: string;
    score: number;
};

export default function ScoreboardRow({position, username, score}: ScoreboardRowProps) {
    return (
        <tr className={`${styles.scoreboardRow} ${styles.scoreboardRowBorder}`}>
            <td className={styles.scoreboardTablePositionColumn}>{position}</td>
            <td className={styles.scoreboardTableUsernameColumn}>{username}</td>
            <td className={styles.scoreboardTableScoreColumn}>{score}</td>
        </tr>
    );
}
