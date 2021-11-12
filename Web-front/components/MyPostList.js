import {CardActionArea, CardActions} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Card from "@mui/material/Card";
import * as React from "react";
import {useEffect, useState} from "react";

export default function MyPostList({ mypost }){
    const [mypostData, setMyPostData] = useState({});

    useEffect(() => {
        // TODO: API CALL BACKEND NEED
        // mypost는 post id
        // post 정보 불러오는 api 호출 (밑은 예시 결과값)
        const result = {
            date: '2021-11-09',
            title: mypost,
            username: 'PK HONG',
            image: "https://static01.nyt.com/images/2019/08/02/science/02EQUATION1/merlin_158743359_ff291f8a-d473-4849-9d81-9762826b55f4-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
            content: `THIS IS ${mypost}`
        }
        setMyPostData(result)

    },[mypost])
    return(
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    src="https://static01.nyt.com/images/2019/08/02/science/02EQUATION1/merlin_158743359_ff291f8a-d473-4849-9d81-9762826b55f4-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {mypostData.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {mypostData.content}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>

                <IconButton aria-label="favorites">
                    <Link href="">
                        <a><BookmarkIcon /></a>
                    </Link>
                </IconButton>

                <IconButton aria-label="favorites">
                    <Link href="">
                        <a><BookmarkIcon /></a>
                    </Link>
                </IconButton>

                <IconButton aria-label="favorites">
                    <Link href="">
                        <a><BookmarkIcon /></a>
                    </Link>
                </IconButton>

                <IconButton aria-label="favorites">
                    <Link href="">
                        <a><BookmarkIcon /></a>
                    </Link>
                </IconButton>

                <IconButton aria-label="favorites">
                    <Link href="">
                        <a><BookmarkIcon /></a>
                    </Link>
                </IconButton>

            </CardActions>
        </Card>
    )

}