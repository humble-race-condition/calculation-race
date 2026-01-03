export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

export function parseTheme(theme: string | null | undefined): Theme | null {
    if (!theme) {
        return null;
    }

    const parsedTheme = theme.trim().toLowerCase() as Theme;
    if (Object.values(Theme).includes(parsedTheme)) {
        return parsedTheme;
    }

    return null;
}