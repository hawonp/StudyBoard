import Head from 'next/head'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {TextField} from "@mui/material";
import {PostCard} from "../components/PostCard";

const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    marginTop: '8px',
    marginBottom: '16px'
}));

const Input = styled('input')({
    display: 'none',
});
export default function WritePost() {
    return (
        <div>
            <Head>
                <title>StudyBoard</title>

            </Head>

            <PostCard />

        </div>
    )
}

