import { CardActionArea, CardActions } from "@mui/material";
import Link from "next/link";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShareIcon from "@mui/icons-material/Share";
import Card from "@mui/material/Card";
import * as React from "react";
import ImageNotSupportedOutlinedIcon from "@mui/icons-material/ImageNotSupportedOutlined";
import { useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import SmsIcon from "@mui/icons-material/Sms";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import Tooltip from "@mui/material/Tooltip";
import { baseURL } from "../utils/routeUtil";
import { getTimeDisplay } from "../utils/utils";
import axiosInstance from "../utils/routeUtil";

const CardActionsWrapper = ({ style, children }) => {
  return (
    <div
      style={{
        display: "flex",
        marginLeft: "calc(1rem - 8px)",
        ...style,
      }}
    >
      {" "}
      {children}{" "}
    </div>
  );
};

export default function MyPostList({ mypost }) {
  const [myPostData, setMyPostData] = useState(mypost);
  const [diffTime, setDiffTime] = useState();

  useEffect(() => {
    setDiffTime(getTimeDisplay(new Date(), myPostData.post_date));
  }, []);

  const [openShare, setOpenShare] = React.useState(false);

  const handleClickShare = () => {
    setOpenShare(true);
  };

  const handleCloseShare = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenShare(false);
  };

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "row",
        marginTop: "2px",
        marginBottom: "2px",
        overflow: "hidden",
      }}
    >
      {mypost.post_image != "None" ? (
        <Paper>
          <img
            width="150"
            height="120"
            src={mypost.post_image}
            style={{ objectFit: "cover" }}
            alt="green iguana"
          />
        </Paper>
      ) : (
        <Paper
          style={{
            width: "150px",
            height: "120px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ImageNotSupportedOutlinedIcon sx={{ fontSize: "3rem" }} />
          <p style={{ fontSize: "0.6rem" }}>No Image</p>
        </Paper>
      )}

      <Box
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {" "}
        <Link href={"/" + "posts/" + mypost.post_id}>
          <Box
            sx={{
              flexDirection: "column",
              marginLeft: "1rem",
              paddingTop: "1rem",
            }}
          >
            {/* My Post title */}
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                fontSize: "1.6rem",
                marginBottom: "0",
              }}
            >
              {myPostData.post_title}
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "end",
              }}
            >
              {/* user nickname */}
              <Typography
                gutterBottom
                variant="span"
                component="div"
                sx={{
                  fontSize: "0.8rem",
                  color: "#C4C4C4",
                }}
              >
                Posted by {myPostData.user_nickname}
              </Typography>

              {/* user endorsed */}
              {myPostData.user_is_endorsed ? (
                <div>
                  <Tooltip title="This is Endorsed User post ">
                    <LightbulbIcon
                      sx={{
                        color: "#FFBF00",
                        fontSize: "0.8rem",
                      }}
                    />
                  </Tooltip>
                </div>
              ) : (
                <> </>
              )}
              {/* post date */}
              <Typography
                gutterBottom
                variant="span"
                component="div"
                sx={{
                  fontSize: "0.8rem",
                  color: "#C4C4C4",
                }}
              >
                &nbsp;
                {diffTime}
              </Typography>
            </Box>
          </Box>
        </Link>
        <CardActionsWrapper>
          {/* Like */}
          <IconButton
            disableRipple
            aria-label="favorites"
            sx={{ borderRadius: "4px" }}
          >
            <FavoriteIcon sx={{ fontSize: "1.2rem" }} />
            <div style={{ fontSize: "0.8rem", fontWeight: "bold" }}>
              &nbsp; {myPostData.post_like_count} Likes
            </div>
          </IconButton>

          {/* Comment */}
          <IconButton
            disableRipple
            aria-label="SmsIcon"
            sx={{ borderRadius: "4px", marginLeft: "0.2rem" }}
          >
            <SmsIcon sx={{ fontSize: "1.2rem" }} />
            <div style={{ fontSize: "0.8rem", fontWeight: "bold" }}>
              &nbsp;{myPostData.post_reply_count} Comments
            </div>
          </IconButton>

          {/* Share */}
          <IconButton
            // disableRipple
            sx={{ padding: 0, borderRadius: "4px", marginLeft: "0.2rem" }}
            aria-label="share"
            onClick={() => {
              navigator.clipboard.writeText(
                window.location.origin + "/posts/" + myPostData.post_id
              );
            }}
          >
            <ShareIcon sx={{ fontSize: "1.2rem" }} />
            <div style={{ fontSize: "0.8rem", fontWeight: "bold" }}>
              &nbsp;Share
            </div>
          </IconButton>
        </CardActionsWrapper>
      </Box>
    </Paper>
  );
}
