import React, { useState } from "react";
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
import CardActions from "@mui/material/CardActions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import SmsIcon from "@mui/icons-material/Sms";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ShareIcon from "@mui/icons-material/Share";

const dummy_prop = {
  id: "1",
  user: "pk",
  title: "Dummy Data title",
  content: "Dummy Data Content",
  tags: "#math",
};

export default function CardShow({
  user,
  title,
  content,
  imageURL,
  likeCount,
  replyCount,
  tags,
}) {
  const { id, user, title, images, content, tags } = dummy_prop;
  return (
    <Card sx={{ maxWidth: 1250 }}>
      <StarIcon sx={{ color: "blue", mt: "0.1rem" }} />
      <CardHeader
        style={{ textAlign: "left" }}
        avatar={
          // user icon

          <Avatar sx={{ bgcolor: "black" }} aria-label="recipe"></Avatar>
        }
        action={
          <div>
            <Tooltip title="Edit">
              <IconButton aria-label="EditIcon">
                <EditIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </div>
        }
        title={user}
        subheader={title}
      ></CardHeader>

      <Link href="/postdetail">
        <a>
          <CardMedia
            component="img"
            height="194"
            // <Image  alt="Trulli" width="100%" height="100%" />
            src={images}
            alt="No image"
          />
        </a>
      </Link>

      {/* card content  */}
      <CardContent style={{ textAlign: "left" }}>
        <Link href="/postdetail">
          <a>
            <Typography variant="body2" color="text.secondary">
              {content}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {tags}
            </Typography>
          </a>
        </Link>
      </CardContent>

      {/* this is icon */}
      <CardActions disableSpacing sx={{ justifyContent: "end" }}>
        <IconButton aria-label="favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="thoumup">
          <ThumbUpIcon />
        </IconButton>
        <IconButton aria-label="SmsIcon">
          <SmsIcon />
        </IconButton>
        <IconButton aria-label="BookmarkIcon">
          <BookmarkIcon />
        </IconButton>

        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
