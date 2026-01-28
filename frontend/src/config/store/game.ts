import {createSlice, type PayloadAction} from '@reduxjs/toolkit'

export interface GameState {
    game: GameDetails | null,
    chatMessages: string[];
    scores: string[]
}

export interface GameDetails {
    id: string;
    name: string;
    type: string;
    host: string;
    player: string;
    isHost: boolean;
    hasStarted: boolean;
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
                hasStarted: false,
            };
        },
        startGame: (state) => {
            if (state.game) {
                state.game.hasStarted = true
            }
        }
    },
})

export const {initializeGame, startGame} = game.actions

export default game.reducer