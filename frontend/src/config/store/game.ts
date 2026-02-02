import {createSlice, type PayloadAction} from '@reduxjs/toolkit'
import {GameState} from "../../shared/constants.ts";

export interface GameState {
    game: GameDetails | null,
    chatMessages: string[];
    scores: string[]
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

export const game = createSlice({
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

    },
})

export const {initializeGame, loadGame, startGame, endGame} = game.actions

export default game.reducer