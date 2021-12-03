// react imports
import React, { useEffect, useState } from "react";

// MUI imports
import Link from "next/link";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import CardHeader from "@mui/material/CardHeader";
import Tooltip from "@mui/material/Tooltip";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";

// package imports
import { getTimeDisplay } from "../../utils/utils";
import { stripHTMLTags } from "../../utils/utils";
import ButtonComponents from "./ButtonComponents";
import PostPreviewTags from "./PostPreviewTags";

// link to post detail page
const ROUTE_ID = "posts/[id]";

// functional component that renders the post previews shown in the board page
export default function PostPreview({ post }) {
  // dynamically renders post time
  const [diffTime, setDiffTime] = useState();
  useEffect(() => {
    setDiffTime(getTimeDisplay(new Date(), post.post_date));
  }, []);

  // rendering logic
  return (
    <Link href={{ pathname: ROUTE_ID, query: { id: post.post_id } }}>
      <a style={{ textDecoration: "none" }}>
        <Card
          sx={{
            marginTop: "1rem",
            border: "0.1rem solid lightgray",
          }}
        >
          <CardHeader
            style={{
              wordBreak: "break-all",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 1,
              overflow: "hidden",
              textOverflow: "ellipsis",
              textAlign: "left",
            }}
            title={post.post_title}
            subheader={
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: "0.8rem", color: "#C4C4C4" }}>
                  Posted by {post.user_nickname}
                </span>
                {post.user_is_endorsed == 1 ? (
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

                <span style={{ fontSize: "0.8rem", color: "#C4C4C4" }}>
                  &nbsp;
                  {diffTime}
                </span>
              </div>
            }
          ></CardHeader>

          {/* image content */}
          <Box sx={{ width: "100%" }}>
            {post.post_image == "None" ? (
              <></>
            ) : (
              <CardMedia
                component="img"
                sx={{ maxHeight: "400px", objectFit: "contain" }}
                src={post.post_image}
                alt="No image"
              />
            )}
          </Box>

          {/* post content (content hidden after first two lines) */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "1rem",
              marginRight: "1rem",
              justifyContent: "start",
            }}
          >
            <section>
              <Typography
                color="text.secondary"
                variant="body2"
                sx={{
                  display: "-webkit-box",
                  wordBreak: "break-all",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 2,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {stripHTMLTags(post.post_text)}
              </Typography>
            </section>
          </div>

          {/* tag components */}
          <CardContent style={{ textAlign: "left", padding: "0 1rem" }}>
            <PostPreviewTags tags={post.post_tags} />
          </CardContent>

          {/* button components for like and reply counts */}
          <ButtonComponents
            likeCount={post.post_like_count}
            replyCount={post.post_reply_count}
          />
        </Card>
      </a>
    </Link>
  );
} //functional component closure
