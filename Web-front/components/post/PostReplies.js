// react imports
import * as React from "react";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0";

// MUI imports
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
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
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import InputAdornment from "@mui/material/InputAdornment";
import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";
import { Modal, Box, TextField, Popover } from "@mui/material";

// package imports
import LoadingProgress from "../utils/Loading";
import axiosInstance from "../../utils/routeUtil";
import { getTimeDisplay } from "../../utils/utils";

// styling for modal that appears for reporting replies
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
const CountNumber = ({ style, children }) => {
  return (
    <div style={{ fontSize: "0.8rem", fontWeight: "bold", ...style }}>
      {" "}
      {children}{" "}
    </div>
  );
};

// constants needed for axios REST api calls
const POSTDATAENDPOINT = "/posts";
const REPLYDATAENDPOINT = "/replies";
const LIKEENDPOINT = "/likes";
const FLAGENDPOINT = "/flag";

// functional component that holds all the replies
export const ReplyCard = ({ postID }) => {
  const [loadingReplies, setLoadingReplies] = useState(true);
  const [feedOrder, setFeedOrder] = useState(0);
  const { user, isLoading, error } = useUser();

  // filter
  const handleChange = (event) => {
    setFeedOrder(event.target.value);
  };

  const [comments, setComments] = useState([]);

  //Load comments upon render
  useEffect(() => {
    if (!isLoading && !error) {
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
          setComments(responseData);
          setLoadingReplies(false);
        })
        .catch((e) => {
          const resp = e.response;
          if (resp["status"] == 400) {
            router.push("/" + "error/400");
          }
        });
    }
  }, [loadingReplies, feedOrder, isLoading]);

  // adding a reply to a post
  const _addComment = (body, resetForm) => {
    // Add reply to db
    axiosInstance
      .post(POSTDATAENDPOINT + "/" + postID + REPLYDATAENDPOINT, {
        params: { userID: user.sub, text: body },
      })
      .then((response) => {
        const responseData = JSON.parse(response["data"]);
        //Assign data according to whether the user liked the post
        if (responseData != -1) {
          setLoadingReplies(true);
          resetForm();
        }
      })
      .catch((e) => {
        const resp = e.response;
        if (resp["status"] == 400) {
          router.push("/" + "error/400");
        }
      });
  };

  // action handling that links replies together
  const _getComments = () => {
    //Get the comments from db
    return comments.map((reply, i) => (
      <Comment
        key={reply.reply_id}
        replyData={reply}
        deleteSelf={
          //delete function
          (id) => {
            setComments(
              comments.filter((deleteComment) => deleteComment.reply_id !== id)
            );
            axiosInstance
              .delete(REPLYDATAENDPOINT + "/" + id)
              .then((response) => {
                const responseData = JSON.parse(response["data"]);
              })
              .catch((e) => {
                const resp = e.response;
                if (resp["status"] == 500) {
                  router.push("/" + "error/500");
                } else if (resp["status"] == 400) {
                  router.push("/" + "error/400");
                }
              });
          }
        }
        setLoading={setLoadingReplies}
      />
    ));
  }; //functional component that renders the reply box

  let commentNodes = <div>{_getComments()}</div>;

  const _getCommentsTitle = (commentCount) => {
    if (commentCount === 0) {
      return "No Replies Yet";
    } else if (commentCount === 1) {
      return "1 Reply";
    } else {
      return `${commentCount} Replies`;
    }
  };

  if (isLoading) return <LoadingProgress />;
  if (error) return <div>{error.message}</div>;
  // if (loadingReplies) {
  //   return <LoadingProgress />;
  // }
  return (
    <div style={{ disply: "flex" }}>
      {user ? (
        <div>
          {" "}
          <h3>Join the Discussion!</h3>
          <CommentForm addComment={_addComment} />
          {/* <Divider variant="middle" /> */}
          <br />
          <Divider variant="middle" />
        </div>
      ) : (
        <></>
      )}

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
          {_getCommentsTitle(comments.length)}
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
            <MenuItem value={0}>Most Recent</MenuItem>
            <MenuItem value={1}>Most Likes</MenuItem>
            <MenuItem value={2}>User Ranking</MenuItem>
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
          label="Leave your response here!"
          multiline
          minRows={1}
          inputProps={{ maxLength: 512 }}
          inputRef={textRef}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {/* <IconButton
                  sx={{ fontSize: "0.8rem", borderRadius: "4px" }}
                  edge="end"
                >
                  <Tooltip title="Click to add a reply">
                    <ReplyIcon />
                  </Tooltip>
                </IconButton> */}
                <Button
                  sx={{ borderRadius: "8px" }}
                  variant="outlined"
                  color="success"
                  type="submit"
                >
                  Reply
                </Button>
              </InputAdornment>
            ),
          }}
        ></TextField>
      </div>
      {/* <div
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
      </div> */}
    </form>
  );
};

