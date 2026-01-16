export const Constants = {
    THEME_KEY: 'theme',
} as const;

export const Paths = {
    HOME_PATH: "/",
    GAME_PATH: "/game",
    CREATE_GAME_PATH: "/create-game",
    JOIN_GAME_PATH: "/join-game",
    RANKINGS_PATH: "/rankings",
} as const;


export const GameTypes = {
    COMPETITIVE_TYPE: "competitive",
    COOPERATIVE_TYPE: "cooperative",
} as const;