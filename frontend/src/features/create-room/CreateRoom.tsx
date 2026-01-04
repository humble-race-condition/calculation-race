function CreateRoom() {
    return (
        <div className="main">
            <h1 className="panel-title">Create a room</h1>
            <div className="room-form-container">
                <div className="room-name-container">
                    <label htmlFor="room-name" className="base-label">Name your room?</label>
                    <input type="text" id="room-name" placeholder="Enter room name" className="base-text-input"/>
                </div>
                <div className="room-type-container">
                    <p className="base-label">Type of room?
                        Select game type
                    </p>
                    <div>
                        <input className="room-type-input" type="radio" id="red" name="color"/>
                        <label className="room-type-label" htmlFor="red">Cooperative</label>
                        <input className="room-type-input" type="radio" id="blue" name="color"/>
                        <label className="room-type-label" htmlFor="blue">Competitive</label>
                    </div>
                </div>
                <div className="room-button-container">
                    <button type="button" className="button">Create room</button>
                </div>
            </div>
        </div>
    );
}

export default CreateRoom;