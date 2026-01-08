import styles from './Game.module.css';
import PanelTitle from "../../shared/panel-title/PanelTitle.tsx";
import Scoreboard from "./Scoreboard.tsx";
import GamePanel from "./GamePanel.tsx";
import ChatMessage from "./ChatMessage.tsx";

interface Message {
    id: string;
    message: string;
}

export function Chat() {
    const messages: Message[] = [
        {
            id: "1",
            message: "User1: Hello there"
        },
        {
            id: "2",
            message: "User2: Whats appppppssssssssssssssss"
        },
        {
            id: "3",
            message: "User3: Whats appppppssssssssssssssss. HERE WE GO AGAINNNNNNNNNNNNNNNNNNNNNN"
        },
        {
            id: "4",
            message: "User3: Whats appppppssssssssssssssss. HERE WE GO AGAINNNNNNNNNNNNNNNNNNNNNN"
        },
        {
            id: "5",
            message: "User3: Whats appppppssssssssssssssss. HERE WE GO AGAINNNNNNNNNNNNNNNNNNNNNN"
        },
        {
            id: "6",
            message: "User3: Whats appppppssssssssssssssss. HERE WE GO AGAINNNNNNNNNNNNNNNNNNNNNN"
        },
        {
            id: "7",
            message: "User3: Whats appppppssssssssssssssss. HERE WE GO AGAINNNNNNNNNNNNNNNNNNNNNN"
        },
        {
            id: "8",
            message: "User3: Whats appppppssssssssssssssss. HERE WE GO AGAINNNNNNNNNNNNNNNNNNNNNN"
        },
        {

            id: "9",
            message: "User3: Whats appppppssssssssssssssss. HERE WE GO AGAINNNNNNNNNNNNNNNNNNNNNN"
        },
        {
            id: "10",
            message: "User3: Whats appppppssssssssssssssss. HERE WE GO AGAINNNNNNNNNNNNNNNNNNNNNN"
        }
    ];
    return (
        <div className={styles.chat}>
            <PanelTitle title={"Collaborate?"}/>
            <div className={styles.chatContainerParentContainer}>
                <div className={`${styles.chatMessagesContainer} ${styles.scrollbarContainer}`}>
                    {messages.map((message) => <ChatMessage message={message.message} key={message.id}/>)}
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

export default function Game() {
    return (
        <div className={styles.main}>
            <Scoreboard/>
            <GamePanel/>
            <Chat/>
        </div>);
}
