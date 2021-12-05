// react imports
import * as React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0";

// MUI imports
import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// package imports
import RichTextEditor from "./RichTextEditor";
import axiosInstance from "../../utils/routeUtil";

// constants
const POSTDATAENDPOINT = "/posts";

// functional component for editing a post
export default function PostEditing({ postCard, finish }) {
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
  const [inputTag, setInputTag] = useState(tags.flat().toString());

  // action handling for saving the currently edited post
  const savePost = async (user) => {
    //Format the tags before sending it to the db
    const formattedTags = inputTag
      .split(",")
      .map((unadjustedTag) =>
        unadjustedTag.trim().replace(/\s+/g, "-").toLowerCase()
      );
    axiosInstance
      .put(POSTDATAENDPOINT + "/" + router.query.id, {
        params: {
          userID: user.sub,
          title: inputTitle,
          text: inputContents,
          imageURL: inputImages,
          tags: formattedTags,
        },
      })
      .then((response) => {
        const responseData = JSON.parse(response["data"]);
        if (responseData == 1) {
          finish();
          router.push(POSTDATAENDPOINT + "/" + router.query.id);
        }
      })
      .catch((e) => {
        const resp = e.response;
        if (resp["status"] == 400) {
          router.push("/" + "error/400");
        }
      });
  };

  // render logic
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

      {/* get current title */}
      <TextField
        style={{ marginTop: "10px", marginBottom: "10px" }}
        fullWidth
        id="title"
        label="Post Title"
        variant="outlined"
        inputProps={{ maxLength: 64 }}
        value={inputTitle}
        onChange={(event) => setInputTitle(event.target.value)}
      />

      {/* initialize rich text editor */}
      <RichTextEditor content={inputContents} setContent={setInputContents} />

      {/* get current tags */}
      <TextField
        style={{ marginTop: "10px", marginBottom: "10px" }}
        fullWidth
        id="tag"
        label="Tags Attributed to this Post"
        variant="outlined"
        value={inputTag}
        onChange={(event) => setInputTag(event.target.value)}
      />

      {/* UI buttons for saving, canceling */}
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flex: 1, justifyContent: "end" }}>
          <Button
            sx={{ borderRadius: "8px", marginRight: "0.5rem" }}
            variant="outlined"
            color="success"
            onClick={() => savePost(user)}
          >
            SAVE
          </Button>
          <Button
            sx={{ borderRadius: "8px" }}
            variant="outlined"
            color="error"
            onClick={finish}
          >
            CANCEL
          </Button>
        </div>
      </div>
    </Box>
  );
}
