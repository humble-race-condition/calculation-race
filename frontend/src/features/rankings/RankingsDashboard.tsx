import styles from './RankingsDashboard.module.css';
import PanelTitle from "../../shared/panel-title/PanelTitle.tsx";
import SmallButton from "../../shared/button/SmallButton.tsx";
import TableRow from "./TableRow.tsx";
import React, {useState} from "react";

export interface RankingRecord {
    id: string;
    position: string;
    player: string;
    game: string;
    playerScore: string;
    gameScore: string;
}

interface RankingsDashboardState {
    playerFilter: string;
    gameFilter: string;
    page: number;
    rankings: RankingRecord[];
}

export default function RankingsDashboard() {
    const [state, setState] = useState<RankingsDashboardState>(
        {
            playerFilter: "",
            gameFilter: "",
            page: 1,
            rankings: [
                {
                    id: "1",
                    position: "1",
                    player: "Gosho",
                    game: "Treska",
                    playerScore: "15",
                    gameScore: "25"
                },
                {
                    id: "2",
                    position: "1",
                    player: "Gosho",
                    game: "Treska",
                    playerScore: "15",
                    gameScore: "25"
                },
                {
                    id: "3",
                    position: "1",
                    player: "Gosho",
                    game: "Treska",
                    playerScore: "15",
                    gameScore: "25"
                },
            ]
        }
    );

    const handleDecrementPage = () => {
        if (state.page <= 1) {
            return;
        }

        setState((prevState) => (
            {
                ...prevState,
                page: prevState.page - 1
            }
        ));
    }

    const handleIncrementPage = () => {
        setState((prevState) => (
            {
                ...prevState,
                page: prevState.page + 1
            }
        ));
    }

    const handlePlayerFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState((prevState) => (
            {
                ...prevState,
                playerFilter: e.target.value
            }
        ));
    }

    const handleGameFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState((prevState) => (
            {
                ...prevState,
                gameFilter: e.target.value
            }
        ));
    }

    return (
        <div className={styles.main}>
            <PanelTitle title={'Rankings'}/>
            <form className={styles.filterContainer}>
                <label htmlFor="player-filter" className={styles.filterLabel}>
                    <input type="text"
                           id="player-filter"
                           placeholder="Player"
                           className={styles.filterInput}
                           value={state.playerFilter}
                           onChange={handlePlayerFilterChange}
                    />
                </label>
                <label htmlFor="game-filter" className={styles.filterLabel}>
                    <input type="text"
                           id="game-filter"
                           placeholder="Game"
                           className={styles.filterInput}
                           value={state.gameFilter}
                           onChange={handleGameFilterChange}
                    />
                </label>
                <SmallButton text={"Search"} onClick={() => null}/>
            </form>
            <div className={styles.rankingsTableContainer}>
                <table className={styles.rankingsTable}>
                    <thead>
                    <tr className={styles.rankingsRow}>
                        <th className={styles.rankingsTableEndColumn}>Position</th>
                        <th className={styles.rankingsTableColumn}>Player</th>
                        <th className={styles.rankingsTableColumn}>Game</th>
                        <th className={styles.rankingsTableColumn}>Player Score</th>
                        <th className={styles.rankingsTableEndColumn}>Room Score</th>
                    </tr>
                    </thead>
                    <tbody>
                    {state.rankings.map((ranking) => (<TableRow {...ranking} key={ranking.id}/>))}
                    </tbody>
                </table>
                <div className={styles.rankingsPageContainer}>
                    <SmallButton text={"Previous"} onClick={handleDecrementPage}/>
                    <div className="page-number">{state.page}</div>
                    <SmallButton text={"Next"} onClick={handleIncrementPage}/>
                </div>
            </div>
        </div>
    );
}
