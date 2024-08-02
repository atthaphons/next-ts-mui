import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IUserProfile } from "@/interface/common";
import axios from "axios";
const apiUrl = "/api/user";
export const fetchUserProfile = createAsyncThunk("users/fetchUserProfile", async () => {
    const response = await axios.get(apiUrl);
    console.log("user info", response)
    return response.data;
});

type userLoginState = {
    userProfile: IUserProfile;
    error?: string;
    loading: boolean;
};

const initialValues: userLoginState = {
    userProfile: {
        userId: "AUSERDDD",
        userFullName: "React User Ant :000",
        companyCode: "A",
        companyName: "Ant Co., Ltd."
    },
    loading: false,
};

const userLoginSlice = createSlice({
    name: "login",
    initialState: initialValues,
    reducers: {
        increase: (state: userLoginState, action: PayloadAction<void>) => {
            console.log("increase login state => ", state)
            console.log("increase login action => ", action)
        },
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                (action) => action.type.endsWith("/pending"),
                (state) => {
                    state.loading = true;
                }
            )
            .addMatcher(
                (action) => action.type.endsWith("/fulfilled"),
                (state, action) => {
                    state.loading = false;
                    if (action.type.includes("fetchUserProfile")) {
                        state.userProfile = action.payload;
                    }
                }
            )
            .addMatcher(
                (action) => action.type.endsWith("/rejected"),
                (state, action) => {
                    state.loading = false;
                    state.error = action.error.message;
                }
            );
    }

});
export const userLoginSelector = (store: RootState) => store.userLoginReducer;
export default userLoginSlice.reducer;
