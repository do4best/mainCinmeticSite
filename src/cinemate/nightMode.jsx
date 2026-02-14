import React from 'react';
import {Box} from "@mui/material";

import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import {ThemeContext, useThemeContext} from "./ThemeContextProvider.jsx";

function NightMode() {
    const {mode, toggleMode} = useThemeContext();
    return (
        <>
        <Box sx={{ display:'flex',alignItems:'center',justifyContent:'center',bgcolor:'background.default',
        color:'text.primary',borderColor:'text.primary',border:'1px solid',p:2}}>
            {mode} mode
            <IconButton onClick={toggleMode} color={"inherit"}>
                {mode === 'dark'?<Brightness4Icon/>:<Brightness7Icon/>}
            </IconButton>
        </Box>

        </>
    );
}

export default NightMode;