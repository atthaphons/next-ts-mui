import { ReactNode } from 'react';
import Header from './template/header';
import Footer from './template/footer';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <Container component="main" sx={{ mt: 4, mb: 4 }}>
                {children}
            </Container>
            <Footer />
        </Box>
    );
};

export default Layout;
