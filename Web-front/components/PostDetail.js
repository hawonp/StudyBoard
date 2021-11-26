// import * as React from 'react';
import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0";
import parse from "html-react-parser";
//Importing MUI
import { Alert, Box, Modal, TextField } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";
import FlagIcon from "@mui/icons-material/Flag";
import EditIcon from "@mui/icons-material/Edit";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import Button from "@mui/material/Button";

import axiosInstance from "../utils/routeUtil";
import { ReportContext } from "../contexts/ReportContext";

const POSTDATAENDPOINT = "/posts";
const FLAGENDPOINT = "/flag";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

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
        marginTop: "4px",
        marginBottom: "4px",
        ...style,
      }}
    >
      {" "}
      {children}{" "}
    </div>
  );
};

const DetailWrapper = ({ style, children }) => {
  return (
    <div
      style={{
        alignItems: "center",
        border: "0.1rem solid lightgray",
        backgroundColor: "white",
        borderRadius: "8px",
        boxSizing: "border-box",

        ...style,
      }}
    >
      {" "}
      {children}{" "}
    </div>
  );
};

const CountNumber = ({ style, children }) => {
  return (
    <div style={{ fontSize: "0.8rem", fontWeight: "bold", ...style }}>
      {" "}
      {children}{" "}
    </div>
  );
};

export default function PostDetail({
  postData,
  onLikePressed,
  onFavouritePressed,
  edit,
}) {
  //Necessary hooks
  const [open, setOpen] = useState(false);
  const [flagText, setFlagText] = useState("");
  const [flagList, setFlagList] = useContext(ReportContext);
  const router = useRouter();
  const { user } = useUser();
  //Setting functions
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // Add a request interceptor
  axiosInstance.interceptors.request.use((request) => {
    console.log("Starting Request", JSON.stringify(request, null, 2));
    return request;
  });

  axiosInstance.interceptors.response.use((response) => {
    console.log("Response:", JSON.stringify(response, null, 2));
    return response;
  });
  const report = () => {
    axiosInstance
      .post(POSTDATAENDPOINT + "/" + router.query.id + FLAGENDPOINT, {
        params: { userID: user.sub, text: flagText },
      })
      .then((response) => {
        const responseData = JSON.parse(response["data"]);
      });
    setFlagText("");
    setOpen(false);
  };

  return (
    <DetailWrapper>
      <Box style={{ flex: 1, paddingRight: "1rem", paddingLeft: "1rem" }}>
        {/*title*/}
        <header style={{ marginBottom: "1.5rem" }}>
          <h1>{postData.title}</h1>
          {/*username*/}
          <div style={{ display: "flex", marginBottom: "1.5rem" }}>
            <div>Posted by {postData.user}&nbsp;</div>
            {/*date*/}
            <div style={{ display: "flex", flex: 1 }}>-{postData.date}</div>
          </div>
        </header>
        <div>
          {postData.images == "None" ? (
            <></>
          ) : (
            <img
              style={{
                maxHeight: "800px",
                maxWidth: "100%",
                objectFit: "contain",
              }}
              src={postData.images}
            />
          )}
        </div>

        {/* question text */}
        <section>{parse(postData.text)}</section>

        {/*hashtag*/}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexFlow: "row wrap",
              justifyContent: "start",
            }}
          >
            {postData.tags.map((tag, i) => (
              <HashtagWrapper key={i}>{tag}</HashtagWrapper>
            ))}
          </div>
        </div>

        <CardActions
          disableSpacing
          sx={{ justifyContent: "end", padding: "none" }}
        >
          <IconButton title={"I want to edit"} onClick={edit}>
            <EditIcon />
          </IconButton>
          {/*일반유저좋아요*/}
          <IconButton
            aria-label="thumbup"
            onClick={() => onLikePressed(postData.id, postData.didUserLike)}
          >
            {postData.didUserLike ? (
              <IconButton aria-label="favorites">
                <FavoriteIcon />
                <CountNumber>{postData.post_like_count}</CountNumber>
              </IconButton>
            ) : (
              <IconButton aria-label="favorites">
                <FavoriteBorderIcon />
                <CountNumber>{postData.post_like_count}</CountNumber>
              </IconButton>
            )}
          </IconButton>
          {/*즐겨찾기 저장버튼*/}
          <IconButton
            aria-label="favorites"
            onClick={() =>
              onFavouritePressed(postData.id, postData.didUserFavourite)
            }
          >
            {postData.didUserFavourite ? (
              <BookmarkIcon />
            ) : (
              <BookmarkBorderIcon />
            )}
          </IconButton>
          {/* copy the link */}
          <IconButton
            aria-label="share"
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
            }}
          >
            <ShareIcon />
          </IconButton>
          {/* report button*/}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <Box sx={{ ...modalStyle }}>
              <h4 id="child-modal-title">Report</h4>
              <div style={{ flex: 1 }}>
                <TextField
                  fullWidth
                  multiline
                  label={"Report Information"}
                  value={flagText}
                  onChange={(e) => setFlagText(e.target.value)}
                />
              </div>
              <div style={{ display: "flex", flex: 1, justifyContent: "end" }}>
                <Button
                  sx={{
                    borderRadius: "8px",
                    height: "2rem",
                    marginTop: "0.5rem",
                  }}
                  variant="contained"
                  color="success"
                  type="submit"
                  onClick={report}
                >
                  Report
                </Button>
              </div>
            </Box>
          </Modal>
          <IconButton aria-label="report" onClick={handleOpen}>
            <FlagIcon />
          </IconButton>
        </CardActions>
      </Box>
    </DetailWrapper>
  );
}
