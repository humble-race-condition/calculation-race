import styles from "./CreateGame.module.css";
import PanelTitle from "../../shared/panel-title/PanelTitle.tsx";
import Button from "../../shared/button/Button.tsx";
import TextInput from "../../shared/text-input/TextInput.tsx";

export default function CreateGame() {
    return (
        <div className={styles.main}>
            <PanelTitle title={"Create a room"}/>
            <div className={styles.roomFormContainer}>
                <div className={styles.roomNameContainer}>
                    <label htmlFor="room-name" className={styles.roomLabel}>Name your room?</label>
                    <TextInput id={"room-name"} placeholder={"Enter room name"}/>
                </div>
                <div className={styles.roomTypeContainer}>
                    <p className={styles.roomLabel}>Type of room? Select game type</p>
                    <div>
                        <input className={styles.roomTypeInput} type="radio" id="red" name="color"/>
                        <label className={styles.roomTypeLabel} htmlFor="red">Cooperative</label>
                        <input className={styles.roomTypeInput} type="radio" id="blue" name="color"/>
                        <label className={styles.roomTypeLabel} htmlFor="blue">Competitive</label>
                    </div>
                </div>
                <div className={styles.roomButtonContainer}>
                    <Button text={"Create room"}/>
                </div>
            </div>
        </div>
    );
}
