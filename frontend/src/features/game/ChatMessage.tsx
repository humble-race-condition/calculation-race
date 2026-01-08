import styles from "./Game.module.css";

interface ChatMessageProps {
    message: string;
}

export default function ChatMessage({message}: ChatMessageProps) {
    return (
        <div className={styles.chatMessage}>{message}</div>
    );
}
