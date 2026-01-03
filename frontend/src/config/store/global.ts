import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface GlobalState {
    theme: string
}

const initialState: GlobalState = {
    theme: 'white',
}

export const global = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<string>) => {
            state.theme = action.payload === 'white' ? action.payload : 'dark'
        }
    },
})

// Action creators are generated for each case reducer function
export const {setTheme} = global.actions

export default global.reducer