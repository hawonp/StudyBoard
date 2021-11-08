import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AdminNav from "../../components/AdminNav";

export default function Admin() {
    return (
            <div className={styles.container}>

                <Container >

                    <Box style={{border:'0.1rem solid lightgray',
                        borderRadius: '4px',marginBottom: '16px', marginTop: '20px', padding: '10px 12px', backgroundColor:'white' }}
                    >

                        <div className="col-lg-10 noti">
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
                    </Box>
                </Container>
            </div>


    )
}

