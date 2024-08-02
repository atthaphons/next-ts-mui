import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import i18n from 'i18next';
import { RootState } from '../store';

interface LanguageState {
    language: 'en' | 'th' | string;
}

const initialState: LanguageState = {
    language: 'en',
};

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguageState(state, action: PayloadAction<'en' | 'th' | string>) {

            console.log('languageSlice => ', action)
            state.language = action.payload;
            i18n.changeLanguage(action.payload); // Change i18n language
        },
    },
});

export const { setLanguageState } = languageSlice.actions;
export const languageSelector = (store: RootState) => store.languageReducer;
export default languageSlice.reducer;
