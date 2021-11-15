import { CardActionArea, CardActions } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Card from "@mui/material/Card";
import * as React from "react";
import {useEffect, useState} from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import SmsIcon from "@mui/icons-material/Sms";

export default function FavoriteCard({ favorite }) {
  const [postData, setPostData] = useState({});

  useEffect(() => {
    // TODO: API CALL BACKEND NEED
    // favorite는 post id
    // post 정보 불러오는 api 호출 (밑은 예시 결과값)
    const result = {
      date: "2021-11-09",
      title: favorite,
      username: "PK HONG",
      image:
        "https://static01.nyt.com/images/2019/08/02/science/02EQUATION1/merlin_158743359_ff291f8a-d473-4849-9d81-9762826b55f4-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
      content: `THIS IS ${favorite}`,
    };
    setPostData(result);
  }, [favorite]);

  return (
    <Card sx={{ width: "300px", marginTop: "20px", marginBottom: "20px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          src={postData.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {postData.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {postData.content}
          </Typography>
        </CardContent>
      </CardActionArea>

      {/*Icon*/}
      <CardActions>
        <IconButton aria-label="favorites">
          <Link href="">
            <BookmarkIcon />
          </Link>
        </IconButton>

            {/*Icon*/}
            <CardActions>

                <IconButton aria-label="favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="thoumup">
                    <ThumbUpIcon />
                </IconButton>
                <IconButton aria-label="SmsIcon">
                    <SmsIcon />
                </IconButton>

            </CardActions>
        </Card>
    )

}
