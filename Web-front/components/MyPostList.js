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
import { getTimeDisplay } from "../utils/utils";
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
  return (
    <Link href={"posts/" + mypost.post_id}>
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
                variant="h5"
                component="div"
                sx={{
                  fontSize: "1rem",
                }}
              >
                {myPostData.username || "nickname"}
              </Typography>

              {/* post date */}
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontSize: "0.8rem",
                  marginLeft: "0.8rem",
                  marginBottom: "0.5rem",
                }}
              >
                {diffTime}
              </Typography>
            </Box>
          </Box>

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
              disableRipple
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
      </Paper>
    </Link>
  );
}
