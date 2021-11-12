import { Box } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ShareIcon from "@mui/icons-material/Share";
import FlagIcon from "@mui/icons-material/Flag";
import * as React from "react";

const HashtagWrapper = ({ style, children }) => {
  return (
    <div
      style={{
        padding: "4px 15px",
        fontSize: "13px",
        color: "#ffffff",
        background: "#20247b",
        borderRadius: "3px",
        marginRight: "4px",
        marginBottom: "4px",
        ...style,
      }}
    >
      {" "}
      {children}{" "}
    </div>
  );
};

const DetailWrapper = ({ style, children }) => {
  return (
    <div
      style={{
        alignItems: "center",
        border: "0.1rem solid lightgray",
        backgroundColor: "white",
        borderRadius: "8px",
        boxSizing: "border-box",
        padding: "10px 12px",
        ...style,
      }}
    >
      {" "}
      {children}{" "}
    </div>
  );
};

export default function DetailPost({ postData }) {
  const { post_id, user, title, images, content, tags } = postData;
  return (
    <DetailWrapper>
      <Box style={{ flex: 1, paddingRight: "1rem", paddingLeft: "1rem" }}>
        {/*title*/}
        <header style={{ marginBottom: "1.5rem" }}>
          <h1>{title}</h1>
          {/*username*/}
          <div style={{ display: "flex", marginBottom: "1.5rem" }}>
            <div>{user}</div>
            {/*date*/}
            <div style={{ display: "flex", flex: 1, justifyContent: "end" }}>
              date
            </div>
          </div>
          {/*hashtag*/}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "start",
              }}
            >
              <HashtagWrapper>{tags}</HashtagWrapper>
              {/*<HashtagWrapper>Hard</HashtagWrapper>*/}
              {/*<HashtagWrapper>Help</HashtagWrapper>*/}
            </div>
          </div>
        </header>

        {/*image*/}
        <div>
          {/*<div style={{width:'400px' ,height:'200px',objectFit: 'cover' }}></div>*/}
          {/*<img style={{width:'400px' ,height:'200px',objectFit: 'cover' }} src="https://dummyimage.com/900x400/ced4da/6c757d.jpg"/>*/}
          <img
            style={{ maxHeight: "800px", objectFit: "contain" }}
            src={images}
          />
        </div>

        <section>
          <p>
            {/*We have solutions for your book!*/}
            {/*This problem has been solved:*/}
            {content}
          </p>
        </section>

        <CardActions disableSpacing sx={{ justifyContent: "end" }}>
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
  );
}
