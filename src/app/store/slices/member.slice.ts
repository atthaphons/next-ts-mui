import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { IUserManage } from "@/interface/common";

const apiUrl = "https://668f4c3a80b313ba091794a6.mockapi.io/users";

export const fetchMembers = createAsyncThunk("fetchMembers", async () => {
    const response = await axios.get(apiUrl);
    return response.data;
});

export const fetchMemberById = createAsyncThunk("fetchMemberById", async (userId: string) => {
    const response = await axios.get(`${apiUrl}/${userId}`);
    return response.data;
});

export const createMember = createAsyncThunk("createMember", async (user: IUserManage) => {
    const response = await axios.post(apiUrl, user);
    console.log("response createUser=>", response)
    return response.data;
});

export const editMember = createAsyncThunk("editMember", async (user: IUserManage) => {
    const response = await axios.put(`${apiUrl}/${user.id}`, user);
    return response.data;
});

export const deleteMember = createAsyncThunk("deleteMember", async (userId: string) => {
    await axios.delete(`${apiUrl}/${userId}`);
    return userId;
});

type memberState = {
    users: IUserManage[];
    loading: boolean;
    error?: string;
    success?: boolean;
    currentUser?: IUserManage
};

const initialValues: memberState = {
    users: [],
    loading: false
};
const MemberSlice = createSlice({
    name: "user",
    initialState: initialValues,
    reducers: {
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
                (state, action: any) => {
                    state.loading = false;
                    if (action.type.includes("fetchMembers")) {
                        state.users = action.payload;
                    } else if (action.type.includes("fetchMemberById")) {
                        state.currentUser = action.payload;
                    } else if (action.type.includes("createMember")) {
                        state.users.push(action.payload);
                        state.success = true;
                    } else if (action.type.includes("editMember")) {
                        const index = state.users.findIndex((user) => user.id === action.payload.id);
                        if (index !== -1) {
                            state.users[index] = action.payload;
                        }
                    } else if (action.type.includes("deleteMember")) {
                        state.users = state.users.filter((user) => user.id !== action.payload);
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
export const userSelector = (store: RootState) => store.memberReducer;
export default MemberSlice.reducer;

