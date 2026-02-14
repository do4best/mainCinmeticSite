import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import {Header} from "../index.js";

function MovieList() {
    return (
        <>
        <Container maxWidth="lg">
            <Box sx={{my: 4}}>
<Typography variant="h2">Movie List</Typography>
            </Box>

        </Container>

        </>
    );
}

export default MovieList;