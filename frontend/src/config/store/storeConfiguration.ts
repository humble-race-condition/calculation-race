import type {Middleware} from '@reduxjs/toolkit';
import {configureStore} from '@reduxjs/toolkit';
import globalReducer from './global';
import gameReducer from './game';

const loggerMiddleware: Middleware = store => next => action => {
    console.log('Dispatching:', action);
    const result = next(action);
    console.log('Next state:', store.getState());
    return result;
};


//ToDo linter to add semicolons
export const storeConfiguration = configureStore({
    reducer: {
        global: globalReducer,
        game: gameReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(loggerMiddleware)
})


// Infer the `RootState` and `AppDispatch` types from the storeConfiguration itself
export type RootState = ReturnType<typeof storeConfiguration.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof storeConfiguration.dispatch