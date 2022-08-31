import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
    palette: {
        primary: {
            main: "#fb8c00",
            light: "#ffb74d"
        },
        secondary: {
            main: "#d6d6d6",
            light: "#e3e3e3"
        },
        buttonText: {
            main: "#212121"
        },
        text: {
            main: '#3b3b3b',
            input: 'black'
        },
        body: {
            main: '#faf6ed'
        },
    }
})