import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AdminNav from "../../components/AdminNav";
import ProfileCard from "../../components/ProfileCard";
import {Paper} from "@mui/material";

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

                            <Paper sx={{ borderRadius: '10rem', boxShadow: '#d5d5d5 0 0 15px',
                                maxWidth: '1200px', margin: '0.5rem auto', height: '5rem'}} >
                                <div style={{ borderRadius: '10rem', objectFit: 'cover',
                                    display:' inline-block', height: '5rem',
                                    width: '5rem', verticalAlign: 'middle'}}></div>
                                <div style={{ display: 'inline-block', width: 'calc(100% - 7rem)',
                                    verticalAlign: 'middle', marginLeft: '2%',
                                    marginTop: '.35rem' }}>
                                    <a>
                                        <p style={{ display: 'inline-block',
                                            fontSize: '1rem', overflow: 'hidden',
                                            maxHeight: '2.15rem', margin: 0,
                                            lineHeight: 'normal', marginTop: '0.2rem' }}>
                                            <a>
                                                <strong>User name </strong> 님이
                                            </a>
                                            <a>
                                                <strong>이 게시글</strong>에 Like를 눌렀습니다
                                            </a>
                                        </p>
                                        <p style={{ color:'#888', maginBottom: 0, fontSize: '0.8rem' }}>
                                            2021, 10 ,2
                                        </p>
                                    </a>
                                </div>
                            </Paper>

                            <Paper sx={{ borderRadius: '10rem', boxShadow: '#d5d5d5 0 0 15px',
                                maxWidth: '1200px', margin: '0.5rem auto', height: '5rem'}} >
                                <div style={{ borderRadius: '10rem', objectFit: 'cover',
                                    display:' inline-block', height: '5rem',
                                    width: '5rem', verticalAlign: 'middle'}}></div>
                                <div style={{ display: 'inline-block', width: 'calc(100% - 7rem)',
                                    verticalAlign: 'middle', marginLeft: '2%',
                                    marginTop: '.35rem' }}>
                                    <a>
                                        <p style={{ display: 'inline-block',
                                            fontSize: '1rem', overflow: 'hidden',
                                            maxHeight: '2.15rem', margin: 0,
                                            lineHeight: 'normal', marginTop: '0.2rem' }}>
                                            <a>
                                                <strong>User name </strong> 님이
                                            </a>
                                            <a>
                                                <strong>이 게시글</strong>에 Like를 눌렀습니다
                                            </a>
                                        </p>
                                        <p style={{ color:'#888', maginBottom: 0, fontSize: '0.8rem' }}>
                                            2021, 10 ,2
                                        </p>
                                    </a>
                                </div>
                            </Paper>

                            <Paper sx={{ borderRadius: '10rem', boxShadow: '#d5d5d5 0 0 15px',
                                maxWidth: '1200px', margin: '0.5rem auto', height: '5rem'}} >
                                <div style={{ borderRadius: '10rem', objectFit: 'cover',
                                    display:' inline-block', height: '5rem',
                                    width: '5rem', verticalAlign: 'middle'}}></div>
                                <div style={{ display: 'inline-block', width: 'calc(100% - 7rem)',
                                    verticalAlign: 'middle', marginLeft: '2%',
                                    marginTop: '.35rem' }}>
                                    <a>
                                        <p style={{ display: 'inline-block',
                                            fontSize: '1rem', overflow: 'hidden',
                                            maxHeight: '2.15rem', margin: 0,
                                            lineHeight: 'normal', marginTop: '0.2rem' }}>
                                            <a>
                                                <strong>User name </strong> 님이
                                            </a>
                                            <a>
                                                <strong>이 게시글</strong>에 Like를 눌렀습니다
                                            </a>
                                        </p>
                                        <p style={{ color:'#888', maginBottom: 0, fontSize: '0.8rem' }}>
                                            2021, 10 ,2
                                        </p>
                                    </a>
                                </div>
                            </Paper>
                        </div>
                    </Box>
                </Container>
            </div>
            <ProfileCard />
        </div>

    )
}

