"use client";
import { createMember } from "@/app/store/slices/member.slice";
import { useAppDispatch } from "@/app/store/store";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IUserManage } from "@/interface/common";




const MemberEdit = () => {
    const [userData, setUserData] = useState<IUserManage>();
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);
    const dispatch = useAppDispatch();
    const router = useRouter();
    const handleSave = async () => {
        console.log(userData)
        const result = await dispatch(createMember(userData));;
        console.log("return await result : ", result)
        if (result.meta.requestStatus === 'fulfilled') {
            setMessage("User saved successfully.");
            setIsError(false);
            router.back(); // Redirect after successful save
        } else {
            alert(result.error.message)
            setMessage(result.error.message || "An error occurred.");
            setIsError(true);
        }
    };
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };
    return (
        <Container maxWidth="sm" sx={{ marginTop: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Add Form Infomation
            </Typography>
            <Box
                component="form"
                sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 700, mx: 'auto' }}
            >

                <TextField
                    label="Name"
                    variant="outlined"
                    name="name"
                    type="text"
                    value={userData?.name || ''}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
                    required
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    type="email"
                    name="email"
                    value={userData?.email || ''}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
                    required
                />
                <TextField
                    label="Phone"
                    variant="outlined"
                    name="phoneNumber"
                    type="text"
                    value={userData?.phoneNumber || ''}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
                    required
                />
                <Button onClick={handleSave} variant="contained" color="primary">
                    Submit
                </Button>

                <Button onClick={() => router.back()} variant="contained" color="primary">
                    Back
                </Button>
            </Box>

        </Container>
    );
};

export default MemberEdit;