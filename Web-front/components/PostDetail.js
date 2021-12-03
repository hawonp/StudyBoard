// import * as React from 'react';
import { useState } from "react";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0";
import parse from "html-react-parser";
//Importing MUI
import { Box, Modal, TextField, Stack } from "@mui/material";
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
import SmsIcon from "@mui/icons-material/Sms";
import { getTimeDisplay } from "../utils/utils";
import axiosInstance from "../utils/routeUtil";
import { useEffect } from "react";
import Tooltip from "@mui/material/Tooltip";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";
import * as React from "react";
import MuiAlert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
import Link from "next/link";
import DeleteIcon from "@mui/icons-material/Delete";

import Typography from "@mui/material/Typography";

const POSTDATAENDPOINT = "/posts";
const FLAGENDPOINT = "/flag";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "8px",
  px: 4,
  pb: 3,
};

const deleteModalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "8px",
  px: 4,
  pb: 3,
};

const HashtagWrapper = ({ style, children }) => {
  return (
    <div
      style={{
        padding: "2px 6px",
        fontSize: "13px",
        color: "#3F8CB8",
        background: "#E1ECF4",
        borderRadius: "4px",
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
        position: "inherit",
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

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function PostDetail({
  postData,
  onLikePressed,
  onFavouritePressed,
  edit,
}) {
  //Necessary hooks
  const [open, setOpen] = useState(false);
  const [flagText, setFlagText] = useState("");
  const [flagList, setFlagList] = useState([]);
  const [isCopied, setisCopied] = useState(false);
  const router = useRouter();
  const { user } = useUser();

  const [diffTime, setDiffTime] = useState();
  useEffect(() => {
    setDiffTime(getTimeDisplay(new Date(), postData.date));
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openDelete, setOpenDelete] = useState(false);
  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);
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

  const [openShare, setOpenShare] = React.useState(false);

  const handleClickShare = () => {
    setOpenShare(true);
  };

  const handleCloseShare = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenShare(false);
  };

  const deletePost = () => {
    // router.push("/");
    axiosInstance
      .delete(POSTDATAENDPOINT + "/" + router.query.id)
      .then((response) => {
        // const responseData = JSON.parse(response["data"]);
        console.log(response);
        router.push("/" + "feed");
      });
  };

  console.log("postdata", postData);
  return (
    <DetailWrapper>
      <Snackbar
        open={openShare}
        autoHideDuration={1500}
        onClose={handleCloseShare}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseShare}
          severity="success"
          sx={{ width: "100%" }}
        >
          The current URL has been copied to your clipboard!{" "}
        </Alert>
      </Snackbar>
      {/* )} */}
      <Box style={{ flex: 1, paddingRight: "1rem", paddingLeft: "1rem" }}>
        <header>
          {/*title*/}
          <h1 style={{ marginBottom: "0.5rem" }}>{postData.title}</h1>
          {/*username*/}
          <div style={{ display: "flex" }}>
            <div
              style={{
                fontSize: "0.8rem",
                color: "#C4C4C4",
              }}
            >
              Posted by {postData.user}
            </div>
            {postData.user_is_endorsed ? (
              <div>
                <Tooltip title="This is Endorsed User post ">
                  <LightbulbIcon
                    sx={{
                      color: "#FFBF00",
                      fontSize: "0.8rem",
                    }}
                  />
                </Tooltip>
              </div>
            ) : (
              <></>
            )}

            {/*date*/}
            <div
              style={{
                display: "flex",
                flex: 1,
                fontSize: "0.8rem",
                color: "#C4C4C4",
              }}
            >
              &nbsp;
              {diffTime}
            </div>
          </div>
        </header>
        <div style={{ textAlign: "center" }}>
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
        <section>
          {" "}
          <Typography
            color="text.secondary"
            variant="body2"
            sx={{
              display: "-webkit-box",
              wordBreak: "break-all",
              WebkitBoxOrient: "vertical",
            }}
          >
            {parse(postData.text)}
          </Typography>
        </section>

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
              <Link href={`/tags/${tag}`} key={tag}>
                <a style={{ textDecoration: "none" }}>
                  <HashtagWrapper>{tag}</HashtagWrapper>
                </a>
              </Link>
            ))}
          </div>
        </div>

        <CardActions
          disableSpacing
          sx={{ justifyContent: "end", padding: "0" }}
        >
          {user && user.sub == postData.user_id ? (
            <IconButton
              title={"I want to edit"}
              onClick={edit}
              color="primary"
              sx={{ borderRadius: "4px" }}
            >
              <EditIcon sx={{ fontSize: "1.2rem" }} />
              <CountNumber> &nbsp;Edit</CountNumber>
            </IconButton>
          ) : (
            <> </>
          )}

          {user && user.sub == postData.user_id ? (
            <IconButton
              title={"I want to edit"}
              color="error"
              onClick={handleOpenDelete}
              sx={{ borderRadius: "4px" }}
            >
              <DeleteIcon sx={{ fontSize: "1.2rem" }} />
              <CountNumber> &nbsp;Delete</CountNumber>
            </IconButton>
          ) : (
            <> </>
          )}

          {/* check if the user is logged in */}
          {user ? (
            <div>
              {" "}
              {/*일반유저좋아요*/}
              <IconButton
                sx={{ borderRadius: "4px" }}
                aria-label="thumbup"
                onClick={() => onLikePressed(postData.id, postData.didUserLike)}
              >
                {postData.didUserLike ? (
                  <FavoriteIcon sx={{ fontSize: "1.2rem" }} />
                ) : (
                  <FavoriteBorderIcon sx={{ fontSize: "1.2rem" }} />
                )}
                <CountNumber>
                  &nbsp;{postData.postLikeCount || 0} Likes
                </CountNumber>
              </IconButton>
              {/*즐겨찾기 저장버튼*/}
              <IconButton
                sx={{ borderRadius: "4px" }}
                aria-label="favorites"
                onClick={() =>
                  onFavouritePressed(postData.id, postData.didUserFavourite)
                }
              >
                {postData.didUserFavourite ? (
                  <BookmarkIcon sx={{ fontSize: "1.2rem" }} />
                ) : (
                  <BookmarkBorderIcon sx={{ fontSize: "1.2rem" }} />
                )}
                <CountNumber> &nbsp;Favorite</CountNumber>
              </IconButton>
              {/* copy the link */}
              <IconButton
                sx={{ borderRadius: "4px" }}
                aria-label="share"
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  handleClickShare();
                }}
              >
                <ShareIcon sx={{ fontSize: "1.2rem" }} />
                &nbsp;
                <CountNumber> Share</CountNumber>
              </IconButton>
              {/* report button*/}
              <IconButton
                aria-label="report"
                onClick={handleOpen}
                sx={{ borderRadius: "4px" }}
              >
                <FlagIcon sx={{ fontSize: "1.2rem" }} />
                &nbsp;
                <CountNumber> Report</CountNumber>
              </IconButton>
            </div>
          ) : (
            <>
              {" "}
              {/*일반유저좋아요*/}
              <IconButton
                sx={{ borderRadius: "4px" }}
                aria-label="thumbup"
                disabled
              >
                <FavoriteBorderIcon sx={{ fontSize: "1.2rem" }} />
                <CountNumber>
                  &nbsp;{postData.postLikeCount || 0} Likes
                </CountNumber>
              </IconButton>
              {/*즐겨찾기 저장버튼*/}
              <IconButton
                sx={{ borderRadius: "4px" }}
                aria-label="favorites"
                disabled
              >
                <BookmarkBorderIcon sx={{ fontSize: "1.2rem" }} />

                <CountNumber> &nbsp;Favorite</CountNumber>
              </IconButton>
              {/* copy the link */}
              <IconButton
                sx={{ borderRadius: "4px" }}
                aria-label="share"
                disabled
              >
                <ShareIcon sx={{ fontSize: "1.2rem" }} />
                &nbsp;
                <CountNumber> Share</CountNumber>
              </IconButton>
              {/* report button*/}
              <IconButton
                aria-label="report"
                disabled
                sx={{ borderRadius: "4px" }}
              >
                <FlagIcon sx={{ fontSize: "1.2rem" }} />
                &nbsp;
                <CountNumber> Report</CountNumber>
              </IconButton>
            </>
          )}

          {/* Report Modal */}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <Box sx={{ ...modalStyle }}>
              <h4 id="child-modal-title">Submit a Report</h4>
              <div style={{ flex: 1 }}>
                <TextField
                  fullWidth
                  multiline
                  label={
                    "Please explain in a few sentances why you think this reply deserves a report!"
                  }
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
                    marginRight: "0.5rem",
                  }}
                  variant="outlined"
                  color="success"
                  type="submit"
                  onClick={report}
                >
                  Report
                </Button>
                <Button
                  sx={{
                    borderRadius: "8px",
                    height: "2rem",
                    marginTop: "0.5rem",
                  }}
                  variant="outlined"
                  color="error"
                  // type="submit"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </div>
            </Box>
          </Modal>
          {/* Delete Modal */}
          <Modal
            open={openDelete}
            onClose={handleCloseDelete}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={deleteModalStyle}>
              <h4 id="child-modal-title">Delete Account</h4>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Will you really delete this post? This action is not reversible.
              </Typography>
              <div style={{ display: "flex", flex: 1, justifyContent: "end" }}>
                <Button
                  sx={{
                    borderRadius: "8px",
                    height: "2rem",
                    marginTop: "0.5rem",
                    marginRight: "0.5rem",
                  }}
                  variant="outlined"
                  color="error"
                  type="submit"
                  onClick={deletePost}
                >
                  Delete Account
                </Button>
                <Button
                  sx={{
                    borderRadius: "8px",
                    height: "2rem",
                    marginTop: "0.5rem",
                  }}
                  variant="outlined"
                  color="success"
                  type="submit"
                  onClick={handleCloseDelete}
                >
                  Cancel
                </Button>
              </div>
            </Box>
          </Modal>
        </CardActions>
      </Box>
    </DetailWrapper>
  );
}
