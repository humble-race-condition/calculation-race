import styles from './RankingsDashboard.module.css';

export interface RankingRecordData {
    position: string;
    player: string;
    game: string;
    playerScore: string;
    gameScore: string;
}

export default function TableRow(props: RankingRecordData) {
    return (
        <tr className={styles.rankingsRow}>
            <td className={styles.rankingsTableEndColumn}>{props.position}</td>
            <td className={styles.rankingsTableColumn}>{props.player}</td>
            <td className={styles.rankingsTableColumn}>{props.game}</td>
            <td className={styles.rankingsTableColumn}>{props.playerScore}</td>
            <td className={styles.rankingsTableEndColumn}>{props.gameScore}</td>
        </tr>
    );
}
