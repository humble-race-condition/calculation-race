import {createSlice, type PayloadAction} from '@reduxjs/toolkit'
import {Theme} from "../../shared/constants.ts";

type ThemeType = typeof Theme[keyof typeof Theme];

export interface GlobalState {
    theme: ThemeType,
    isDarkThemeChecked: boolean,
}

const initialState: GlobalState = {
    theme: Theme.LIGHT,
    isDarkThemeChecked: false,
}

export const global = createSlice({
    name: "global",
    initialState,
    reducers: {
        setDark: (state, action: PayloadAction<boolean>) => {
            state.theme = action.payload ? Theme.DARK : Theme.LIGHT;
            state.isDarkThemeChecked = action.payload;
        },
        setTheme: (state, action: PayloadAction<string>) => {
            const theme = parseTheme(action.payload);
            state.theme = theme;
            state.isDarkThemeChecked = theme === Theme.DARK;
        },
    },
});

export function parseTheme(theme: string | null | undefined): ThemeType {
    const defaultTheme = Theme.LIGHT
    if (!theme) {
        return defaultTheme;
    }

    const formattedTheme = theme.trim().toLowerCase();
    if (Object.values(Theme).includes(formattedTheme as ThemeType)) {
        return formattedTheme as ThemeType;
    }

    return defaultTheme;
}

// Action creators are generated for each case reducer function
export const {setDark, setTheme} = global.actions

export default global.reducer