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
        setDark: (state, action: PayloadAction<boolean>) => {
            state.theme = action.payload ? Theme.DARK : Theme.LIGHT
        },
        setTheme(state, action: PayloadAction<string>) {
            let theme = Theme.LIGHT;
            if (Object.values(Theme).includes(action.payload as Theme)) {
                theme = action.payload as Theme;
            }

            state.theme = theme;
        }
    },
})

// Action creators are generated for each case reducer function
export const {setDark, setTheme} = global.actions

export default global.reducer