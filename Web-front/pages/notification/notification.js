import Head from 'next/head'
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ProfileCard from "../../components/ProfileCard";
import {Paper} from "@mui/material";
import NotificationList from "../../components/NotificationList";

export default function Notification() {

    return (
        <div style={{display: 'flex'}}>
            <div style={{flex: 1}}>
                <Container >
                    <Box style={{border:'0.1rem solid lightgray',
                        borderRadius: '8px',marginBottom: '16px', marginTop: '20px', padding: '10px 12px', backgroundColor:'white' }}
                    >
                        <h5 style={{ marginBottom: '2rem'}}>Pyungkang&apos;s Notification</h5>
                        <hr style={{
                            margin: '0px',
                            flexShrink: '0',
                            borderWidth: '0px 0px thin',
                            borderStyle: 'solid',
                            marginBottom: '10px',
                            opacity: 1,
                            borderColor: 'rgb(227, 242, 253)'
                        }}/>
                        <div className="row gutters m-4">

                            <NotificationList />

                        </div>
                    </Box>
                </Container>
            </div>
            <ProfileCard />
        </div>

    )
}

