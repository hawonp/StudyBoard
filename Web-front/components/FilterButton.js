import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import React from "react";

export default function FilterButton () {
    return(

        <Stack direction="row" spacing={1}>
            <Chip
                label="Recently"
                component="a"
                href="#basic-chip"
                variant="outlined"
                clickable
            />
            <Chip
                label="Most popular"
                component="a"
                href="#basic-chip"
                variant="outlined"
                clickable
            />
            <Chip
                label="preferred tags"
                component="a"
                href="#basic-chip"
                variant="outlined"
                clickable
            />
        </Stack>
    )

}