import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'background.paper', py: 6 }} component="footer">
            <Container maxWidth="lg">
                <Typography variant="body1">My E-commerce App</Typography>
                <Typography variant="body2" color="text.secondary">
                    © {new Date().getFullYear()}
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
