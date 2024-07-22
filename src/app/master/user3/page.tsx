'use client'
import UserForm from './UserForm';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Header from './Header';
import Head from 'next/head';
import { useState } from 'react';


const Home = () => {
    const initialTitle = 'User Information Form';
    const profiles = ['Admin', 'User', 'Guest'];

    const [selectedProfile, setSelectedProfile] = useState(profiles[0]);
    const [title, setTitle] = useState(initialTitle);

    const handleProfileChange = (profile: string) => {
        console.log(`Selected Profile: ${profile}`);
        setSelectedProfile(profile);
    };

    const handleTitleChange = (newTitle: string) => {
        setTitle(newTitle);
    };

    const handleUserFormSubmit = (userData: { name: string; email: string; age: number }) => {
        console.log('User Data:', userData);
    };

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content="A user information form built with Next.js and TypeScript" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header
                title={title}
                profiles={profiles}
                selectedProfile={selectedProfile}
                onProfileChange={handleProfileChange}
            />
            {selectedProfile}
            <Container maxWidth="sm" sx={{ marginTop: 4 }}>
                <main>
                    <Typography variant="h4" component="h1" gutterBottom>
                        {title}
                    </Typography>
                    <UserForm
                        onSubmit={handleUserFormSubmit}
                        initialTitle={title}
                        profile={selectedProfile}
                        onTitleChange={handleTitleChange}
                    />
                </main>
            </Container>
        </div>
    );
};
export default Home;
