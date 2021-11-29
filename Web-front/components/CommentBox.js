import * as React from "react";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0";
//Importing MUI
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FlagIcon from "@mui/icons-material/Flag";
import ReplyIcon from "@mui/icons-material/Reply";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import StarIcon from "@mui/icons-material/Star";
import Switch from "@mui/material/Switch";
import { Avatar, Modal, Alert, Box, TextField } from "@mui/material";
import axiosInstance from "../utils/routeUtil";

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

//Initiate needed constants
const POSTDATAENDPOINT = "/posts";
const REPLYDATAENDPOINT = "/replies";
const LIKEENDPOINT = "/likes";
const FLAGENDPOINT = "/flag";

// Comment whole thing Container
export const CommentBox = ({ postID }) => {
  const [showComments, setShowComments] = useState(true);
  const [loadingReplies, setLoadingReplies] = useState(true);
  const [feedOrder, setFeedOrder] = useState(0);
  const { user } = useUser();

  // 필터
  const handleChange = (event) => {
    setFeedOrder(event.target.value);
  };

  const [comments, setComments] = useState([]);

  //Load comments upon render
  useEffect(() => {
    let userID = -1;
    if (user) {
      userID = user.sub;
    }
    axiosInstance
      .get(POSTDATAENDPOINT + "/" + postID + REPLYDATAENDPOINT, {
        params: {
          order: feedOrder,
          userID: userID,
        },
      })
      .then((response) => {
        const responseData = JSON.parse(response["data"]);
        //Assign data
        console.log("Load comments", responseData);
        setComments(responseData);
      });
    setLoadingReplies(false);
  }, [loadingReplies, feedOrder]);

  // Switch to show and hide replies
  let buttonText = showComments ? "Hide Comments" : "Show Comments";
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const toggleComments = (event) => {
    setShowComments(event.target.checked);
    setLoadingReplies(event.target.checked);
  };

  const _addComment = (body, resetForm) => {
    // Add reply to db
    console.log(postID);
    axiosInstance
      .post(POSTDATAENDPOINT + "/" + postID + REPLYDATAENDPOINT, {
        params: { userID: user.sub, text: body },
      })
      .then((response) => {
        const responseData = JSON.parse(response["data"]);
        //Assign data according to whether the user liked the post
        if (responseData != -1) {
          setLoadingReplies(true);
          console.log("added reply to post");
          resetForm();
        }
      });
  };

  const _getComments = () => {
    //Get the comments from db
    return comments.map((reply, i) => (
      <Comment
        key={reply.reply_id}
        replyData={reply}
        deleteSelf={
          //기능 전달하는곳
          //delete function
          () =>
            setComments(
              comments.filter((deleteComment) => deleteComment !== comment)
            )
        }
        setLoading={setLoadingReplies}
      />
    ));
  };

  console.log("showing");
  let commentNodes = showComments ? <div>{_getComments()}</div> : <></>;

  const _getCommentsTitle = (commentCount) => {
    if (commentCount === 0) {
      return "No Replies Yet";
    } else if (commentCount === 1) {
      return "1 Reply";
    } else {
      return `${commentCount}`;
    }
  };

  return (
    <div style={{ disply: "flex" }}>
      <h3>Join the Discussion!</h3>
      <CommentForm addComment={_addComment} />
      {/* <Divider variant="middle" /> */}
      <br />
      <Divider variant="middle" />

      <Box
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          // marginTop: "0.5rem",
        }}
      >
        <h3 style={{ display: "inline" }}>
          {_getCommentsTitle(comments.length)} Replies
        </h3>

        {/* 필터 */}
        <FormControl variant={"standard"} sx={{ width: "10rem" }}>
          {/* <InputLabel id="demo-simple-select-standard-label">
            Sort by
          </InputLabel> */}
          <Select
            id="demo-simple-select-standard"
            value={feedOrder}
            onChange={handleChange}
            sx={{
              fontSize: "0.8rem",
              borderRadius: "16px",
              maxWidth: "auto",
              maxHeight: "32px",
            }}
            variant="outlined"
          >
            <MenuItem value={0}>Newest</MenuItem>
            <MenuItem value={1}>Liked Most</MenuItem>
            <MenuItem value={2}>Highest Ranking</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* post_reply_count */}
      {/* <Divider variant="middle" /> */}

      {commentNodes}
    </div>
  );
};

