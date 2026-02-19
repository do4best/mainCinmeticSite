import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import noPagefound from '../../assets/pagenotfound.png';

function    PageNotFound() {
    return (
        <Box sx={{ textAlign: 'center', py: 10 }}>
            <Typography variant="h2">404</Typography>
            <img src={noPagefound} alt="noPagefound" />
            <Typography variant="h5" sx={{ mb: 4 }}>Page Not Found</Typography>
            <Button variant="contained" component={Link} to="/">
                Go Home
            </Button>
        </Box>
    );
}

export default PageNotFound;