import {Box} from "@mui/material";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ShareIcon from "@mui/icons-material/Share";
import FlagIcon from "@mui/icons-material/Flag";
import * as React from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import EditPost from "./EditPost";
import {useState} from "react";

const dummy_prop = {
    id: "1",
    user: "pk",
    title: "Dummy Data title",
    images:
        "https://woulduin.com/assets/users/_meta/2021/07/18/39bd9107-13df-4172-af6a-3674215d3054_KakaoTalk_20210717_191956085.gif",
    content: "Dummy Data Content",
    tags: "#math",
};

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

export default function DetailPost({ postData, edit }) {
    const { post_id, user, title, images, content, tags } = postData;
    return (
        <DetailWrapper>
            <Box style={{ flex: 1, paddingRight: '1rem', paddingLeft: '1rem' }}>


                <header style={{ marginBottom: '1.5rem'}}>
                    {/*title*/}
                    <h1>{title}</h1>

                    {/*username*/}
                    <div style={{ display: 'flex', marginBottom: '1.5rem' }}>
                        <div>{user}</div>

                        {/*date*/}
                        <div style={{ display: 'flex', flex: 1, justifyContent:'end' }}>
                            date
                        </div>
                    </div>

                    {/*hashtag*/}
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'start'}}>
                            <HashtagWrapper>{tags}</HashtagWrapper>
                        </div>
                    </div>

                </header>

                {/*image*/}
                <img style={{maxWidth: "100%", maxHeight: '800px', objectFit: 'contain'}} src={'https://res.cloudinary.com/picked/image/upload/q_60,h_600,f_auto/v1631286117/cms/aptitude-test-sample-questions-and-answers-1631286117'} />

                <section>

                    <p>{content}</p>
                </section>

                <CardActions disableSpacing sx ={{ justifyContent:'end' }} >

                    <Button title={"I want to edit"} onClick={edit} sx={{ width: "100px", height: "50px" }} >
                        수정하기
                    </Button>

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
    )
}

