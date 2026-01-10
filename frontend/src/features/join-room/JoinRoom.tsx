interface JoinRoomProps {

}

export default function JoinRoom(props: JoinRoomProps) {
    return (
        <div className="main">
            <h1 className="panel-title">How fast can you calculate?</h1>
            <p className="panel-description">You must calculate the given formula and submit the result to win this
                game!</p>
            <div className="room-form-container">
                <label className="base-label" htmlFor="room-name-input">Join room?</label>
                <input className="base-text-input" type="text" id="room-name-input" placeholder="Room name"/>
                <button className="button" type="button">Join room</button>
            </div>
        </div>
    );
}
