import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {parseTheme, Theme} from "../../shared/layout/Theme";

export interface GlobalState {
    theme: Theme,
    isDarkThemeChecked: boolean,
}

const initialState: GlobalState = {
    theme: Theme.LIGHT,
    isDarkThemeChecked: false,
}

export const global = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setDark: (state, action: PayloadAction<boolean>) => {
            state.theme = action.payload ? Theme.DARK : Theme.LIGHT
            state.isDarkThemeChecked = action.payload
        },
        setTheme: (state, action: PayloadAction<string>) => {
            const theme = parseTheme(action.payload) ?? Theme.LIGHT;
            state.theme = theme;
            state.isDarkThemeChecked = theme === Theme.DARK;
        }
    },
})

// Action creators are generated for each case reducer function
export const {setDark, setTheme} = global.actions

export default global.reducer