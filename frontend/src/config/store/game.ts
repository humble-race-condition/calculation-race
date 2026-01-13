import {createSlice, type PayloadAction} from '@reduxjs/toolkit'

export interface GameState {
    game: GameDetails,
    isHost: boolean;
    chatMessages: string[];
    scores: string[]
}

export interface GameDetails {
    id: string;
    name: string;
    type: string;
}

export interface InitializeGameState {
    gameId: string;
    gameName: string;
    gameType: string;
}

const initialState: GameState = {
    game: {
        id: "",
        name: "",
        type: ""
    },
    isHost: false,
    chatMessages: [],
    scores: []
}

export const game = createSlice({
    name: 'game',
    initialState,
    reducers: {
        initializeGame: (state, action: PayloadAction<InitializeGameState>) => {
            state.gameId = action.payload.gameId;
            state.gameName = action.payload.gameName;
        }
    },
})

export const {initializeGame} = game.actions

export default game.reducer