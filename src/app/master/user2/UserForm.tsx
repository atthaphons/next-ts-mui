'use client'
import React, { useState, useEffect, useRef } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


interface UserFormProps {
    onSubmit: (userData: { name: string; email: string; age: number }) => void;
    initialTitle: string;
    profile: string;
    onTitleChange: (title: string) => void;
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit, initialTitle, profile, onTitleChange }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState<number | ''>('');
    const [title, setTitle] = useState(initialTitle);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (name && email && age) {
            onSubmit({ name, email, age: Number(age) });
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, mx: 'auto' }}
        >
            <TextField
                label="Form Title"
                variant="outlined"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
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