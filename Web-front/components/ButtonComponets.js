import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import SmsIcon from "@mui/icons-material/Sms";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ShareIcon from "@mui/icons-material/Share";
import CardActions from "@mui/material/CardActions";
import React from "react";
import FlagIcon from "@mui/icons-material/Flag";

const CountNumber = ({ style, children }) => {
  return (
    <div style={{ fontSize: "0.8rem", fontWeight: "bold", ...style }}>
      {" "}
      {children}{" "}
    </div>
  );
};

export default function ButtonComponets() {
  return (
    <CardActions disableSpacing sx={{ justifyContent: "end" }}>
      <IconButton aria-label="favorites" sx={{ borderRadius: "4px" }}>
        <FavoriteIcon sx={{ fontSize: "1.2rem" }} />

        <CountNumber>4 Likes</CountNumber>
      </IconButton>
      {/* post_like_count */}

      {/* <IconButton aria-label="thoumup">
                <ThumbUpIcon sx={{ fontSize: '1.2rem' }}/>
            </IconButton>
            <CountNumber>: 0</CountNumber> */}
      {/* Comment button &  */}

      <IconButton aria-label="SmsIcon" sx={{ borderRadius: "4px" }}>
        <SmsIcon sx={{ fontSize: "1.2rem" }} />
        &nbsp;
        <CountNumber>5 Replies</CountNumber>
      </IconButton>
      {/* post_reply_count */}
    </CardActions>
  );
}
