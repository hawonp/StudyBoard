import Head from 'next/head'
import Link from 'next/link';
import styles from '../../styles/Home.module.css'
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ProfileCard from "../../components/ProfileCard";
import EditIcon from '@mui/icons-material/Edit';
import IconButton from "@mui/material/IconButton";
import * as React from "react";
import {TextField} from "@mui/material";

export default function Profile() {
    return (
        <div style={{display: 'flex'}}>
            <div >
                <Container >

                    <Box
                        sx={{border:'0.1rem solid lightgray',
                            borderRadius: '8px',marginBottom: '16px',
                            marginTop: '20px', padding: '10px 12px',
                            backgroundColor:'white' }}
                    >
                        <div style={{ display: 'flex' }}>
                            <div>
                                <h5>
                                    PK Hong's Information
                                </h5>
                            </div>
                            <div style={{ display: 'flex', flex: 1, justifyContent:'end' }}>
                                <IconButton aria-label="edit">
                                    <Link href="/user/updateprofile">
                                        <a>
                                            <EditIcon/>
                                        </a>
                                    </Link>
                                </IconButton>
                            </div>
                        </div>
                        <hr style={{
                            margin: '0px',
                            flexShrink: '0',
                            borderWidth: '0px 0px thin',
                            borderStyle: 'solid',
                            marginBottom: '10px',
                            opacity: 1,
                            borderColor: 'rgb(227, 242, 253)'
                        }}/>
                        <div>
                            <TextField style={{marginBottom: '10px', marginTop:'8px'}}
                                       fullWidth
                                       disabled
                                       id="outlined-disabled"
                                       label="Name"
                                       defaultValue="PK HONG"
                            />
                            <TextField style={{marginBottom: '10px', marginTop:'8px'}}
                                       fullWidth
                                       disabled
                                       id="outlined-disabled"
                                       label="Email"
                                       defaultValue="pyungkang@gmail.com"
                            />
                            <TextField style={{marginBottom: '10px', marginTop:'8px'}}
                                       fullWidth
                                       disabled
                                       id="outlined-disabled"
                                       label="NickName"
                                       defaultValue="PK-dev"
                            />
                            <TextField style={{marginBottom: '10px', marginTop:'8px'}}
                                       fullWidth
                                       disabled
                                       id="outlined-disabled"
                                       label="HashTag"
                                       defaultValue="#Math #CSE"
                            />
                        </div>

                    </Box>

                </Container>
            </div>
            <ProfileCard/>
        </div>

    )
}

