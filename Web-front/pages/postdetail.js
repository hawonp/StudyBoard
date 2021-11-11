import Container from "@mui/material/Container";
import ProfileCard from "../components/ProfileCard";
import * as React from "react";
import Link from "next/link";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import FlagIcon from '@mui/icons-material/Flag';
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ShareIcon from "@mui/icons-material/Share";
import CardActions from "@mui/material/CardActions";

import {Box} from "@mui/material";

const DetailWrapper = ({ style, children}) => {
    return (
        <div style={{ alignItems: 'center',
            border:'0.1rem solid lightgray',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxSizing: 'border-box',
            padding: '10px 12px',
            ...style}}
        > {children} </div>
    )
}

const HashtagWrapper = ({ style, children}) => {
    return (
        <div style={{padding: '4px 15px', fontSize: '13px',
            color: '#ffffff',background: '#20247b',
            borderRadius: '3px', marginRight: '4px',
            marginBottom: '4px',
            ...style}}
        > {children} </div>
    )
}

export default function Detail() {

    return (
        <div style={{display: 'flex'}}>
            <div style={{display: 'flex', flex: 1, flexDirection: 'column'}}>
                <Container sx={{marginBottom: '16px', marginTop: '20px'}}>
                    <DetailWrapper>
                        <Box style={{ flex: 1, paddingRight: '1rem', paddingLeft: '1rem' }}>

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
                                <div style={{display: 'flex', flexDirection: 'column'}}>
                                    <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'start'}}>
                                        <HashtagWrapper>Math</HashtagWrapper>
                                        <HashtagWrapper>Hard</HashtagWrapper>
                                        <HashtagWrapper>Help</HashtagWrapper>

                                    </div>
                                </div>
                            </header>

                            {/*image*/}
                            <div>
                                {/*<div style={{width:'400px' ,height:'200px',objectFit: 'cover' }}></div>*/}
                                {/*<img style={{width:'400px' ,height:'200px',objectFit: 'cover' }} src="https://dummyimage.com/900x400/ced4da/6c757d.jpg"/>*/}
                                <img style={{maxHeight: '800px', objectFit: 'contain'}} src={'https://woulduin.com/assets/users/_meta/2021/07/18/39bd9107-13df-4172-af6a-3674215d3054_KakaoTalk_20210717_191956085.gif'} />
                            </div>


                            <section>
                                <p>
                                    We have solutions for your book!
                                    This problem has been solved:
                                </p>
                            </section>

                            <CardActions disableSpacing sx ={{ justifyContent:'end' }} >
                                <IconButton aria-label="favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="thoumup">
                                    <ThumbUpIcon />
                                </IconButton>
                                <IconButton aria-label="BookmarkIcon">
                                    <BookmarkIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                                <IconButton aria-label="report">
                                    <FlagIcon />
                                </IconButton>
                            </CardActions>
                        </Box>
                    </DetailWrapper>
                </Container>

                {/*comment section*/}
                <Container >
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
                </Container>
            </div>

            <ProfileCard/>
        </div>

    )
}


