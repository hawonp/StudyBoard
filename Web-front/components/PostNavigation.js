import Box from "@mui/material/Box";
import Link from "next/link";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import React from "react";

export default function PostNavigation() {

    return (
        <div style={{ alignItems: 'center',border:'0.1rem solid lightgray',
            backgroundColor: 'white',borderRadius: '8px',boxSizing: 'border-box',display: 'flex',
            marginBottom: '16px', marginTop: '20px', padding: '10px 12px' }}>

            <Box
                component="form"
                sx={{
                    width: '100%', maxWidth: '100%',
                }}
                noValidate
                autoComplete="off"
            >
                <Link href="/writePost">
                    <TextField fullWidth id="standard-basic" label=" Ask Question" variant="standard" />
                </Link>
            </Box>


            <IconButton>
                <Link href="/writePost">
                    <ImageSearchIcon />
                </Link>
            </IconButton>
        </div>
    );
}