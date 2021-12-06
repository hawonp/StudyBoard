// react imports
import { useState } from "react";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0";
import parse from "html-react-parser";
import { useEffect } from "react";
import * as React from "react";
import Link from "next/link";

// MUI imports
import { Box, Modal, TextField } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";
import FlagIcon from "@mui/icons-material/Flag";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";

// package imports
import { getTimeDisplay } from "../../utils/utils";
import axiosInstance from "../../utils/routeUtil";

// constants
const POSTDATAENDPOINT = "/posts";
const FLAGENDPOINT = "/flag";

// styling for the report modal
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

// styling for the deleting account modal
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

// HashtagWrapper styling
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

// DetailWrapper styling
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

// styling for the counts (of likes, replies)
const CountNumber = ({ style, children }) => {
  return (
    <div style={{ fontSize: "0.8rem", fontWeight: "bold", ...style }}>
      {" "}
      {children}{" "}
    </div>
  );
};

// alert logic for snackbar that appears when a user shares a question
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

// functional component for displaying the post details
export default function PostDetail({
  postData,
  onLikePressed,
  onFavouritePressed,
  edit,
}) {
  const [flagText, setFlagText] = useState(""); // data state to save the report reason
  const router = useRouter(); // used for redirection
  const { user } = useUser(); // user session auth for Auth0

  // dynamically calculate how long ago the post was made
  const [diffTime, setDiffTime] = useState();
  useEffect(() => {
    setDiffTime(getTimeDisplay(new Date(), postData.date));
  }, []);

  // modal states for reporting a post
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // modal states for deleting a post
  const [openDelete, setOpenDelete] = useState(false);
  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);

  // modal states for sharing a post
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

  // action handling for reporting a post
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

  // action handling for deleting a post
  const deletePost = () => {
    // router.push("/");
    axiosInstance
      .delete(POSTDATAENDPOINT + "/" + router.query.id)
      .then((response) => {
        router.push("/" + "feed");
      });
  };

  // rendering logic for post details
  return (
    <DetailWrapper>
      {/* snackbar that appears when sharing a post */}
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

      {/* post details */}
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
        {/* post image */}
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

        {/* post text */}
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

        {/* post tags */}
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

        {/* UI components for interacting with the post */}
        <CardActions
          disableSpacing
          sx={{ justifyContent: "end", padding: "0" }}
        >
          {/* if the current logged in user is the user who posted this post, display the edit button */}
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
          {/* if the current logged in user is the user who posted this post, display the delete button */}
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
              {/* like button */}
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
              {/* favorite button*/}
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
              {/* share button */}
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
              {/* user not logged in, like button disabled */}
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
              {/* user not logged in, favorite button disabled */}
              <IconButton
                sx={{ borderRadius: "4px" }}
                aria-label="favorites"
                disabled
              >
                <BookmarkBorderIcon sx={{ fontSize: "1.2rem" }} />

                <CountNumber> &nbsp;Favorite</CountNumber>
              </IconButton>
              {/* user not logged in, share button disabled  */}
              <IconButton
                sx={{ borderRadius: "4px" }}
                aria-label="share"
                disabled
              >
                <ShareIcon sx={{ fontSize: "1.2rem" }} />
                &nbsp;
                <CountNumber> Share</CountNumber>
              </IconButton>
              {/* user not logged in, report button disabled */}
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
              <h4 id="child-modal-title">Delete Post</h4>
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
                  Delete Post
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
} // functional component closure
