import * as React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import Router from "next/router";
import { useUser } from "@auth0/nextjs-auth0";
//Importing MUI
import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Button from "@mui/material/Button";

import PostEditor from "./PostEditor";
import axiosInstance from "../utils/routeUtil";

const POSTDATAENDPOINT = "/posts";

export default function EditPost({ postCard, finish }) {
  const { title, text, images, tags } = postCard ?? {
    title: null,
    text: null,
    images: null,
    tags: null,
  };
  const router = useRouter();
  const { user } = useUser();
  const [inputTitle, setInputTitle] = useState(title);
  const [inputContents, setInputContents] = useState(text);
  const [inputImages, setInputImages] = useState(images);
  const [inputTag, setInputTag] = useState(tags.flat());

  const savePost = async (user) => {
    axiosInstance
      .put(POSTDATAENDPOINT + "/" + router.query.id, {
        params: {
          userID: user.sub,
          title: inputTitle,
          text: inputContents,
          imageURL: inputImages,
          tags: inputTag,
        },
      })
      .then((response) => {
        const responseData = JSON.parse(response["data"]);
        if (responseData == 1) {
          finish();
          Router.push(POSTDATAENDPOINT + "/" + router.query.id);
        }
      });
  };
  return (
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
        <Typography variant={"button"}>Edit Your Post</Typography>
      </div>

      <TextField
        style={{ marginTop: "10px", marginBottom: "10px" }}
        fullWidth
        id="title"
        label="Title"
        variant="outlined"
        value={inputTitle}
        onChange={(event) => setInputTitle(event.target.value)}
      />
      <PostEditor content={inputContents} setContent={setInputContents} />

      <TextField
        style={{ marginTop: "10px", marginBottom: "10px" }}
        fullWidth
        id="tag"
        label="#tag"
        variant="outlined"
        value={inputTag}
        onChange={(event) => setInputTag(event.target.value.split(","))}
      />

      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flex: 1, justifyContent: "end" }}>
          <Button
            sx={{ borderRadius: "8px", marginRight: "0.5rem" }}
            variant="contained"
            color="error"
            onClick={finish}
          >
            CANCEL
          </Button>
          <Button
            sx={{ borderRadius: "8px" }}
            variant="contained"
            color="success"
            onClick={() => savePost(user)}
          >
            SAVE
          </Button>
        </div>
      </div>
    </Box>
  );
}
