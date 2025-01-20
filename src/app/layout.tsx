"use client";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <ThemeProvider theme={darkTheme}>
                    <CssBaseline />
                    <div>
                        <ResponsiveAppBar />
                        {children}
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
