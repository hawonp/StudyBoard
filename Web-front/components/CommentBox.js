import * as React from "react";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";
//Importing MUI
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FlagIcon from "@mui/icons-material/Flag";
import ReplyIcon from "@mui/icons-material/Reply";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
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
const cookies = new Cookies();

// Comment whole thing Container
export const CommentBox = ({ postID }) => {
  const [showComments, setShowComments] = useState(false);
  const [loadingReplies, setLoadingReplies] = useState(false);
  const [feedOrder, setFeedOrder] = useState(0);
  const [comments, setComments] = useState([
    // 더미 데이터 , 그리고 replyComment 는 댓글에 댓글 더미데이터
    {
      id: 1,
      author: "landiggity",
      body: "This is my first comment on this forum so don't be a dick",
      replyComments: [
        {
          id: 11,
          author: "scarlett-jo",
          body: "That's a mighty fine comment you've got there my good looking fellow...",
        },
        {
          id: 22,
          author: "rosco",
          body: "That's a mighty fine comment you've got there my good looking fellow...",
        },
      ],
    },
    {
      id: 2,
      author: "scarlett-jo",
      body: "That's a mighty fine comment you've got there my good looking fellow...",
      replyComments: [],
    },
    {
      id: 3,
      author: "rosco",
      body: "What is the meaning of all of this 'React' mumbo-jumbo?",
      replyComments: [],
    },
  ]);

  //Load comments upon render
  useEffect(() => {
    console.log("loading");
    console.log("req to b");
    axiosInstance
      .get(POSTDATAENDPOINT + "/" + postID + REPLYDATAENDPOINT, {
        params: {
          order: feedOrder,
          userID: cookies.get("user_id"),
        },
      })
      .then((response) => {
        const responseData = JSON.parse(response["data"]);
        //Assign data
        setComments(responseData);
      });
    setLoadingReplies(false);
  }, [loadingReplies]);

  // Switch to show and hide replies
  let buttonText = showComments ? "Hide Comments" : "Show Comments";
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const toggleComments = (event) => {
    setShowComments(event.target.checked);
    setLoadingReplies(event.target.checked);
  };

  const _addComment = (body) => {
    // Add reply to db
    console.log(postID);
    axiosInstance
      .post(POSTDATAENDPOINT + "/" + postID + REPLYDATAENDPOINT, {
        params: { userID: cookies.get("user_id"), text: body },
      })
      .then((response) => {
        const responseData = JSON.parse(response["data"]);
        //Assign data according to whether the user liked the post
        if (responseData != -1) {
          setLoadingReplies(true);
          console.log("added reply to post");
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
      return "No comments yet";
    } else if (commentCount === 1) {
      return "1 comment";
    } else {
      return `${commentCount} comments`;
    }
  };

  return (
    <div style={{ disply: "flex" }}>
      <h2>Join the Discussion!</h2>
      <CommentForm addComment={_addComment} />
      {/* Switich 버튼 */}
      <div style={{ display: "flex" }}>
        <Switch
          // flex: 1,하면 늘어남
          sx={{ display: "flex", justifyContent: "end" }}
          // style={{
          //     float: 'right',
          //     marginTop: '0.5rem',
          //     borderRadius: '8px',
          //     // padding: '0.5rem 0.5rem',
          // }}
          // variant="contained"
          // type="submit"

          {...label}
          onChange={(event) => toggleComments(event)}
        >
          {buttonText}
        </Switch>
      </div>

      <h3>Replies</h3>

      {/* 댓글 카운트 수 */}
      {/* post_reply_count */}
      <h5>{_getCommentsTitle(comments.length)}</h5>
      <hr />
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
    addComment(body);
  };

  return (
    <form className="comment-form" onSubmit={_handleSubmit}>
      <div className="comment-form-fields">
        <TextField
          fullWidth
          label="Comment"
          sx={{ marginTop: "1rem" }}
          multiline
          rows={4}
          required
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
          Submit Reply
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

  const report = () => {
    axiosInstance
      .post(REPLYDATAENDPOINT + "/" + replyData.reply_id + FLAGENDPOINT, {
        params: {
          userID: cookies.get("user_id"),
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
    const id = cookies.get("user_id");
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
            }}
          >
            <Avatar
              style={{
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                border: "2px solid #e5e7e8",
              }}
            ></Avatar>
            <div
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "column",
                paddingLeft: "8px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <h4 style={{ marginLeft: ".5rem" }}>
                  {replyData.user_nickname}
                </h4>
                <span style={{ marginLeft: "2rem", fontSize: "12px" }}>
                  {replyData.reply_date}
                </span>
              </div>
              <p>{replyData.reply_text}</p>
            </div>

            {/* like button */}
            <IconButton
              style={{ marginRight: "8px" }}
              onClick={() => handleLikePressed()}
            >
              {didUserLike ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>

            {/* reply button */}
            <IconButton
              style={{ marginRight: "8px" }}
              onClick={() => setIsReplying(true)}
            >
              <ReplyIcon />
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
            <IconButton aria-label="report" onClick={handleOpen}>
              <FlagIcon />
            </IconButton>

            {/* 글쓴이가 자기자신이 쓴글에다만 지울 수 있게 만들어놓는다 */}
            {replyData.user_id === cookies.get("user_id") && (
              <div style={{ marginRight: "20px" }}>
                <DeleteIcon onClick={deleteSelf} />
              </div>
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

      <div>
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

  const postReply = async () => {
    axiosInstance
      .post(REPLYDATAENDPOINT + "/" + replyID + REPLYDATAENDPOINT, {
        params: {
          userID: cookies.get("user_id"),
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
      });
    inputRef.current.value = "";
    finish();
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

  const report = () => {
    // const reportData = createData(reportList.length+1, postData.user, postData.user, "입력값")
    // setReportList([...reportList, reportData])
    // TODO: API POST (BACKEND NEED)
    axiosInstance
      .post(REPLYDATAENDPOINT + "/" + replyData.reply_id + FLAGENDPOINT, {
        params: {
          userID: cookies.get("user_id"),
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
    const id = cookies.get("user_id");
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
    <div style={{ display: "flex", marginLeft: "4rem" }}>
      <Avatar
        sx={{
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          border: "2px solid #e5e7e8",
        }}
      ></Avatar>
      <div style={{ flex: 1, flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h4 style={{ marginLeft: ".5rem" }}>{replyData.user_nickname}</h4>
          <span style={{ marginLeft: "2rem", fontSize: "12px" }}>
            {replyData.reply_date}
          </span>
        </div>

        {/*reply to reply contents*/}
        <p>{replyData.reply_text}</p>
      </div>
      <IconButton
        style={{ marginRight: "8px" }}
        onClick={() => handleLikePressed()}
      >
        {didUserLike ? <FavoriteIcon /> : <FavoriteBorderIcon />}
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
      <IconButton aria-label="report" onClick={handleOpen}>
        <FlagIcon />
      </IconButton>
    </div>
  );
};
