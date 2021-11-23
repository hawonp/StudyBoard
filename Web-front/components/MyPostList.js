import { CardActionArea, CardActions } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import * as React from "react";
import { useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import SmsIcon from "@mui/icons-material/Sms";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const CardActionsWrapper = ({ style, children }) => {
  return (
    <div
      style={{
        display: "flex",
        marginLeft: "1rem",
        ...style,
      }}
    >
      {" "}
      {children}{" "}
    </div>
  );
};

const dummy_count = {
  user_post_like: 3,
  reply_count: 2,
  user_is_endorsed_like: 1,
};

export default function MyPostList({ mypost }) {
  const { user_post_like, user_is_endorsed_like, reply_count } = dummy_count;
  const [myPostData, setMyPostData] = useState({});

  useEffect(() => {
    // TODO: API CALL BACKEND NEED
    // mypost는 post id
    // post 정보 불러오는 api 호출 (밑은 예시 결과값)
    const result = {
      date: "2021-11-09",
      title: mypost,
      username: "PK HONG",
      image:
        "https://static01.nyt.com/images/2019/08/02/science/02EQUATION1/merlin_158743359_ff291f8a-d473-4849-9d81-9762826b55f4-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
      content: `THIS IS ${mypost}`,
    };
    setMyPostData(result);
  }, [mypost]);
  return (
    <>
      <Paper
        sx={{
          display: "flex",
          flexDirection: "row",
          marginTop: "2px",
          marginBottom: "2px",
          overflow: "hidden",
        }}
      >
        <img
          width="150"
          height="150"
          src="https://static01.nyt.com/images/2019/08/02/science/02EQUATION1/merlin_158743359_ff291f8a-d473-4849-9d81-9762826b55f4-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
          style={{ objectFit: "cover" }}
          alt="green iguana"
        />
        <Box
          sx={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              flexDirection: "column",
              marginLeft: "1rem",
              paddingTop: "1rem",
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {myPostData.title}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography gutterBottom variant="h5" component="div">
                {myPostData.username}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {myPostData.date}
              </Typography>
            </Box>
          </Box>
          <CardActionsWrapper>
            <IconButton
              aria-label="favorites"
              sx={{ padding: 0, borderRadius: "4px" }}
            >
              <FavoriteIcon sx={{ fontSize: "1.2rem" }} />
              <div style={{ fontSize: "0.8rem", fontWeight: "bold" }}>
                {user_post_like} Likes
              </div>
            </IconButton>

            {/* <div style={{ display: "inline-block" }}>
          <IconButton aria-label="thoumup">
            <ThumbUpIcon />
            <div>: {user_is_endorsed_like}</div>
          </IconButton>
        </div> */}

            {/* Comment button and Count */}
            <IconButton aria-label="SmsIcon">
              <SmsIcon />
              <div>{reply_count}</div>
            </IconButton>
          </CardActionsWrapper>
        </Box>
      </Paper>
    </>
  );
}
