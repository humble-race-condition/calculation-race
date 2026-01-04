import styles from "./CreateRoom.module.css";

function CreateRoom() {
    return (
        <div className="main">
            <h1 className="panel-title">Create a room</h1>
            <div className={styles.roomFormContainer}>
                <div className={styles.roomNameContainer}>
                    <label htmlFor="room-name" className="base-label">Name your room?</label>
                    <input type="text" id="room-name" placeholder="Enter room name" className="base-text-input"/>
                </div>
                <div className={styles.roomTypeContainer}>
                    <p className="base-label">Type of room?
                        Select game type
                    </p>
                    <div>
                        <input className={styles.roomTypeInput} type="radio" id="red" name="color"/>
                        <label className={styles.roomTypeLabel} htmlFor="red">Cooperative</label>
                        <input className={styles.roomTypeInput} type="radio" id="blue" name="color"/>
                        <label className={styles.roomTypeLabel} htmlFor="blue">Competitive</label>
                    </div>
                </div>
                <div className={styles.roomButtonContainer}>
                    <button type="button" className="button">Create room</button>
                </div>
            </div>
        </div>
    );
}

export default CreateRoom;