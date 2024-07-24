import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

const Header = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="lg">
                <Toolbar>
                    <Typography variant="h6" component="div">
                        My E-commerce App
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;