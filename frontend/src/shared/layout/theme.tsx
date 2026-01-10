export const Theme = {
    LIGHT: 'light',
    DARK: 'dark',
} as const;

export function parseTheme(theme: string | null | undefined): string | null {
    if (!theme) {
        return null;
    }

    const formattedTheme = theme.trim().toLowerCase();
    if ((Object.values(Theme) as string[]).includes(formattedTheme)) {
        return formattedTheme;
    }

    return null;
}