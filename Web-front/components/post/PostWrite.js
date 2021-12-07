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
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

// package imports
import { Widget } from "@uploadcare/react-widget";
import RichTextEditor from "./RichTextEditor";
import axiosInstance from "../../utils/routeUtil";

// constants
const POSTDATAENDPOINT = "/posts";

// alert logic for snackbar that appears when a user submit an empty post
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

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

  // modal states for making a post
  const [openPost, setOpenPost] = React.useState(false);
  const handleClickPost = () => {
    setOpenPost(true);
  };

  const handleClosePost = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenPost(false);
  };

  // action handling for posting a question
  const post = (user) => {
    const formattedTags = tag
      .split(",")
      .map((unadjustedTag) =>
        unadjustedTag.trim().replace(/\s+/g, "-").toLowerCase()
      );

    if (title.length > 0 && content.length > 0) {
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
    } else {
      handleClickPost();
    }
  };

  // render logic
  return (
    <Container>
      {/* snackbar that appears when sharing a post */}
      <Snackbar
        open={openPost}
        autoHideDuration={1500}
        onClose={handleClosePost}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleClosePost}
          severity="error"
          sx={{ width: "100%" }}
        >
          You need to fill out the title and text to post a question!{" "}
        </Alert>
      </Snackbar>

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
