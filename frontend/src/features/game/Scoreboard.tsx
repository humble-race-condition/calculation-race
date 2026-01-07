import styles from "./Game.module.css";
import PanelTitle from "../../shared/panel-title/PanelTitle.tsx";
import ScoreboardRow from "./ScoreboardRow.tsx";

interface ScoreboardRowValue {
    id: string;
    position: number;
    username: string;
    score: number;
}

export default function Scoreboard() {
    const values: ScoreboardRowValue[] = [
        {
            id: "1",
            position: 1,
            username: "Gosho",
            score: 15
        },
        {
            id: "2",
            position: 2,
            username: "Customize Toolbar…",
            score: 1
        },
        {
            id: "3",
            position: 321,
            username: "Gosho123",
            score: 15
        },
        {
            id: "4",
            position: 4,
            username: "Gosho",
            score: 125
        },
        {
            id: "4",
            position: 4,
            username: "Gosho",
            score: 125
        },
        {
            id: "4",
            position: 4,
            username: "Gosho",
            score: 125
        },
        {
            id: "4",
            position: 4,
            username: "Gosho",
            score: 125
        },
        {
            id: "4",
            position: 4,
            username: "Gosho",
            score: 125
        },
        {
            id: "4",
            position: 4,
            username: "Gosho",
            score: 125
        },
        {
            id: "4",
            position: 4,
            username: "Gosho",
            score: 125
        },
        {
            id: "4",
            position: 4,
            username: "Gosho",
            score: 125
        },
        {
            id: "4",
            position: 4,
            username: "Gosho",
            score: 125
        },
        {
            id: "4",
            position: 4,
            username: "Gosho",
            score: 125
        },
        {
            id: "4",
            position: 4,
            username: "Gosho",
            score: 125
        },
        {
            id: "4",
            position: 4,
            username: "Gosho",
            score: 125
        },
        {
            id: "4",
            position: 4,
            username: "Gosho",
            score: 125
        },
        {
            id: "4",
            position: 4,
            username: "Gosho",
            score: 125
        },
        {
            id: "4",
            position: 4,
            username: "Gosho",
            score: 125
        },
        {
            id: "4",
            position: 4,
            username: "Gosho",
            score: 125
        },
        {
            id: "4",
            position: 4,
            username: "Gosho",
            score: 125
        },
        {
            id: "4",
            position: 4,
            username: "Gosho",
            score: 125
        },
        {
            id: "4",
            position: 4,
            username: "Gosho",
            score: 125
        },
        {
            id: "4",
            position: 4,
            username: "Gosho",
            score: 125
        },
        {
            id: "4",
            position: 4,
            username: "Gosho",
            score: 125
        },
        {
            id: "4",
            position: 4,
            username: "Gosho",
            score: 125
        },
        {
            id: "4",
            position: 4,
            username: "Gosho",
            score: 125
        },
        {
            id: "4",
            position: 4,
            username: "Gosho",
            score: 125
        },
        {
            id: "4",
            position: 4,
            username: "Gosho",
            score: 125
        },
        {
            id: "4",
            position: 4,
            username: "Gosho",
            score: 125
        },
        {
            id: "4",
            position: 4,
            username: "Gosho",
            score: 125
        },
        {
            id: "4",
            position: 4,
            username: "Gosho",
            score: 125
        },
        {
            id: "4",
            position: 4,
            username: "Gosho",
            score: 125
        },
        {
            id: "4",
            position: 4,
            username: "Gosho",
            score: 125
        },
        {
            id: "4",
            position: 4,
            username: "Gosho",
            score: 125
        },
        {
            id: "4",
            position: 4,
            username: "Gosho",
            score: 125
        },
        {
            id: "4",
            position: 4,
            username: "Gosho",
            score: 125
        },
        {
            id: "4",
            position: 4,
            username: "Gosho",
            score: 125
        },
        {
            id: "4",
            position: 4,
            username: "Gosho",
            score: 125
        },
        {
            id: "4",
            position: 4,
            username: "Gosho",
            score: 125
        },
        {
            id: "4",
            position: 4,
            username: "Gosho",
            score: 125
        },
        {
            id: "4",
            position: 4,
            username: "Gosho",
            score: 125
        },
        {
            id: "4",
            position: 4,
            username: "Gosho",
            score: 125
        },
        {
            id: "4",
            position: 4,
            username: "Gosho",
            score: 125
        },
        {
            id: "4",
            position: 4,
            username: "Gosho",
            score: 125
        }
    ];

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
                        {values.map((value) => <ScoreboardRow {...value} key={value.id}/>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
