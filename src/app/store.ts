import {configureStore} from "@reduxjs/toolkit";
import {generateTokenAPI} from "api/generateToken/generateToken";
import {bonusClientAPI} from "api/infoBonus/infoBonus";

export const store = configureStore({
    reducer: {
        [generateTokenAPI.reducerPath]: generateTokenAPI.reducer,
        [bonusClientAPI.reducerPath]: bonusClientAPI.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(
            generateTokenAPI.middleware,
            bonusClientAPI.middleware,
        ),
})

// @ts-ignore
window.store = store