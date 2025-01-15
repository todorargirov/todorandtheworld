"use client";

import { Chip } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

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
                <ResponsiveAppBar />
            </div>
        </ThemeProvider>
    );
}
