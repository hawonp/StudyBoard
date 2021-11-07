import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Container from "@mui/material/Container";
import ProfileCard from "../components/ProfileCard";
import * as React from "react";

import Link from "next/link";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import SmsIcon from "@mui/icons-material/Sms";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ShareIcon from "@mui/icons-material/Share";
import CardActions from "@mui/material/CardActions";
import Image from 'next/image'

export default function Detail() {
    return (
        <div style={{display: 'flex'}}>
            <div className={styles.container} style={{flex: 1}}>
                <Container >
                    <div style={{ alignItems: 'center',
                        border:'0.1rem solid lightgray',
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        boxSizing: 'border-box',
                        display: 'flex',
                        marginBottom: '16px', marginTop: '20px', padding: '10px 12px' }}
                    >
                        <article style={{ paddingRight: '0.2rem', paddingLeft: '1rem' }}>

                            {/*title*/}
                            <header style={{ marginBottom: '1.5rem'}}>
                                <h1>title</h1>
                                {/*username*/}
                                <div style={{ display: 'flex', marginBottom: '1.5rem' }}>
                                    <div>user Name</div>
                                    {/*date*/}
                                    <div style={{ display: 'flex', flex: 1, justifyContent:'end' }}>
                                        date
                                    </div>
                                </div>
                                {/*hashtag*/}
                                <div className="article-content" style={{display: 'flex', flexDirection: 'column'}}>
                                    <div className="nav tag-cloud" style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'start'}}>
                                        <a href="#">Math</a>
                                        <a href="#">Hard</a>
                                        <a href="#">Help</a>
                                        <a href="#">Meaningofquesion</a>
                                        <a href="#">Need</a>
                                        <a href="#">Math</a>
                                    </div>
                                </div>
                            </header>

                            {/*image*/}
                            <div>
                                <Image src="https://dummyimage.com/900x400/ced4da/6c757d.jpg" alt=""/>
                                {/* <img src="https://dummyimage.com/900x400/ced4da/6c757d.jpg"/> */}
                            </div>
                            <CardActions disableSpacing sx ={{ justifyContent:'end' }} >
                                <IconButton aria-label="favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="thoumup">
                                    <ThumbUpIcon />
                                </IconButton>
                                <IconButton aria-label="SmsIcon">
                                    <SmsIcon />
                                </IconButton>
                                <IconButton aria-label="BookmarkIcon">
                                    <BookmarkIcon />
                                </IconButton>

                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                            </CardActions>
                            <section>
                                <p>We have solutions for your book!
                                    This problem has been solved:
                                </p>
                            </section>
                        </article>
                    </div>
                </Container>
                {/*comment section*/}
                <div className={styles.container} >
                    {/*<div style={{ marginBottom: '16px' }}>*/}
                    {/*    <h3 >Comment </h3>*/}
                    {/*</div>*/}

                    <div style={{ alignItems: 'center',
                        border:'0.1rem solid lightgray',
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        boxSizing: 'border-box',
                        display: 'flex',
                        marginBottom: '16px', marginTop: '20px', padding: '10px 12px' }}
                    >


                        <TextField
                            fullWidth
                            id="outlined-multiline-static"
                            label="Comment"
                            multiline
                            rows={4}

                        />

                    </div>
                </div>
            </div>
            <ProfileCard/>
        </div>

    )
}

