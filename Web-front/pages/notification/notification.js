import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AdminNav from "../../components/AdminNav";
import ProfileCard from "../../components/ProfileCard";

export default function Notification() {
    return (
        <div style={{display: 'flex'}}>
            <div style={{flex: 1}}>
                <Container >
                    <Box style={{border:'0.1rem solid lightgray',
                        borderRadius: '8px',marginBottom: '16px', marginTop: '20px', padding: '10px 12px', backgroundColor:'white' }}
                    >
                        <h5 style={{ marginBottom: '2rem'}}>Pyungkang's Notification</h5>
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

                            <div className="noti" >
                                <div className="noti-box"></div>
                                <div className="noti-text">
                                    <a>
                                        <p className="noti-mes">
                                            <a>
                                                <strong>User name </strong> 님이
                                            </a>
                                            <a>
                                                <strong>이 게시글</strong>에 Like를 눌렀습니다
                                            </a>
                                        </p>
                                        <p className="text-right mr-5 noti-date">
                                            2021, 10 ,2
                                        </p>
                                    </a>
                                </div>
                            </div>

                            <div className="noti">
                                <div className="noti-box"></div>
                                <div className="noti-text">
                                    <a>
                                        <p className="noti-mes">
                                            <a>
                                                <strong>User name </strong> 님이
                                            </a>
                                            <a>
                                                <strong>이 게시글</strong>에 Like를 눌렀습니다
                                            </a>
                                        </p>
                                        <p className="text-right mr-5 noti-date">
                                            2021, 10 ,2
                                        </p>
                                    </a>
                                </div>
                            </div>

                            <div className="noti">
                                <div className="noti-box"></div>
                                <div className="noti-text">
                                    <a>
                                        <p className="noti-mes">
                                            <a>
                                                <strong>User name </strong> 님이
                                            </a>
                                            <a>
                                                <strong>이 게시글</strong>에 Like를 눌렀습니다
                                            </a>
                                        </p>
                                        <p className="text-right mr-5 noti-date">
                                            2021, 10 ,2
                                        </p>
                                    </a>
                                </div>
                            </div>
                            <div className=" noti">
                                <div className="noti-box"></div>
                                <div className="noti-text">
                                    <a>
                                        <p className="noti-mes">
                                            <a>
                                                <strong>User name </strong> 님이
                                            </a>
                                            <a>
                                                <strong>이 게시글</strong>에 Like를 눌렀습니다
                                            </a>
                                        </p>
                                        <p className="text-right mr-5 noti-date">
                                            2021, 10 ,2
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Box>
                </Container>
            </div>
            <ProfileCard />
        </div>

    )
}

