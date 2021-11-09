import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ProfileCard from "../../components/ProfileCard";
import * as React from "react";

import MyFavoriteList from "../../components/MyFavoriteList";

export default function favorite() {
    return (
        <div style={{display: 'flex'}}>
            <div  style={{flex: 1}}>
                <Container >
                    <Box style={{border:'0.1rem solid lightgray',
                        borderRadius: '8px',marginBottom: '16px', marginTop: '20px', padding: '10px 12px', backgroundColor:'white' }}
                    >
                        <h5 style={{ marginBottom: '2rem'}}>Pyungkang&apos;s favorite</h5>
                        <hr style={{
                            margin: '0px',
                            flexShrink: '0',
                            borderWidth: '0px 0px thin',
                            borderStyle: 'solid',
                            marginBottom: '10px',
                            opacity: 1,
                            borderColor: 'lightgray'
                        }}/>

                        <MyFavoriteList />

                    </Box>
                </Container>
            </div>

            <ProfileCard/>
        </div>
    )
}

