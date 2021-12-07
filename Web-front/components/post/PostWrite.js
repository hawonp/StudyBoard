// react imports
import * as React from "react";
import { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";

// MUI imports
import Box from "@mui/material/Box";
import { TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

// package imports
import { Widget } from "@uploadcare/react-widget";
import RichTextEditor from "./RichTextEditor";
import axiosInstance from "../../utils/routeUtil";

// constants
const POSTDATAENDPOINT = "/posts";

// functional component for writing a post
export function PostWrite() {
  const { user } = useUser(); // user session data from Auth0
  const router = useRouter(); // used for redirection

  // post detail states
  const [title, setTitle] = useState("");
  const [content, setContent] = useState();
  const [tag, setTag] = useState("");
  const [image, setImage] = useState("None");
  const [uuid, setUuid] = useState("");

  // action handling for posting a question
  const post = (user) => {
    const formattedTags = tag
      .split(",")
      .map((unadjustedTag) =>
        unadjustedTag.trim().replace(/\s+/g, "-").toLowerCase()
      );
    axiosInstance
      .post(POSTDATAENDPOINT + "/write", {
        params: {
          userID: user.sub,
          title: title,
          text: content,
          imageURL: image,
          tags: formattedTags,
          uuid: uuid,
        },
      })
      .then((response) => {
        const responseData = JSON.parse(response["data"]);
        router.push("/" + "feed");
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
        {/* post title */}
        <TextField
          style={{ marginTop: "10px", marginBottom: "10px" }}
          className="post-text"
          fullWidth
          required
          id="title"
          label="Post Title"
          variant="outlined"
          inputProps={{ maxLength: 64 }}
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        {/* post content */}
        <RichTextEditor setContent={setContent} />
        <TextField
          style={{ marginTop: "10px", marginBottom: "10px" }}
          className="post-text"
          fullWidth
          required
          id="tag"
          label="Please add the tags to categorize this post by (separated by commas)"
          variant="outlined"
          value={tag}
          onChange={(event) => setTag(event.target.value)}
        />
        <div style={{ display: "flex", fontSize: "0.8rem" }}>
          {/* post image */}
          <p>
            <label htmlFor="file">Your file:</label>{" "}
            <Widget
              publicKey="6bbd404d21507ac51c8f"
              id="file"
              onChange={(info) => {
                setImage(info.cdnUrl), setUuid(info.uuid);
              }}
              clearable
              imagesOnly
            />
          </p>
          {/* UI buttons for posting, canceling */}
          <div style={{ display: "flex", flex: 1, justifyContent: "end" }}>
            <Button
              sx={{
                borderRadius: "8px",
                marginRight: "0.5rem",
                padding: "0rem",
              }}
              variant="outlined"
              color="success"
              onClick={() => post(user)}
            >
              Post
            </Button>
            <Button
              sx={{ borderRadius: "8px", padding: "0rem" }}
              variant="outlined"
              color="error"
              onClick={() => router.push("/" + "feed")}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Box>
    </Container>
  );
}
