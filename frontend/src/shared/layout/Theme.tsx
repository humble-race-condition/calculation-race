export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

export function parseTheme(theme: string): Theme | null {
    const parsedTheme = theme.toLowerCase() as Theme;
    if (Object.values(Theme).includes(parsedTheme)) {
        return parsedTheme;
    }

    return null;
}