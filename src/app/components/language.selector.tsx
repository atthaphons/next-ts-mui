import React, { useEffect, useState } from 'react';
import { MenuItem, Select, Typography, SelectChangeEvent } from '@mui/material';
import { useAppDispatch } from '../store/store';
import { useSelector } from 'react-redux';
import { languageSelector, setLanguageState } from '../store/slices/languageSlice';
import i18n from '../utils/i18n';

const LanguageAndSignIn: React.FC = () => {
    const dispatch = useAppDispatch();
    const languageReducer = useSelector(languageSelector);
    const [language, setLanguage] = useState<string>(languageReducer.language);

    useEffect(() => {
        i18n.changeLanguage(language);
    }, [language]);

    useEffect(() => {
        setLanguage(languageReducer.language);
    }, [languageReducer.language]);

    const handleLanguageChange = (e: SelectChangeEvent<string>) => {
        const newLanguage = e.target.value;
        setLanguage(newLanguage);
        dispatch(setLanguageState(newLanguage));
    };

    return (

        <Select
            labelId="language-select-label"
            id="language-select"
            value={language}
            onChange={(e: SelectChangeEvent<string>) => handleLanguageChange(e)}
            sx={{ minWidth: 120 }}
        >
            <MenuItem value="en">
                <Typography variant="body1">English</Typography>
            </MenuItem>
            <MenuItem value="th">
                <Typography variant="body1">ไทย</Typography>
            </MenuItem>
        </Select>

    );
};

export default LanguageAndSignIn;
