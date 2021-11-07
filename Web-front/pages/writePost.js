import Head from 'next/head'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {TextField} from "@mui/material";

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


            <Container >

                <Box style={{border:'0.1rem solid lightgray',
                    borderRadius: '4px',marginBottom: '16px', marginTop: '20px', padding: '10px 12px', backgroundColor:'white' }}
                >
                    <Div>{"Post Your Question"}</Div>

                    <TextField style={{ marginTop: '10px', marginBottom: '10px'}} className="post-text" fullWidth id="title" label="Title" variant="outlined" />
                    <TextField rows={12} multiline style={{ marginTop: '10px', marginBottom: '10px'}} className="post-text" fullWidth id="title" label="Question?" variant="outlined" />
                    <TextField style={{ marginTop: '10px', marginBottom: '10px'}} className="post-text" fullWidth id="tag" label="#tag" variant="outlined" />
                    <div style={{ display: 'flex' }} >

                        <label htmlFor="icon-button-file">
                            <Input accept="image/*" id="icon-button-file" type="file" />
                            <IconButton color="primary" aria-label="upload picture" component="span" style={{  }}>
                                <PhotoCamera />
                            </IconButton>
                        </label>
                        <div style={{ display: 'flex', flex: 1, justifyContent:'end' }}>
                            <Button sx={{borderRadius: '8px',}} variant="contained" color="success" >
                                    Post
                            </Button>
                        </div>

                    </div>
                </Box>
            </Container>

        </div>
    )
}