//Showing the comment
const Comment = ({ replyData, deleteSelf }) => {
  const [open, setOpen] = useState(false);
  const [didUserLike, setDidUserLike] = useState(replyData.did_user_like);
  const [likeCount, setLikeCount] = useState(replyData.reply_like_count);
  const [flagText, setFlagText] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isReplying, setIsReplying] = useState(false);
  const [isReplyLoading, setIsReplyLoading] = useState(true);
  const [replies, setReplies] = useState([]);
  const [diffTime, setDiffTime] = useState();
  const [option, setOption] = useState(null);
  const router = useRouter();
  const { user, isLoading, error } = useUser();
  const openOption = (event) => setOption(event.currentTarget);
  const closeOption = () => setOption(null);
  const isOptionOpened = Boolean(option);

  useEffect(() => {
    if (!isLoading && !error) {
      let userID = -1;
      if (user) {
        userID = user.sub;
      }
      axiosInstance
        .get(REPLYDATAENDPOINT + "/" + replyData.reply_id + REPLYDATAENDPOINT, {
          params: {
            userID: userID,
          },
        })
        .then((response) => {
          const responseData = JSON.parse(response["data"]);
          //Assign data
          setReplies(responseData);
          setIsReplyLoading(false);
        })
        .catch((e) => {
          const resp = e.response;
          if (resp["status"] == 400) {
            router.push("/" + "error/400");
          }
        });
    }
    setDiffTime(getTimeDisplay(new Date(), replyData.reply_date));
  }, [isLoading, isReplyLoading]);
  // adding a report to a reply
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
        setFlagText("");
        setOpen(false);
      })
      .catch((e) => {
        const resp = e.response;
        if (resp["status"] == 400) {
          router.push("/" + "error/400");
        } else if (resp["status"] == 500) {
          router.push("/" + "error/500");
        }
      });
  };
  //Handle like press for replies
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
          setLikeCount((prev) => prev - 1);
        })
        .catch((e) => {
          const resp = e.response;
          if (resp["status"] == 500) {
            router.push("/" + "error/500");
          }
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
          setLikeCount((prev) => prev + 1);
        })
        .catch((e) => {
          const resp = e.response;
          if (resp["status"] == 500) {
            router.push("/" + "error/500");
          }
        });
    }
  };
  if (isLoading) return <LoadingProgress />;
  if (error) return <div>{error.message}</div>;
  if (isReplyLoading) {
    return <LoadingProgress />;
  } else {
    return (
      <>
        <div style={{ diplay: "flex" }} className="row">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                // paddingTop: "15px",
                borderBottom: "1px #ddd",
                paddingBottom: "1.2rem",
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
                  <div
                    style={{
                      margin: "0",
                      fontSize: "0.8rem",
                      color: "#C4C4C4",
                    }}
                  >
                    {user && replyData.user_id == user.sub ? (
                      <div> Posted by you</div>
                    ) : (
                      <div> posted by {replyData.user_nickname}</div>
                    )}
                    {replyData.user_is_endorsed ? (
                      <Tooltip title="This is an endorsed user's reply">
                        <LightbulbIcon
                          sx={{
                            color: "#FFBF00",
                            fontSize: "0.8rem",
                          }}
                        />
                      </Tooltip>
                    ) : (
                      <></>
                    )}
                  </div>

                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "#C4C4C4",
                    }}
                  >
                    &nbsp;
                    {diffTime}
                  </div>
                </div>
                <div style={{ margin: "0" }}>{replyData.reply_text}</div>
              </div>

              {/* like button */}
              {user ? (
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
                  <CountNumber>&nbsp;{likeCount || 0} Likes</CountNumber>
                </IconButton>
              ) : (
                <IconButton
                  disabled
                  disableRipple
                  style={{
                    padding: "0",
                    paddingLeft: "0.5rem",
                  }}
                >
                  <FavoriteBorderIcon sx={{ fontSize: "1.2rem" }} />
                </IconButton>
              )}

              {/* reply button */}
              {user ? (
                <IconButton
                  disableRipple
                  style={{ padding: "0", paddingLeft: "0.5rem" }}
                  onClick={() => setIsReplying(true)}
                >
                  <ReplyIcon sx={{ fontSize: "1.2rem" }} />
                </IconButton>
              ) : (
                <IconButton
                  disableRipple
                  style={{ padding: "0", paddingLeft: "0.5rem" }}
                  disabled
                >
                  <ReplyIcon sx={{ fontSize: "1.2rem" }} />
                </IconButton>
              )}

              {/* reply report */}
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
                      inputProps={{ maxLength: 256 }}
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

              {user ? (
                <IconButton
                  disableRipple
                  style={{ padding: "0", paddingLeft: "0.5rem" }}
                  onClick={openOption}
                >
                  <MoreVertIcon sx={{ fontSize: "1.2rem" }} />
                </IconButton>
              ) : (
                <IconButton
                  disableRipple
                  disabled
                  style={{ padding: "0", paddingLeft: "0.5rem" }}
                >
                  <MoreVertIcon sx={{ fontSize: "1.2rem" }} />
                </IconButton>
              )}

              <Popover
                open={isOptionOpened}
                anchorEl={option}
                onClose={closeOption}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  horizontal: "right",
                }}
              >
                <IconButton
                  disableRipple
                  // style={{ padding: "0", paddingLeft: "0.5rem" }}
                  aria-label="report"
                  onClick={handleOpen}
                >
                  <FlagIcon sx={{ fontSize: "1.2rem" }} />
                </IconButton>

                {/* Delete Button should only be available to the original poster */}
                {user && replyData.user_id === user.sub && (
                  <IconButton
                    disableRipple
                    // style={{ padding: "0", paddingLeft: "0.5rem" }}
                    onClick={() => deleteSelf(replyData.reply_id)}
                  >
                    <DeleteIcon sx={{ fontSize: "1.2rem" }} />
                  </IconButton>
                )}
              </Popover>

              {/* end of div */}
            </div>
          </div>
        </div>

        {isReplying && (
          <InputReply
            replyID={replyData.reply_id}
            finish={() => setIsReplying(false)}
            setLoading={setIsReplyLoading}
          />
        )}

        <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
          {replies &&
            replies.map((reply) => (
              <Reply
                key={reply.reply_id}
                replyData={reply}
                deleteSelf={deleteSelf}
              />
            ))}
        </div>
      </>
    );
  }
};

