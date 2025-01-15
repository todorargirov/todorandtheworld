"use client";

import { Chip } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

export default function Home() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <div>
                <Chip label={"Todor And The World"} />
            </div>
        </ThemeProvider>
    );
}
