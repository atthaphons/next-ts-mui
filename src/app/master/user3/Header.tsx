import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { handleProfileChange } from './headerAction';

interface HeaderProps {
    title: string;
    profiles: string[];
    selectedProfile: string;
    onProfileChange: (profile: string) => void;
}

const Header: React.FC<HeaderProps> = ({ title, profiles, selectedProfile, onProfileChange }) => {
    const handleChange = (event: SelectChangeEvent<string>) => {
        const profile = event.target.value;
        onProfileChange(profile); // Notify parent about profile change
    };

    return (
        <AppBar position="static">
            <Container maxWidth="lg">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {title}
                    </Typography>
                    <FormControl variant="outlined" sx={{ minWidth: 120 }}>
                        <InputLabel id="profile-select-label">Profile</InputLabel>
                        <Select
                            labelId="profile-select-label"
                            id="profile-select"
                            value={selectedProfile}
                            onChange={handleChange}
                            label="Profile"
                            sx={{
                                '.MuiSelect-select': {
                                    color: 'black', // Default color of text in select
                                },
                                '.MuiMenuItem-root.Mui-selected': {
                                    backgroundColor: 'red', // Background color for selected item
                                    color: 'white', // Text color for selected item
                                },
                                '.MuiMenuItem-root:hover': {
                                    backgroundColor: 'lightcoral', // Background color for hover
                                },
                            }}
                        >
                            {profiles.map((profile) => (
                                <MenuItem key={profile} value={profile}>
                                    {profile}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;