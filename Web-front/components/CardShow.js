import React, { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "next/link";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

import Box from "@mui/material/Box";

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

//link to post detail page
const ROUTE_ID = "posts/[id]";

export default function CardShow({ post }) {
  //EditPost
  const [postCard, setpostCard] = useState({
    id: 1,
    title: "PK",
    content: "PKPKPK",
    images: "",
    tags: "#MATH #CSE #HARD",
  });

  useEffect(() => {
    // TODO: API CALL (BACKEND)
  }, []);

  return (
    <Card sx={{ maxWidth: 1250, marginTop: "1rem" }}>
      <CardHeader
        style={{ textAlign: "left" }}
        action={
          <div>
            <Tooltip title="This is Endorsed User post ">
              <StarIcon sx={{ color: "yellow", mt: "0.1rem" }} />
            </Tooltip>
          </div>
        }
        title={post.post_title}
        subheader={post.user_nickname}
      ></CardHeader>
      <Link href={{ pathname: ROUTE_ID, query: { id: post.post_id } }}>
        <Box sx={{ width: "90%", marginLeft: "5%", marginRight: "5%" }}>
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
      <CardContent style={{ textAlign: "left" }}>
        <Link href={{ pathname: ROUTE_ID, query: { id: post.post_id } }}>
          <a>
            <Typography variant="body2" color="text.secondary">
              {post.post_text}
            </Typography>
          </a>
        </Link>
        <div
          style={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "start",
            marginTop: "0.5rem",
            marginBottom: "0.5rem",
          }}
        >
          {post.post_tags.map((post_tags, i) => (
            <HashtagWrapper key={i}>{post_tags}</HashtagWrapper>
          ))}
        </div>
      </CardContent>

      {/* this is icon */}
      {/* <ButtonComponets /> */}
    </Card>
  );
}
