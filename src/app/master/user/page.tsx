'use client'
import UserForm from './UserForm';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Header from './Header';
import { useState } from 'react';
import { TextField } from '@mui/material';

const Home = () => {
    const [title, setTitle] = useState('User Information Form ');
    const handleUserFormSubmit = (userData: { name: string; email: string; age: number }) => {
        console.log('User Data:', userData);
    };
    return (
        <Container maxWidth="sm">
            <Header title={title} />
            <main>
                <Typography variant="h4" component="h1" gutterBottom>
                    <TextField
                        label="Name"
                        variant="outlined"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </Typography>
                <UserForm onSubmit={handleUserFormSubmit} title={title} />
            </main>
        </Container>
    );
};

export default Home;