//reply to reply component
const InputReply = ({ setLoading, replyID, finish }) => {
  const inputRef = useRef();
  const { user } = useUser();
  const router = useRouter();

  const postReply = async () => {
    axiosInstance
      .post(REPLYDATAENDPOINT + "/" + replyID + REPLYDATAENDPOINT, {
        params: {
          userID: user.sub,
          postID: router.query.id,
          text: inputRef.current.value,
        },
      })
      .then((response) => {
        const responseData = JSON.parse(response["data"]);
        //Assign data according to whether the user liked the post
        if (responseData != -1) {
          setLoading(true);
        }
        if (inputRef.current !== null) inputRef.current.value = "";
        finish();
      })
      .catch((e) => {
        const resp = e.response;
        if (resp["status"] == 400) {
          router.push("/" + "error/400");
        }
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
        label="Leave your response here!"
        multiline
        inputProps={{ maxLength: 512 }}
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
          variant="outlined"
          color="success"
          type="submit"
          onClick={postReply}
        >
          REPLY
        </Button>
        <Button
          sx={{ borderRadius: "8px", height: "2rem" }}
          variant="outlined"
          type="error"
          color="error"
          onClick={finish}
        >
          CANCEL
        </Button>
      </div>
    </div>
  );
};

const Reply = ({ replyData, deleteSelf }) => {
  const [open, setOpen] = useState(false);
  const [didUserLike, setDidUserLike] = useState(replyData.did_user_like);
  const [likeCount, setLikeCount] = useState(replyData.reply_like_count);
  const [flagText, setFlagText] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const router = useRouter();
  const { user } = useUser();

  const [option, setOption] = useState(null);
  const openOption = (event) => setOption(event.currentTarget);
  const closeOption = () => setOption(null);
  const isOptionOpened = Boolean(option);
  const [diffTime, setDiffTime] = useState();
  useEffect(() => {
    setDiffTime(getTimeDisplay(new Date(), replyData.reply_date));
  }, []);

  // reporting a reply
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
        setFlagText("");
        setOpen(false);
      })
      .catch((e) => {
        const resp = e.response;
        if (resp["status"] == 400) {
          router.push("/" + "error/400");
        }
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
          setLikeCount((prev) => prev - 1);
        })
        .catch((e) => {
          const resp = e.response;
          if (resp["status"] == 500) {
            router.push("/" + "error/500");
          }
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
          setLikeCount((prev) => prev + 1);
        })
        .catch((e) => {
          const resp = e.response;
          if (resp["status"] == 500) {
            router.push("/" + "error/500");
          }
        });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        marginLeft: "2.2rem",
        marginBottom: "0.4rem",
        alignItems: "start",
      }}
    >
      {/* icon ss */}
      <SubdirectoryArrowRightIcon
        sx={{ fontSize: "1.2rem", marginRight: "0.2rem", color: "#B0B0B0" }}
      />
      <div
        style={{
          display: "flex",
          position: "relative",
          flex: 1,
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ margin: "0", fontSize: "0.8rem", color: "#C4C4C4" }}>
            {user && user.sub == replyData.user_id ? (
              <div> posted by {replyData.user_nickname}</div>
            ) : (
              <div> Posted by {replyData.user_nickname}</div>
            )}
          </div>
          {replyData.user_is_endorsed ? (
            <Tooltip title="This is an endorsed user's reply">
              <LightbulbIcon sx={{ color: "#FFBF00", fontSize: "0.8rem" }} />
            </Tooltip>
          ) : (
            <></>
          )}

          <div style={{ fontSize: "0.8rem", color: "#C4C4C4" }}>
            &nbsp;
            {diffTime}
          </div>
        </div>
        {/*reply to reply contents*/}
        <div
          style={{
            width: "100%",
            flexWrap: "nowrap",
            overflow: "hidden",
          }}
        >
          <div style={{ margin: "0", wordWrap: "break-word" }}>
            {replyData.reply_text}
          </div>
        </div>
      </div>
      {/* like button disabled if not logged in */}
      {user ? (
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
          &nbsp;
          <CountNumber>&nbsp;{likeCount || 0} Likes</CountNumber>
        </IconButton>
      ) : (
        <IconButton
          disableRipple
          disabled
          style={{ padding: "0", paddingLeft: "0.5rem" }}
        >
          <FavoriteBorderIcon sx={{ fontSize: "1.2rem" }} />
        </IconButton>
      )}

      {/* Report reply contents */}
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
              inputProps={{ maxLength: 256 }}
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
              sx={{ borderRadius: "8px", height: "2rem", marginTop: "0.5rem" }}
              variant="outlined"
              color="error"
              onClick={handleClose}
            >
              Cancel
            </Button>
          </div>
        </Box>
      </Modal>

      {user ? (
        <IconButton
          disableRipple
          style={{ padding: "0", paddingLeft: "0.5rem" }}
          onClick={openOption}
        >
          <MoreVertIcon sx={{ fontSize: "1.2rem" }} />
        </IconButton>
      ) : (
        <IconButton
          disableRipple
          disabled
          style={{ padding: "0", paddingLeft: "0.5rem" }}
          onClick={openOption}
        >
          <MoreVertIcon sx={{ fontSize: "1.2rem" }} />
        </IconButton>
      )}

      <Popover
        open={isOptionOpened}
        anchorEl={option}
        onClose={closeOption}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          horizontal: "right",
        }}
      >
        <IconButton disableRipple aria-label="report" onClick={handleOpen}>
          <FlagIcon sx={{ fontSize: "1.2rem" }} />
        </IconButton>
        {/* Delete button should only be available to the original poster */}
        {replyData.user_id === user.sub ? (
          <IconButton
            disableRipple
            // style={{ padding: "0", paddingLeft: "0.5rem" }}
            onClick={() => deleteSelf(replyData.reply_id)}
          >
            <DeleteIcon sx={{ fontSize: "1.2rem" }} />
          </IconButton>
        ) : (
          <></>
        )}
      </Popover>
    </div>
  );
};
