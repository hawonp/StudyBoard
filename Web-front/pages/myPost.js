import * as React from 'react';
import Head from 'next/head'
import ProfileCard from "../components/ProfileCard";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import MyPostList from "../components/MyPostList";


export default function MyPost() {
    return (
        <div style={{display: 'flex'}}>
            <Container >
                <Box style={{border:'0.1rem solid lightgray',
                    borderRadius: '8px',marginBottom: '16px', marginTop: '20px', padding: '10px 12px', backgroundColor:'white' }}
                >
                    <h5 style={{ marginBottom: '2rem'}}>Pyungkang&apos;s Post</h5>
                    <hr style={{
                        margin: '0px',
                        flexShrink: '0',
                        borderWidth: '0px 0px thin',
                        borderStyle: 'solid',
                        marginBottom: '16px',
                        opacity: 1,
                        borderColor: 'lightgray'
                    }}/>

                    <MyPostList />


                </Box>

            </Container>

            <ProfileCard/>
        </div>
    )
}

