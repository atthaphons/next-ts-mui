"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useAppDispatch } from "@/app/store/store";
import { setScreenId } from "@/app/store/slices/screen.slice";
import { fetchCategory, fetchSubCategory, systemSelector } from "@/app/store/slices/system.slice";
import { useSelector } from "react-redux";
import { SearchCriteria } from "@/interface/system";

type Props = {
    criteria: SearchCriteria;
    setCriteria: Dispatch<SetStateAction<SearchCriteria>>;
    setErrorMessage: Dispatch<SetStateAction<string[]>>;
};

export default function CriteriaSection({
    criteria,
    setCriteria,
    setErrorMessage,
}: Readonly<Props>) {
    const dispatch = useAppDispatch();
    const systemReducer = useSelector(systemSelector);
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [selectedSubCategory, setSelectedSubCategory] = useState<string>("");
    const handleChangeCategory = (e: SelectChangeEvent<string>) => {
        e.preventDefault();
        setSelectedCategory(e.target.value);
    };
    const handleChangeSubCategory = (e: SelectChangeEvent<string>) => {
        e.preventDefault();
        setSelectedSubCategory(e.target.value);
    };
    useEffect(() => {
        dispatch(fetchCategory({ category: 'LIST_OF_VALUE' }));
    }, [dispatch]);
    useEffect(() => {
        setSelectedSubCategory("");
        dispatch(fetchSubCategory({ category: 'LIST_OF_VALUE', subCategory: selectedCategory }));
    }, [dispatch, selectedCategory]);
    useEffect(() => {
        dispatch(setScreenId({ screenCode: "T0003", screenName: "SC0003" }))
    }, [dispatch]);

    return (
        <Box component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off" >
            <FormControl variant="outlined" sx={{ minWidth: 200, mt: 4, mb: 4, ml: 2 }}>
                <InputLabel>Category</InputLabel>
                <Select
                    value={selectedCategory}
                    onChange={(e: SelectChangeEvent<string>) => handleChangeCategory(e)}
                    label="Category"
                >
                    {systemReducer.category.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl variant="outlined" sx={{ minWidth: 200, mt: 2, mb: 4, ml: 3 }}>
                <InputLabel>Sub Category</InputLabel>
                <Select
                    value={selectedSubCategory}
                    onChange={(e: SelectChangeEvent<string>) => handleChangeSubCategory(e)}
                    label="Sub Category"
                >
                    {systemReducer.subCategory.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    )
}