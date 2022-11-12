import { configureStore } from '@reduxjs/toolkit';
import { cookieReducer } from '../../features/cookies/reducer/reducer.cookies';
import { milkReducer } from '../../features/milks/reducer/reducer.milks';

export const appStore = configureStore({
    reducer: {
        milks: milkReducer,
        cookies: cookieReducer,
    },
});

export type rootStore = typeof appStore;

export type rootState = ReturnType<typeof appStore.getState>;
