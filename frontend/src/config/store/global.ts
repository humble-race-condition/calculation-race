import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Theme} from "../../shared/layout/Theme";

export interface GlobalState {
    theme: Theme
}

const initialState: GlobalState = {
    theme: Theme.LIGHT,
}

export const global = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<boolean>) => {
            state.theme = action.payload ? Theme.DARK : Theme.LIGHT
        }
    },
})

// Action creators are generated for each case reducer function
export const {setTheme} = global.actions

export default global.reducer