'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Button, FormControl, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, Stack } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import BackIcon from '@mui/icons-material/Backspace';
import { useRouter } from 'next/navigation';
import { MaterialDetailsForm } from '@/app/types';
import { Add, Edit } from '../material.action.fn';
import { useEffect, useRef, useState } from 'react';
import { Search } from '@/app/master/material/material.action.fn'



export default function FormPropsTextFields() {
    const [materialData, setMaterialData] = useState<MaterialDetailsForm[]>([]);

    const [dropdownData, setDropdownData] = useState<MaterialDetailsForm[]>([]);

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setMaterialData({ ...materialData, [e.target.name]: e.target.value });
    };

    const [matCdValue, setMatCdValue] = useState("");
    const [nameError, setNameError] = useState(false);
    const [nameErrorMsg, setNameErrorMsg] = useState("");
    const handleValidateMatCodeChange = (e: { target: { name: any; value: any; }; }) => {
        setMatCdValue(e.target.value);
        setMaterialData({ ...materialData, [e.target.name]: e.target.value });
        if (e.target.value.length < 3) {
            setNameErrorMsg("Name must be at least 3 characters long");
            setNameError(true);
        } else if (e.target.value.length > 20) {
            setNameErrorMsg("Name must be less than 20 characters long");
            setNameError(true);
        } else if (!/^[a-zA-Z ]+$/.test(e.target.value)) {
            setNameErrorMsg("Name must contain only letters and spaces");
            setNameError(true);
        } else {
            setNameError(false);
            setNameErrorMsg("");
        }
    };

    const validateBeforeSave = async () => {


        console.log("validateBeforeSave =>", JSON.stringify(materialData))
        if (nameError) {
            alert("Form is invalid! Please check the fields...");
        } else {
            const saveAdd = await Add(materialData);
            alert("Save Success id = " + JSON.stringify(saveAdd));
            router.push('../../master/material')
        }

    };
    const router = useRouter();
    async function handleSave(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault();
        await validateBeforeSave()
    }


    const fetchDropDown = async () => {
        const data = await Search();
        setDropdownData(data);
    }

    useEffect(() => {
        fetchDropDown();
    }, [])


    const handleChangeList = (event: SelectChangeEvent) => {
        setMaterialData({ ...materialData, [event.target.name]: event.target.value });

    };
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off" >

            <div>

            </div>
            <div>
                <TextField
                    disabled
                    id="outlined-required"
                    label="ID"
                />

                <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel id="demo-multiple-name-label">Material Name</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name='matName'
                        value={materialData.matName}
                        label="matName"
                        onChange={handleChangeList}
                    >
                        {dropdownData.map((data, index) => {
                            return (
                                <MenuItem key={index} value={data.matName}>
                                    {data.matName}
                                </MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>

                <TextField
                    required
                    id="outlined-required"
                    label="Material Code"
                    name='matCd'
                    value={matCdValue}
                    onChange={handleValidateMatCodeChange}
                    error={nameError}
                    helperText={nameErrorMsg}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Company Code"
                    name='cmpyCd'
                    value={materialData.cmpyCd}
                    onChange={handleChange}

                />



            </div>


            <Grid2>

                <Stack direction="row" spacing={2} justifyContent="right">
                    <Button variant="contained" startIcon={<SaveIcon />}
                        onClick={(e) => handleSave(e)}>
                        Add
                    </Button>

                    <Button variant="contained" startIcon={<BackIcon />}
                        onClick={(e) => router.push('../../master/material')}>
                        Back
                    </Button>

                </Stack>
            </Grid2>

        </Box >
    );
}


