import * as React from "react";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";
//Importing MUI
import { Box } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ShareIcon from "@mui/icons-material/Share";
import FlagIcon from "@mui/icons-material/Flag";

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

export default function DetailPost({
  postData,
  onLikePressed,
  onFavouritePressed,
}) {
  return (
    <DetailWrapper>
      <Box style={{ flex: 1, paddingRight: "1rem", paddingLeft: "1rem" }}>
        {/*title*/}
        <header style={{ marginBottom: "1.5rem" }}>
          <h1>{postData.title}</h1>
          {/*username*/}
          <div style={{ display: "flex", marginBottom: "1.5rem" }}>
            <div>{postData.user}</div>
            {/*date*/}
            <div style={{ display: "flex", flex: 1, justifyContent: "end" }}>
              {postData.date}
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
              {postData.tags.map((tag, i) => (
                <HashtagWrapper key={i}>{tag}</HashtagWrapper>
              ))}
            </div>
          </div>
        </header>
        <div>
          {postData.images == "None" ? (
            <></>
          ) : (
            <img
              style={{ maxHeight: "800px", objectFit: "contain" }}
              src={postData.images}
            />
          )}
        </div>

        <section>
          <p>
            {/*We have solutions for your book!*/}
            {/*This problem has been solved:*/}
            {postData.text}
          </p>
        </section>
        <CardActions disableSpacing sx={{ justifyContent: "end" }}>
          <IconButton
            aria-label="favorites"
            onClick={() =>
              onFavouritePressed(postData.id, postData.didUserFavourite)
            }
          >
            {postData.didUserFavourite ? (
              <FavoriteIcon />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
          <IconButton
            aria-label="thumbup"
            onClick={() => onLikePressed(postData.id, postData.didUserLike)}
          >
            {postData.didUserLike ? <ThumbUpIcon /> : <ThumbUpOffAltIcon />}
          </IconButton>
          <IconButton
            aria-label="share"
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
            }}
          >
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
