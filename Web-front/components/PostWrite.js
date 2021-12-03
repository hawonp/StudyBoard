import * as React from "react";
import { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";
//Importing MUI
import Box from "@mui/material/Box";
import { TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import axiosInstance from "../utils/routeUtil";
import { Widget } from "@uploadcare/react-widget";
import PostEditor from "./PostEditor";
import { useRouter } from "next/router";
const POSTDATAENDPOINT = "/posts";

export function PostWrite() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState();
  const [tag, setTag] = useState("");
  const [image, setImage] = useState("None");
  const [uuid, setUuid] = useState("");
  const { user } = useUser();
  const router = useRouter();

  const post = (user) => {
    console.log("content", content);
    console.log("image URL", image);
    const formattedTags = tag
      .split(",")
      .map((unadjustedTag) =>
        unadjustedTag.trim().replace(/\s+/g, "-").toLowerCase()
      );
    console.log("tags", formattedTags);
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
        // alert("post added!");
        router.push("/feed");
      })
      .catch((e) => {
        const resp = e.response;
        if (resp["status"] == 400) {
          console.log("Bad request");
          //todo redirect
        }
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
          label="Post Title"
          variant="outlined"
          inputProps={{ maxLength: 64 }}
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <PostEditor
          // content="<p>Write your question here!</p>"
          setContent={setContent}
        />
        <TextField
          style={{ marginTop: "10px", marginBottom: "10px" }}
          className="post-text"
          fullWidth
          id="tag"
          label="Please add the tags to categorize this post by (separated by commas)"
          variant="outlined"
          value={tag}
          onChange={(event) => setTag(event.target.value)}
        />
        <div style={{ display: "flex", fontSize: "0.8rem" }}>
          <p>
            <label htmlFor="file">Your file:</label>{" "}
            <Widget
              publicKey="6bbd404d21507ac51c8f"
              id="file"
              onChange={(info) => {
                console.log(info), setImage(info.cdnUrl), setUuid(info.uuid);
              }}
              clearable
              imagesOnly
            />
          </p>
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
        {/* {console.log("file: " + file["value"])}; */}
      </Box>
    </Container>
  );
}
