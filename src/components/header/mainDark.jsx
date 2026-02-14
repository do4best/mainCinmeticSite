import React, { useContext } from 'react';
import Button from "@mui/material/Button";
import { useTheme } from '@mui/material/styles';
import { ColorModeContext } from '../../../src/App.jsx';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function MainDark() {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    return (
        <Button
            sx={{ ml: 1, color: 'inherit' }}
            onClick={colorMode.toggleColorMode}
            variant="contained"
            startIcon={theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        >
            {theme.palette.mode === 'dark' ? 'light' : 'dark'}
        </Button>
    );
}

export default MainDark;