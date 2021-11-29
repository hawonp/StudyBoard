// import * as React from 'react';
import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0";
import parse from "html-react-parser";
//Importing MUI
import { Alert, Box, Modal, TextField, Stack } from "@mui/material";
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
import { ReportContext } from "../contexts/ReportContext";
import { useEffect } from "react";
import Tooltip from "@mui/material/Tooltip";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

const POSTDATAENDPOINT = "/posts";
const FLAGENDPOINT = "/flag";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
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
        color: "#3F8CB8",
        background: "#E1ECF4",
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
  const [isCopied, setisCopied] = useState(false);
  const router = useRouter();
  const { user } = useUser();

  const [diffTime, setDiffTime] = useState();
  useEffect(() => {
    setDiffTime(getTimeDisplay(new Date(), postData.date));
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  const alertCopy = () => {
    setisCopied(true);
    setTimeout(() => {
      setisCopied(false);
    }, 2000);
  };

  console.log("postdata", postData);
  return (
    <DetailWrapper>
      {isCopied && (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="success">Success Copy URL !</Alert>
        </Stack>
      )}
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
            {/*date*/}
            <div
              style={{
                display: "flex",
                flex: 1,
                marginLeft: "0.5rem",
                fontSize: "0.8rem",
                color: "#C4C4C4",
              }}
            >
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
          sx={{ justifyContent: "end", padding: "0" }}
        >
          <IconButton
            title={"I want to edit"}
            onClick={edit}
            sx={{ borderRadius: "4px" }}
          >
            <EditIcon sx={{ fontSize: "1.2rem" }} />
            <CountNumber> &nbsp;Edit</CountNumber>
          </IconButton>
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
            <CountNumber>&nbsp;{postData.postLikeCount || 0} Likes</CountNumber>
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
              alertCopy();
            }}
          >
            <ShareIcon sx={{ fontSize: "1.2rem" }} />
            &nbsp;
            <CountNumber> Share</CountNumber>
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
          <IconButton
            aria-label="report"
            onClick={handleOpen}
            sx={{ borderRadius: "4px" }}
          >
            <FlagIcon sx={{ fontSize: "1.2rem" }} />
            &nbsp;
            <CountNumber> Report</CountNumber>
          </IconButton>
        </CardActions>
      </Box>
    </DetailWrapper>
  );
}
