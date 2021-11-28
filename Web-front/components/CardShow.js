import React, { useEffect, useState } from "react";
import Link from "next/link";
import StarIcon from "@mui/icons-material/Star";
import CardHeader from "@mui/material/CardHeader";
import Tooltip from "@mui/material/Tooltip";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";

import ButtonComponets from "../components/ButtonComponets";
import CardTags from "./CardTags";

//link to post detail page
const ROUTE_ID = "posts/[id]";

export default function CardShow({ post }) {
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
            action={
              <div>
                <Tooltip title="This is Endorsed User post ">
                  <StarIcon sx={{ color: "#FFBF00", mt: "0.1rem" }} />
                </Tooltip>
              </div>
            }
            title={post.post_title}
            subheader={
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: "0.4rem",
                }}
              >
                <span style={{ fontWeight: "bold" }}>{post.user_nickname}</span>
                <span style={{ marginLeft: "1rem", fontSize: "0.8rem" }}>
                  - {post.date || "No Date"}
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
