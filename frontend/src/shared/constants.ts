export const Constants = {
    THEME_KEY: "theme",
    GAME_TYPE_KEY: "game-type"
} as const;

export const Path = {
    HOME_PATH: "/",
    GAME_PATH: "/game/:id",
    CREATE_GAME_PATH: "/create-game",
    JOIN_GAME_PATH: "/join-game",
    RANKINGS_PATH: "/rankings",
    ERROR_PATH: "/*",
} as const;


export const GameType = {
    COMPETITIVE_TYPE: "competitive",
    COOPERATIVE_TYPE: "cooperative",
} as const;