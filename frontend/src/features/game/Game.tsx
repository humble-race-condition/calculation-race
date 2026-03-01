import styles from './Game.module.css';
import PanelTitle from "../../shared/panel-title/PanelTitle.tsx";
import Scoreboard from "./Scoreboard.tsx";
import GamePanel from "./GamePanel.tsx";
import {addMessage, type ChatMessage as ChatMessageValue} from "../../config/store/game.ts";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../../config/store/storeConfiguration.ts";
import {useSetStateField} from "../../shared/set-state-utilities/setStateFieldHook.ts";
import ChatMessage from "./ChatMessage.tsx";
import React from "react";
import {toast} from "react-toastify";

interface Message {
    id: string | null;
    player: string;
    message: string;
}

export function Chat() {
    const dispatch = useDispatch();
    const player: string = useSelector((state: RootState) => state.gameSlice.game?.player) ?? "";

    const messages: ChatMessageValue[] =
        useSelector((state: RootState) => state.gameSlice.chatMessages) ?? [];

    const {state, setField} = useSetStateField<Message>({
        id: null,
        player,
        message: ""
    });

    function isStateValid() {
        if (!state.message || state.message.length === 0 || state.message.length > 200) {
            toast.error("Message must be between 1 and 200 characters");
            return false;
        }

        return true;
    }

    //ToDo auto scroll to bottom
    function handleSendMessage() {
        const isValid = isStateValid();
        if (!isValid) {
            return;
        }

        dispatch(addMessage({
            ...state,
            id: "hello",
        }));

        setField("message", "");
    }

    const handleClick = (event: React.MouseEvent) => {
        event.preventDefault();
        handleSendMessage();
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <div className={styles.chat}>
            <PanelTitle title={"Collaborate?"}/>
            <div className={styles.chatContainerParentContainer}>
                <div className={`${styles.chatMessagesContainer} ${styles.scrollbarContainer}`}>
                    {messages.map((message) => <ChatMessage {...message} key={message.id}/>)}
                </div>
            </div>
            <div className={styles.chatInputContainer}>
                <label className={styles.chatLabel} htmlFor="chat-input">
                    <textarea id="chat-input"
                              className={styles.chatInput}
                              placeholder="Want to collaborate?"
                              value={state.message}
                              onChange={(e) => setField("message", e.target.value)}
                              onKeyDown={handleKeyDown}
                    ></textarea>
                </label>
                <button
                    className={styles.chatButton}
                    onClick={handleClick}
                >Send
                </button>
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
