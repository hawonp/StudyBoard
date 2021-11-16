import * as React from "react";
import { useState } from "react";
import Cookies from "universal-cookie";
//Importing MUI
import Box from "@mui/material/Box";
import { TextField, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import axiosInstance from "../utils/routeUtil";

const cookies = new Cookies();
const POSTDATAENDPOINT = "/posts";

export function PostWrite() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");
  const [image, setImage] = useState(null);

  const post = () => {
    console.log("title", title);
    console.log("content", content);
    console.log("tag", tag);

    // TODO: IMAGE
    axiosInstance
      .post(POSTDATAENDPOINT + "/write", {
        params: {
          userID: cookies.get("user_id"),
          title: title,
          text: content,
          imageURL: "None",
          tags: tag,
        },
      })
      .then((response) => {
        const responseData = JSON.parse(response["data"]);
        alert("post added!");
      });
  };

  return (
    <Container>
      <Box
        style={{
          border: "0.1rem solid lightgray",
          borderRadius: "4px",
          marginBottom: "16px",
          marginTop: "20px",
          padding: "10px 12px",
          backgroundColor: "white",
        }}
      >
        <div
          style={{ marginTop: "8px", marginBottom: "16px", padding: "0.5rem" }}
        >
          <Typography variant={"button"}>Post Your Question</Typography>
        </div>

        <TextField
          style={{ marginTop: "10px", marginBottom: "10px" }}
          className="post-text"
          fullWidth
          id="title"
          label="Title"
          variant="outlined"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <TextField
          rows={12}
          multiline
          style={{ marginTop: "10px", marginBottom: "10px" }}
          className="post-text"
          fullWidth
          id="title"
          label="Question?"
          variant="outlined"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        >
          <span>hi</span>
        </TextField>
        <TextField
          style={{ marginTop: "10px", marginBottom: "10px" }}
          className="post-text"
          fullWidth
          id="tag"
          label="#tag"
          variant="outlined"
          value={tag}
          onChange={(event) => setTag(event.target.value.split(","))}
        />
        <div style={{ display: "flex" }}>
          <label htmlFor="icon-button-file">
            <input
              style={{ display: "none" }}
              accept="image/*"
              id="icon-button-file"
              type="file"
              onChange={(event) => setImage(event.target.files[0])}
            />
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              style={{}}
            >
              <PhotoCamera />
            </IconButton>
          </label>
          <div style={{ display: "flex", flex: 1, justifyContent: "end" }}>
            <Button
              sx={{ borderRadius: "8px" }}
              variant="contained"
              color="success"
              onClick={post}
            >
              Post
            </Button>
          </div>
        </div>
      </Box>
    </Container>
  );
}
