import styles from './JoinRoom.module.css';
import PanelTitle from "../../shared/panel-title/PanelTitle.tsx";
import Button from "../../shared/button/Button.tsx";
import TextInput from "../../shared/text-input/TextInput.tsx";
import PanelDescription from "../../shared/panel-description/PanelDescription.tsx";

interface JoinRoomProps {
}

export default function JoinRoom(props: JoinRoomProps) {
    return (
        <div className={styles.main}>
            <PanelTitle title={"How fast can you calculate?"}/>
            <PanelDescription title={"You must calculate the given formula and submit the result to win this game!"}/>
            <div className={styles.roomFormContainer}>
                <label className={styles.roomLabel} htmlFor="room-name-input">Join room?</label>
                <TextInput placeholder={"Room name"} id={"room-name-input"}/>
                <Button text={"Join Room"}/>
            </div>
        </div>
    );
}
