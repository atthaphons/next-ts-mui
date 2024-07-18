'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Button, Stack } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import BackIcon from '@mui/icons-material/Backspace';
import { useRouter } from 'next/navigation';
import { MaterialDetailsForm } from '@/app/types';
import ActionMaster from '../material.action';
import { useRef, useState } from 'react';



export default function FormPropsTextFields() {
    const [userData, setUserData] = useState<MaterialDetailsForm[]>([]);
    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const [name, setName] = useState("");
    const [nameError, setNameError] = useState(false);
    const [nameErrorMsg, setNameErrorMsg] = useState("");
    const handleNameChange = (e: { target: { value: string }; }) => {
        setName(e.target.value);
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
        if (nameError) {
            alert("Form is invalid! Please check the fields...");
        } else {
            const saveAdd = await ActionMaster.Add(`https://668f4c3a80b313ba091794a6.mockapi.io/material`, userData);
            alert("Save Success id = " + JSON.stringify(saveAdd));
            router.push('../../master/material')
        }

    };
    const router = useRouter();
    async function handleSave(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault();
        await validateBeforeSave()
    }

    // const formValid = useRef({ name: false, email: false });
    // const handleSubmit = (e: { preventDefault: () => void; }) => {
    //     e.preventDefault();
    //     if (Object.values(formValid.current).every(isValid => isValid)) {
    //         alert("Form is valid! Submitting the form...");
    //     } else {
    //         alert("Form is invalid! Please check the fields...");
    //     }
    // };




    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off" >



            <div>
                <TextField
                    disabled
                    id="outlined-required"
                    label="ID"


                />
                <TextField
                    required
                    id="outlined-required"
                    label="Material Code"
                    name='matCd'
                    value={name}
                    onChange={handleNameChange}
                    error={nameError}
                    helperText={nameErrorMsg}
                />

                <TextField
                    required
                    id="outlined-required"
                    label="Material Name"
                    name='matName'
                    value={userData.matName}
                    onChange={handleChange}
                />

                <TextField
                    required
                    id="outlined-required"
                    label="Company Code"
                    name='cmpyCd'
                    value={userData.cmpyCd}
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