// 댓글을 쓰는 form
const CommentForm = ({ addComment }) => {
  //const inputRef  = useRef();
  const textRef = useRef();

  const _handleSubmit = (event) => {
    event.preventDefault(); // prevents page from reloading on submit
    //const author = inputRef.current.value;
    const body = textRef.current.value;
    addComment(body, () => {
      textRef.current.value = "";
    });
  };

  return (
    <form className="comment-form" onSubmit={_handleSubmit}>
      <div className="comment-form-fields">
        <TextField
          fullWidth
          label="Leave your reply here!"
          sx={{ marginTop: "1rem" }}
          multiline
          minRows={1}
          inputRef={textRef}
        ></TextField>
      </div>
      <div
        className="comment-form-actions"
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "end",
          marginTop: "0.5rem",
        }}
      >
        <Button
          sx={{ borderRadius: "8px" }}
          variant="contained"
          color="success"
          type="submit"
        >
          Leave Reply
        </Button>
      </div>
    </form>
  );
};

//Showing the comment
const Comment = ({ setLoading, replyData, deleteSelf }) => {
  const [open, setOpen] = useState(false);
  const [didUserLike, setDidUserLike] = useState(false);
  const [flagText, setFlagText] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const router = useRouter();
  const { user } = useUser();

  const report = () => {
    axiosInstance
      .post(REPLYDATAENDPOINT + "/" + replyData.reply_id + FLAGENDPOINT, {
        params: {
          userID: user.sub,
          postID: router.query.id,
          text: flagText,
        },
      })
      .then((response) => {
        const responseData = JSON.parse(response["data"]);
        console.log(responseData);
        setFlagText("");
        setOpen(false);
      });
  };
  //Handle like press
  const handleLikePressed = () => {
    const id = user.sub;

    const requestEndpoint =
      REPLYDATAENDPOINT + "/" + replyData.reply_id + LIKEENDPOINT;
    if (didUserLike) {
      axiosInstance
        .delete(requestEndpoint, {
          params: {
            userID: id,
          },
        })
        .then((response) => {
          setDidUserLike(false);
        });
    } else {
      axiosInstance
        .post(requestEndpoint, {
          params: {
            userID: id,
          },
        })
        .then((response) => {
          setDidUserLike(true);
        });
    }
  };

  const [isReplying, setIsReplying] = useState(false);
  const [replys, setReplys] = useState(null);

  return (
    <>
      <div style={{ diplay: "flex" }} className="row">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              paddingTop: "15px",
              borderBottom: "1px #ddd",
              paddingBottom: "20px",
              alignItems: "start",
            }}
          >
            <div
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "column",
                paddingLeft: "8px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <h4 style={{ margin: "0" }}>{replyData.user_nickname}</h4>
                <StarIcon
                  sx={{ color: "#FFBF00", fontSize: "1.2rem", mb: "0.2rem" }}
                />
                <span style={{ marginLeft: "2rem", fontSize: "12px" }}>
                  {replyData.reply_date}
                </span>
              </div>
              <p style={{ margin: "0" }}>{replyData.reply_text}</p>
            </div>

            {/* like button */}
            <IconButton
              disableRipple
              style={{
                padding: "0",
                paddingLeft: "0.5rem",
              }}
              onClick={() => handleLikePressed()}
            >
              {didUserLike ? (
                <FavoriteIcon sx={{ fontSize: "1.2rem" }} />
              ) : (
                <FavoriteBorderIcon sx={{ fontSize: "1.2rem" }} />
              )}
            </IconButton>

            {/* reply button */}
            <IconButton
              disableRipple
              style={{ padding: "0", paddingLeft: "0.5rem" }}
              onClick={() => setIsReplying(true)}
            >
              <ReplyIcon sx={{ fontSize: "1.2rem" }} />
            </IconButton>

            {/* reply report */}
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
                <div
                  style={{ display: "flex", flex: 1, justifyContent: "end" }}
                >
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
              disableRipple
              style={{ padding: "0", paddingLeft: "0.5rem" }}
              aria-label="report"
              onClick={handleOpen}
            >
              <FlagIcon sx={{ fontSize: "1.2rem" }} />
            </IconButton>

            {/* 글쓴이가 자기자신이 쓴글에다만 지울 수 있게 만들어놓는다 */}
            {user && replyData.user_id === user.sub && (
              <IconButton
                disableRipple
                style={{ padding: "0", paddingLeft: "0.5rem" }}
                onClick={deleteSelf}
              >
                <DeleteIcon sx={{ fontSize: "1.2rem" }} />
              </IconButton>
            )}
          </div>
        </div>
      </div>

      {isReplying && (
        <InputReply
          replyID={replyData.reply_id}
          finish={() => setIsReplying(false)}
          setLoading={setLoading}
        />
      )}

      <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
        {replyData.replies_to_reply &&
          replyData.replies_to_reply.map((reply) => (
            <Reply key={reply.reply_id} replyData={reply} />
          ))}
      </div>
    </>
  );
};

