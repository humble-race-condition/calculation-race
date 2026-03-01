import {createSlice, type PayloadAction} from '@reduxjs/toolkit'
import {GameState} from "../../shared/constants.ts";

export interface GameState {
    game: GameDetails | null;
    scores: string[] | null;
    chatMessages: ChatMessage[];
}

export type GameStateType = typeof GameState[keyof typeof GameState];

export interface GameDetails {
    id: string;
    name: string;
    type: string;
    host: string;
    player: string;
    isHost: boolean;
    state: GameStateType;
}

export interface ChatMessage {
    id: string;
    player: string;
    message: string;
}

export interface InitializeGameState {
    playerName: string;
    gameId: string;
    gameName: string;
    gameType: string;
}

const initialState: GameState = {
    game: null,
    chatMessages: [],
    scores: []
}

const game = createSlice({
    name: "game",
    initialState,
    reducers: {
        initializeGame: (state, action: PayloadAction<InitializeGameState>) => {
            state.game = {
                id: action.payload.gameId,
                name: action.payload.gameName,
                type: action.payload.gameType,
                host: action.payload.playerName,
                player: action.payload.playerName,
                isHost: true,
                state: GameState.LOBBY,
            };
            state.scores = [];
            state.chatMessages = [];
        },
        joinGame: (state, action: PayloadAction<string>) => {
            if (state.scores) {
                state.scores.push(action.payload);
            }
        },
        loadGame: (state) => {
            if (state.game) {
                state.game.state = GameState.LOADING;
            }
        },
        startGame: (state) => {
            if (state.game) {
                state.game.state = GameState.RUNNING;
            }
        },
        endGame: (state) => {
            if (state.game) {
                state.game.state = GameState.ENDED;
            }
        },
        resetGame: (state) => {
            state.game = null;
            state.chatMessages = [];
            state.scores = [];
        },
        addMessage: (state, action: PayloadAction<ChatMessage>) => {
            if (!state.chatMessages) {
                state.chatMessages = [];
            }

            const chatMessage = action.payload;
            state.chatMessages = [...state.chatMessages, chatMessage];
        }
    },
})

export const {initializeGame, joinGame, loadGame, startGame, endGame, resetGame, addMessage} = game.actions

export default game.reducer