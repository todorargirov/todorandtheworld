"use client";

import { Container } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import * as React from "react";

export default function Page() {
    return (
        <React.Fragment>
            <Container sx={{ bgcolor: blueGrey[800], height: "100vh", width: "100wh", padding: "5px" }}>Home</Container>
        </React.Fragment>
    );
}