//댓글에 댓글 reply ro reply
const InputReply = ({ setLoading, replyID, finish }) => {
  const inputRef = useRef();
  const { user } = useUser();

  const postReply = async () => {
    axiosInstance
      .post(REPLYDATAENDPOINT + "/" + replyID + REPLYDATAENDPOINT, {
        params: {
          userID: user.sub,
          text: inputRef.current.value,
        },
      })
      .then((response) => {
        const responseData = JSON.parse(response["data"]);
        //Assign data according to whether the user liked the post
        if (responseData != -1) {
          setLoading(true);
          console.log("added reply to reply");
        }
        inputRef.current.value = "";
        finish();
      });
  };

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        marginLeft: "4rem",
        alignItems: "start",
      }}
    >
      <TextField
        fullWidth
        label="REPLY"
        multiline
        inputRef={inputRef}
      ></TextField>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "end",
          marginTop: "0.5rem",
          marginBottom: "1rem",
        }}
      >
        <Button
          sx={{ borderRadius: "8px", height: "2rem", marginRight: "0.5rem" }}
          variant="contained"
          type="error"
          color="error"
          onClick={finish}
        >
          CANCEL
        </Button>
        <Button
          sx={{ borderRadius: "8px", height: "2rem" }}
          variant="contained"
          color="success"
          type="submit"
          onClick={postReply}
        >
          REPLY
        </Button>
      </div>
    </div>
  );
};

const Reply = ({ replyData }) => {
  const [open, setOpen] = useState(false);
  const [didUserLike, setDidUserLike] = useState(false);
  const [flagText, setFlagText] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const router = useRouter();
  const { user } = useUser();

  const report = () => {
    // const reportData = createData(reportList.length+1, postData.user, postData.user, "입력값")
    // setReportList([...reportList, reportData])
    // TODO: API POST (BACKEND NEED)
    axiosInstance
      .post(REPLYDATAENDPOINT + "/" + replyData.reply_id + FLAGENDPOINT, {
        params: {
          userID: user.sub,
          postID: router.query.id,
          text: flagText,
        },
      })
      .then((response) => {
        const responseData = JSON.parse(response["data"]);
        console.log(responseData);
        setFlagText("");
        setOpen(false);
      });
  };

  //Handle like press
  const handleLikePressed = () => {
    const id = user.sub;
    console.log(didUserLike);
    const requestEndpoint =
      REPLYDATAENDPOINT + "/" + replyData.reply_id + LIKEENDPOINT;
    if (didUserLike) {
      axiosInstance
        .delete(requestEndpoint, {
          params: {
            userID: id,
          },
        })
        .then((response) => {
          setDidUserLike(false);
        });
    } else {
      axiosInstance
        .post(requestEndpoint, {
          params: {
            userID: id,
          },
        })
        .then((response) => {
          setDidUserLike(true);
        });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        marginLeft: "4rem",
        alignItems: "start",
      }}
    >
      {/* icon ss */}
      <div
        style={{
          display: "flex",
          position: "relative",
          flex: 1,
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <h4 style={{ margin: "0" }}>{replyData.user_nickname}</h4>
          <span style={{ marginLeft: "2rem", fontSize: "12px" }}>
            {replyData.reply_date}
          </span>
        </div>
        {/*reply to reply contents*/}
        <div
          style={{
            width: "100%",
            // display: "flex",
            // flexDirection: "row",
            // flexGrow: 1,
            flexWrap: "nowrap",
            overflow: "hidden",
          }}
        >
          <p style={{ margin: "0", wordWrap: "break-word" }}>
            {replyData.reply_text}
          </p>
        </div>
      </div>
      <IconButton
        disableRipple
        style={{ padding: "0", paddingLeft: "0.5rem" }}
        onClick={() => handleLikePressed()}
      >
        {didUserLike ? (
          <FavoriteIcon sx={{ fontSize: "1.2rem" }} />
        ) : (
          <FavoriteBorderIcon sx={{ fontSize: "1.2rem" }} />
        )}
      </IconButton>
      {/* Report reply contents */}
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
              sx={{ borderRadius: "8px", height: "2rem", marginTop: "0.5rem" }}
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
        disableRipple
        style={{ padding: "0", paddingLeft: "0.5rem" }}
        aria-label="report"
        onClick={handleOpen}
      >
        <FlagIcon sx={{ fontSize: "1.2rem" }} />
      </IconButton>
      {/* 글쓴이가 자기자신이 쓴글에다만 지울 수 있게 만들어놓는다 */}
      {/* {user && replyData.user_id === user.sub && (
        <IconButton
          disableRipple
          style={{ padding: "0", paddingLeft: "0.5rem" }}
          onClick={deleteSelf}
        >
          <DeleteIcon sx={{ fontSize: "1.2rem" }} />
        </IconButton>
      )} */}
    </div>
  );
};
