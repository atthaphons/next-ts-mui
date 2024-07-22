'use client'
import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

interface UserFormProps {
    onSubmit: (userData: UserData) => void;
    title?: string;
}

interface UserData {
    name: string;
    email: string;
    age: number;
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit, title }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState<number | ''>('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log("handleSubmit")
        if (name && email && age) {
            onSubmit({ name, email, age: Number(age) });
        }
    };

    useEffect(() => {
        if (title) {
            console.log(`Form Title: ${title}`);
        }
    }, [title]);

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, mx: 'auto' }}
        >
            <TextField
                label="Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <TextField
                label="Email"
                variant="outlined"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <TextField
                label="Age"
                variant="outlined"
                type="number"
                value={age}
                onChange={(e) => setAge(Number(e.target.value) || '')}
                required
            />
            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </Box>
    );
};

export default UserForm;
