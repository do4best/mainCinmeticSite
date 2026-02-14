import {createTheme} from "@mui/material";
import React, {useState} from "react";
import theme from "./theme";
export const useColorTheme = () => {
    const [mode, setMode] = useState('light');
    const toggleMode = () => setMode((pre) =>(pre === 'light' ? 'dark' : 'light'));
    const modifiedTheme = React.useMemo(() =>
        createTheme({
            ...theme,
            palette: {...theme.palette, mode}
                   })
    , [mode]);
    return {
        theme: modifiedTheme,
        mode,
        toggleMode
    };

}