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

import ButtonComponets from "./ButtonComponets";
import Box from "@mui/material/Box";

export default function CardShow({ post }) {
  // const { id, user, title, images, content, tags } = dummy_prop;

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
    <Card sx={{ maxWidth: 1250 }}>
      <CardHeader
        style={{ textAlign: "left" }}
        avatar={
          // user icon

          <Avatar sx={{ bgcolor: "black" }} aria-label="recipe"></Avatar>
        }
        action={
          <div>
            <Tooltip title="This is Endorsed User post ">
              <StarIcon sx={{ color: "yellow", mt: "0.1rem" }} />
            </Tooltip>

            {/*<Tooltip title="Edit">*/}
            {/*<Link href={`/postedit/${id}/${title}/${content}/${images}/${tag}`} >*/}
            {/*    <IconButton aria-label="EditIcon">*/}
            {/*        <EditIcon />*/}
            {/*    </IconButton>*/}
            {/*</Link>*/}
          </div>
        }
        title={post.post_title}
        subheader={post.user_nickname}
      ></CardHeader>
      {/*<Link href={`/postdetai/${post.id}/`}>*/}
      <Link href="/postdetail">
        <Box sx={{ width: "90%", marginLeft: "5%", marginRight: "5%" }}>
          <CardMedia
            component="img"
            sx={{ maxHeight: "400px", objectFit: "contain" }}
            // <Image  alt="Trulli" width="100%" height="100%" />
            src={post.post_image}
            alt="No image"
          />
        </Box>
      </Link>

      {/* card content  */}
      <CardContent style={{ textAlign: "left" }}>
        <Link href="/postdetail">
          <a>
            <Typography variant="body2" color="text.secondary">
              {post.post_text}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.tags}
            </Typography>
          </a>
        </Link>
      </CardContent>

      {/* this is icon */}
      <ButtonComponets />
    </Card>
  );
}
