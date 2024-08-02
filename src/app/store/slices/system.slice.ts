import { IDropDown, ISystemManage } from "@/interface/common";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
const apiUrl = "/api/system";


interface FetchDataParams {
    category?: string;
    subCategory?: string;
}





export const fetchSystems = createAsyncThunk("system/fetchSystemDatas", async () => {
    const response = await axios.get(apiUrl);
    return response.data;
});



export const fetchCategory = createAsyncThunk("system/fetchCategory", async ({ category }: FetchDataParams) => {
    const response = await axios.post(apiUrl + '/category', { category: category });
    console.log("fetchCategory createAsyncThunk category : ", category, response)
    return response.data;
});

export const fetchSubCategory = createAsyncThunk("system/fetchSubCategory", async ({ category, subCategory }: FetchDataParams) => {
    console.log("fetchSubCategory createAsyncThunk category : ", category)
    console.log("fetchSubCategory createAsyncThunk subCategory : ", subCategory)
    const response = await axios.post(apiUrl + '/category/sub-category', {
        category: category,
        subCategory: subCategory
    });
    console.log("#subCategory : ", subCategory, response)
    return response.data;
});

type systemState = {
    systems: ISystemManage[];
    category: IDropDown[];
    subCategory: IDropDown[];
    loading: boolean;
    error?: string;
    success?: boolean;
    currentUser?: []
};



const initialValues: systemState = {
    systems: [],
    category: [{
        value: '',
        label: 'SELECT'
    }],
    subCategory: [{
        value: '',
        label: 'SELECT'
    }],
    loading: false,

};


const systemSlice = createSlice({
    name: "system",
    initialState: initialValues,
    reducers: {
        increase: (state: systemState, action: PayloadAction<void>) => {
            console.log("increase system state => ", state)
            console.log("increase system action => ", action)
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
                    if (action.type.includes("fetchSystemDatas")) {
                        state.systems = action.payload;
                    } else if (action.type.includes("fetchCategory")) {
                        state.category = action.payload;
                    } else if (action.type.includes("fetchSubCategory")) {
                        state.subCategory = action.payload;

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
export const systemSelector = (store: RootState) => store.systemsReducer;
export default systemSlice.reducer;