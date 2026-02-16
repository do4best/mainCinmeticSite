import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import AllRouter from "../routers/allRouter.jsx";
import { ThemeProvider } from './materialImport.js';
import {useThemeContext} from "./ThemeContextProvider.jsx";
import CssBaseline from "@mui/material/CssBaseline";



function MainCinemate() {
    const {theme} = useThemeContext();
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box>
                <Header/>
                <AllRouter/>
                <Footer/>
            </Box>
        </ThemeProvider>
    );
}

export default MainCinemate;