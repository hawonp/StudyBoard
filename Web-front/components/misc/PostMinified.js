// react imports
import Link from "next/link";
import * as React from "react";
import { useEffect, useState } from "react";

// MUI imports
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SmsIcon from "@mui/icons-material/Sms";
import ImageNotSupportedOutlinedIcon from "@mui/icons-material/ImageNotSupportedOutlined";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import Tooltip from "@mui/material/Tooltip";

// package imports
import { getTimeDisplay } from "../../utils/utils";

// CardActionsWrapper styling
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

// functional component for rendering a minified view of a post
export default function PostMinified({ data }) {
  const [diffTime, setDiffTime] = useState();

  useEffect(() => {
    setDiffTime(getTimeDisplay(new Date(), data.post_date));
  }, []);

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
      {data.post_image != "None" ? (
        <Paper>
          <img
            width="150"
            height="120"
            src={data.post_image}
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
        <Link href={"/" + "posts/" + data.post_id}>
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
                display: "-webkit-box",
                wordBreak: "break-all",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 1,
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {data.post_title}
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
                Posted by {data.user_nickname}
              </Typography>

              {/* user endorsed */}
              {data.user_is_endorsed ? (
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
              &nbsp; {data.post_like_count} Likes
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
              &nbsp;{data.post_reply_count} Comments
            </div>
          </IconButton>

          {/* Share */}
          <IconButton
            // disableRipple
            sx={{ padding: 0, borderRadius: "4px", marginLeft: "0.2rem" }}
            aria-label="share"
            onClick={() => {
              navigator.clipboard.writeText(
                window.location.origin + "/posts/" + data.post_id
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
} // functional component closure
