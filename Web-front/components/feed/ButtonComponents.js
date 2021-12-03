// react imports
import React from "react";

// MUI imports
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SmsIcon from "@mui/icons-material/Sms";
import CardActions from "@mui/material/CardActions";

// constants
const CountNumber = ({ style, children }) => {
  return (
    <div style={{ fontSize: "0.8rem", fontWeight: "bold", ...style }}>
      {" "}
      {children}{" "}
    </div>
  );
};

// functional component renders the number of likes and replies a post has (for the board page)
export default function ButtonComponents({ likeCount, replyCount }) {
  return (
    <CardActions disableSpacing sx={{ justifyContent: "end", padding: 0 }}>
      <IconButton
        disableRipple
        aria-label="favorites"
        sx={{ borderRadius: "4px" }}
      >
        <FavoriteIcon sx={{ fontSize: "1.2rem" }} />
        &nbsp;
        <CountNumber>{likeCount} Likes</CountNumber>
      </IconButton>

      <IconButton
        disableRipple
        aria-label="SmsIcon"
        sx={{ borderRadius: "4px" }}
      >
        <SmsIcon sx={{ fontSize: "1.2rem" }} />
        &nbsp;
        <CountNumber>{replyCount} Comments</CountNumber>
      </IconButton>
    </CardActions>
  );
} //end of functional component
