import {createSlice} from '@reduxjs/toolkit'

export interface GlobalState {
    isWhiteTheme: boolean
}

const initialState: GlobalState = {
    isWhiteTheme: true,
}

export const globalState = createSlice({
    name: 'globalState',
    initialState,
    reducers: {
        toggle: (state) => {
            state.isWhiteTheme = !state.isWhiteTheme
        }
    },
})

// Action creators are generated for each case reducer function
export const {toggle} = globalState.actions

export default globalState.reducer