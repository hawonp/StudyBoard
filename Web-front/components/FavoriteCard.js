import { CardActionArea, CardActions } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Card from "@mui/material/Card";
import * as React from "react";
import { useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import SmsIcon from "@mui/icons-material/Sms";

export default function FavoriteCard({ favorite }) {
  const postData = favorite;
  console.log(favorite);

  return (
    <Card sx={{ width: "300px", marginTop: "20px", marginBottom: "20px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          src={postData.post_image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {postData.post_title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {postData.post_text}
          </Typography>
        </CardContent>
      </CardActionArea>

      {/*Icon*/}
      <CardActions>
        {/*Icon*/}
        <CardActions>
          <IconButton aria-label="favorites">
            <FavoriteIcon />
            <div>{postData.post_like_count}</div>
          </IconButton>
          <IconButton aria-label="thoumup">
            <ThumbUpIcon />
          </IconButton>
          <IconButton aria-label="SmsIcon">
            <SmsIcon />
          </IconButton>
        </CardActions>
        <IconButton aria-label="favorites">
          <BookmarkIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
