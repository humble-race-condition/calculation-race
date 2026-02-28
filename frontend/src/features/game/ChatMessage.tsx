import styles from "./Game.module.css";

interface ChatMessageProps {
    player: string;
    message: string;
}

export default function ChatMessage({player, message}: ChatMessageProps) {
    return (
        <div className={styles.chatMessage}>
            <strong>{player}</strong>: {message}
        </div>
    );
}
