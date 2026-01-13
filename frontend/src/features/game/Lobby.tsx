import Button from "../../shared/button/Button.tsx";

interface LobbyProps {
    isHost: boolean
}

export default function Lobby(props: LobbyProps) {
    return (
        <>
            {props.isHost && (<Button text={"Start game"}/>)}
            {!props.isHost && (<Button text={"Leave lobby"}/>)}
        </>
    );
}
