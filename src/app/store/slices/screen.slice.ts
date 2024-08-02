import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
type screenState = {
    screenCode: string;
    screenName: string;

};
const initialValues: screenState = {
    screenCode: "",
    screenName: ""
};
const screenSlice = createSlice({
    name: "screen",
    initialState: initialValues,
    reducers: {
        setScreenId: (state: screenState, action: PayloadAction<screenState>) => {
            state.screenCode = action.payload.screenCode;
            state.screenName = action.payload.screenName;
        },
    },

});
export const { setScreenId } = screenSlice.actions;
export const screenSelector = (store: RootState) => store.screenReducer;
export default screenSlice.reducer;