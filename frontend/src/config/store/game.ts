import {createSlice, type PayloadAction} from '@reduxjs/toolkit'

export interface GameState {
    gameId: string;
    gameName: string;
    isHost: boolean;
    chatMessages: string[];
    scores: string[]
}

export interface InitializeGameState {
    gameId: string;
    gameName: string;

}
//ToDo all room should be removed from domain names. Only use game ane lobby. No need for room.
const initialState: GameState = {
    gameId: "",
    gameName: "",
    isHost: false,
    chatMessages: [],
    scores: []
}

export const game = createSlice({
    name: 'game',
    initialState,
    reducers: {
        initializeGame: (state, action: PayloadAction<InitializeGameState>) => {
            state.gameId = action.payload.gameId
            state.gameName = action.payload.gameName
        }
    },
})

export const {initializeGame} = game.actions

export default game.reducer