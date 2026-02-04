export const Constants = {
    THEME_KEY: "theme",
    GAME_TYPE_KEY: "game-type"
} as const;

export const UrlPath = {
    HOME_PATH: "/",
    GAME_PATH: "/game/:id",
    CREATE_GAME_PATH: "/create-game",
    JOIN_GAME_PATH: "/join-game",
    RANKINGS_PATH: "/rankings",
    ERROR_PATH: "*",
} as const;

export const GameType = {
    COMPETITIVE_TYPE: "competitive",
    COOPERATIVE_TYPE: "cooperative",
} as const;

export const Theme = {
    LIGHT: "light",
    DARK: "dark",
} as const;

export const GameState = {
    LOBBY: "LOBBY",
    LOADING: "LOADING",
    RUNNING: "RUNNING",
    ENDED: "ENDED",
} as const;
