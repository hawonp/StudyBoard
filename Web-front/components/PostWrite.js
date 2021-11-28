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

const POSTDATAENDPOINT = "/posts";

export function PostWrite() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState();
  const [tag, setTag] = useState([]);
  const [image, setImage] = useState("None");
  const [uuid, setUuid] = useState("");
  const { user } = useUser();
  // widget.onChange(function (file) {
  //   console.log(file);
  // });
  // Widget.onUploadComplete(function (info) {
  //   // Handle uploaded file info.
  //   console.log(info);
  // });

  // // Same as above:
  // Widget.onChange(function (file) {
  //   if (file) {
  //     file.done(function (info) {
  //       console.log(info);
  //     });
  //   }
  // });

  const post = (user) => {
    console.log("title", title);
    console.log(typeof content);
    console.log("content", content);
    console.log("tag", tag);
    console.log(image);
    // Add a request interceptor
    axiosInstance.interceptors.request.use((request) => {
      console.log("Starting Request", JSON.stringify(request, null, 2));
      return request;
    });

    axiosInstance.interceptors.response.use((response) => {
      console.log("Response:", JSON.stringify(response, null, 2));
      return response;
    });
    axiosInstance
      .post(POSTDATAENDPOINT + "/write", {
        params: {
          userID: user.sub,
          title: title,
          text: content,
          imageURL: image,
          tags: tag,
          uuid: uuid,
        },
      })
      .then((response) => {
        const responseData = JSON.parse(response["data"]);
        alert("post added!");
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
          label="Title"
          variant="outlined"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <PostEditor
          content="<p>Write your question here!</p>"
          setContent={setContent}
        />
        <TextField
          style={{ marginTop: "10px", marginBottom: "10px" }}
          className="post-text"
          fullWidth
          id="tag"
          label="#tag"
          variant="outlined"
          value={tag}
          onChange={(event) =>
            setTag(
              event.target.value
                .split(",")
                .map((unadjustedTag) =>
                  unadjustedTag.trim().replace(/\s+/g, "-").toLowerCase()
                )
            )
          }
        />
        <div style={{ display: "flex" }}>
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
              sx={{ borderRadius: "8px" }}
              variant="contained"
              color="success"
              onClick={() => post(user)}
            >
              Post
            </Button>
          </div>
        </div>
        {/* {console.log("file: " + file["value"])}; */}
      </Box>
    </Container>
  );
}
