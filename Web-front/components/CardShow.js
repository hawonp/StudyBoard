import React, { useEffect, useState } from "react";
import Link from "next/link";
import StarIcon from "@mui/icons-material/Star";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import CardHeader from "@mui/material/CardHeader";
import Tooltip from "@mui/material/Tooltip";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import MenuBookIcon from "@mui/icons-material/MenuBook";

import ButtonComponets from "../components/ButtonComponets";
import CardTags from "./CardTags";
import { getTimeDisplay } from "../utils/utils";

//link to post detail page
const ROUTE_ID = "posts/[id]";

export default function CardShow({ post }) {
  const [diffTime, setDiffTime] = useState();
  useEffect(() => {
    setDiffTime(getTimeDisplay(new Date(), post.post_date));
  }, []);
  return (
    <Link href={{ pathname: ROUTE_ID, query: { id: post.post_id } }}>
      <a style={{ textDecoration: "none" }}>
        <Card
          sx={{
            maxWidth: 1250,
            marginTop: "1rem",
            border: "0.1rem solid lightgray",
          }}
        >
          <CardHeader
            style={{ textAlign: "left" }}
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

          <Link href={{ pathname: ROUTE_ID, query: { id: post.post_id } }}>
            <Box sx={{ width: "100%" }}>
              {post.post_image == "None" ? (
                <></>
              ) : (
                <CardMedia
                  component="img"
                  sx={{ maxHeight: "400px", objectFit: "contain" }}
                  // <Image  alt="Trulli" width="100%" height="100%" />
                  src={post.post_image}
                  alt="No image"
                />
              )}
            </Box>
          </Link>
          {/* card content  */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "1rem",
              justifyContent: "start",
            }}
          >
            <MenuBookIcon
              sx={{
                fontSize: "1.2rem",
                marginRight: "0.5rem",
                // color: "#FFBF00",
              }}
            />
            Click here to see the question..
          </div>

          <CardContent style={{ textAlign: "left", padding: "0 1rem" }}>
            {/* <Link href={{ pathname: ROUTE_ID, query: { id: post.post_id } }}>
          <a style={{ textDecoration: "none" }}>
            <Typography
              sx={{ marginBottom: "1.2rem" }}
              variant="body2"
              color="text.secondary"
            >
              {post.post_text}
            </Typography>
          </a>
        </Link> */}

            {/* tag components */}
            <CardTags tags={post.post_tags} />
          </CardContent>

          {/* this is icon */}
          <ButtonComponets
            likeCount={post.post_like_count}
            replyCount={post.post_reply_count}
          />
        </Card>
      </a>
    </Link>
  );
}
