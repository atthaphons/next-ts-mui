"use client";
import { editMember, fetchMemberById, userSelector } from "@/app/store/slices/member.slice";
import { useAppDispatch } from "@/app/store/store";
import { IUserManage } from "@/interface/common";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";




const UserEdit = () => {


    const [userData, setUserData] = useState<IUserManage | undefined>(undefined);
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);
    const dispatch = useAppDispatch();

    const { id } = useParams();

    const usersReducer = useSelector(userSelector);
    console.log(usersReducer)

    const router = useRouter();

    useEffect(() => {
        if (id) {
            dispatch(fetchMemberById(id));
        }
    }, [dispatch, id]);


    useEffect(() => {
        if (usersReducer) {
            console.log("useEffect usersReducer ", usersReducer)
            console.log("useEffect usersReducer ", usersReducer.currentUser)
            setUserData(usersReducer.currentUser);
        }
    }, [usersReducer]);

    const handleSave = async () => {
        const result = await dispatch(editMember(userData));
        if (result.meta.requestStatus === 'fulfilled') {
            setMessage("User saved successfully.");
            setIsError(false);
            router.back(); // Redirect after successful save
        } else {
            setMessage(result.error.message || "An error occurred.");
            setIsError(true);
        }
    };
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    };

    console.log(message)
    console.log(isError)
    return (
        <Container maxWidth="sm" sx={{ marginTop: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Edit Form Infomation
            </Typography>
            <Box
                component="form"
                sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 700, mx: 'auto' }}
            >

                <TextField
                    label="Name"
                    variant="outlined"
                    name="name"
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

export default UserEdit;