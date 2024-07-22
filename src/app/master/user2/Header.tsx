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
    // const [selectedProfile, setSelectedProfile] = useState(profiles[0]);
    const handleChange = (event: SelectChangeEvent<string>) => {
        const profile = event.target.value;
        onProfileChange(profile); // Notify parent about profile change
        // setSelectedProfile(profile);
        // handleProfileChange(profile, onProfileChange);
        // window.location.reload(); // Refresh the page
    };

    return (
        <AppBar position="static">
            <Container maxWidth="lg">
                <Toolbar>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {title}
                    </Typography>


                    <FormControl variant="outlined" sx={{ minWidth: 120 }}>

                        <InputLabel id="profile-select-label" sx={{ minWidth: 120 }}> Profiles </InputLabel>
                        <Select
                            labelId="profile-select-label"
                            id="profile-select"
                            value={selectedProfile}
                            onChange={handleChange}

                            sx={{
                                '.MuiSelect-select': {
                                    // color: 'black', // Default color of text in select
                                    color: 'white',
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
