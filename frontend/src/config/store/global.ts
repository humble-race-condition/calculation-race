import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Theme} from "../../shared/layout/Theme";

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
            let theme = Theme.LIGHT;
            if (Object.values(Theme).includes(action.payload.toLowerCase() as Theme)) {
                theme = action.payload as Theme;
            }

            state.theme = theme;
            state.isDarkThemeChecked = theme == Theme.DARK;
        }
    },
})

// Action creators are generated for each case reducer function
export const {setDark, setTheme} = global.actions

export default global.reducer