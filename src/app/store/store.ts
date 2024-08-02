import { configureStore } from "@reduxjs/toolkit";

import memberReducer from "@/app/store/slices/member.slice";
import systemsReducer from "@/app/store/slices/system.slice";
import screenReducer from "@/app/store/slices/screen.slice";
import userLoginReducer from "@/app/store/slices/user.login.slice";
import { useDispatch } from "react-redux";
import languageReducer from "@/app/store/slices/languageSlice"


const reducer = {
    memberReducer,
    systemsReducer,
    userLoginReducer,
    languageReducer,
    screenReducer
};
export const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV === "development",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
