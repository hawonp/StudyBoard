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

export default function FavoriteCard({ favorite }) {
  const postData = favorite;
  console.log(favorite);

  useEffect(() => {
    // TODO: API CALL BACKEND NEED

    // favorite는 post id
    // post 정보 불러오는 api 호출 (밑은 예시 결과값)
    // const result = {
    //   date: "2021-11-09",
    //   title: favorite,
    //   username: "PK HONG",
    //   image:
    //     "https://static01.nyt.com/images/2019/08/02/science/02EQUATION1/merlin_158743359_ff291f8a-d473-4849-9d81-9762826b55f4-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
    //   content: `THIS IS ${favorite}`,
    // };
    setPostData(favorite);
  }, [favorite]);


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
          height="120"
          src={postData.post_image}
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
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                fontSize: "1.6rem",
              }}
            >
              {postData.post_title}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontSize: "1rem",
                }}
              >
                {postData.post_text}
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontSize: "0.8rem",
                  marginLeft: "0.8rem",
                }}
              >
                {postData.date}
              </Typography>
            </Box>

            {/*Icon*/}
            <CardActionsWrapper>
              {/* Like */}
              <IconButton
                aria-label="favorites"
                sx={{ padding: 0, borderRadius: "4px" }}
              >
                <FavoriteIcon sx={{ fontSize: "1.2rem" }} />
                <div style={{ fontSize: "0.8rem", fontWeight: "bold" }}>
                  {user_post_like} Likes
                </div>
              </IconButton>

              {/* Moderator */}

              {/* <IconButton
              aria-label="SmsIcon"
              sx={{ padding: 0, borderRadius: "4px", marginLeft: "0.2rem" }}
            >
                <ThumbUpIcon />
                <div>: {user_is_endorsed_like}</div>
              </IconButton>
             */}

              {/* Comment */}
              <IconButton
                aria-label="SmsIcon"
                sx={{ padding: 0, borderRadius: "4px", marginLeft: "0.2rem" }}
              >
                <SmsIcon sx={{ fontSize: "1.2rem" }} />
                <div style={{ fontSize: "0.8rem", fontWeight: "bold" }}>
                  {reply_count} Comment
                </div>
              </IconButton>

              {/* Share */}
              <IconButton
                sx={{ padding: 0, borderRadius: "4px", marginLeft: "0.2rem" }}
                aria-label="share"
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                }}
              >
                <ShareIcon sx={{ fontSize: "1.2rem" }} />
                <div style={{ fontSize: "0.8rem", fontWeight: "bold" }}>
                  &nbsp;Share
                </div>
              </IconButton>

              {/* report button
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="parent-modal-title"
              aria-describedby="parent-modal-description"
            >
              <Box sx={{ ...modalStyle }}>
                <h4 id="child-modal-title">Report</h4>
                <div style={{ flex: 1 }}>
                  <TextField
                    fullWidth
                    multiline
                    label={"Report Information"}
                    value={flagText}
                    onChange={(e) => setFlagText(e.target.value)}
                  />
                </div>
                <div
                  style={{ display: "flex", flex: 1, justifyContent: "end" }}
                >
                  <Button
                    sx={{
                      borderRadius: "8px",
                      height: "2rem",
                      marginTop: "0.5rem",
                    }}
                    variant="contained"
                    color="success"
                    type="submit"
                    onClick={report}
                  >
                    Report
                  </Button>
                </div>
              </Box>
            </Modal>
            <IconButton
              aria-label="report"
              onClick={handleOpen}
              sx={{ borderRadius: "4px" }}
            >
              <FlagIcon sx={{ fontSize: "1.2rem" }} />
              &nbsp;
              <CountNumber> Report</CountNumber>
            </IconButton> */}
            </CardActionsWrapper>
          </Box>
        </Box>
      </Paper>
    </>
  );
}
