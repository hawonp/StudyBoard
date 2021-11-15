import { useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlagIcon from "@mui/icons-material/Flag";
import ReplyIcon from "@mui/icons-material/Reply";
import DeleteIcon from "@mui/icons-material/Delete";
import * as React from "react";
import axios from "axios";
import axiosInstance from "../utils/routeUtil";

//dummy user (글쓴이)
const userName = "dummy user";

// Comment whole thing Container
export const CommentBox = () => {
  const [showComments, setShowComments] = useState(false);
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

  // 댓글이 보기고 안보이게하는거
  let buttonText = showComments ? "Hide Comments" : "Show Comments";
  const toggleComments = () => setShowComments(!showComments);

  const _addComment = (body) => {
    const comment = {
      id: comments.length + 1,
      author: userName,
      body,
      replyComments: [],
    };
    setComments(comments.concat([comment]));
  };

  const _getComments = () =>
    comments.map((comment) => (
      <Comment
        author={comment.author}
        body={comment.body}
        replyComments={comment.replyComments}
        deleteSelf={
          //기능 전달하는곳
          //delete function
          () =>
            setComments(
              comments.filter((deleteComment) => deleteComment !== comment)
            )
        }
        key={comment.id}
      />
    ));
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
    <div className="comment-box">
      <h2>Join the Discussion!</h2>
      <CommentForm addComment={_addComment} />
      <button
        style={{
          float: "right",
          margin: "1rem 1rem",
          backgroundColor: "green",
          borderRadius: "4px",
          padding: "0.5rem 0.5rem",
          color: "#FFFFF",
        }}
        id="comment-reveal"
        onClick={toggleComments}
      >
        {buttonText}
      </button>
      <h3>Comments</h3>
      {/* 댓글 카운트 수 */}
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
          Post Comment
        </Button>
      </div>
    </form>
  );
};

//Showing the comment
const Comment = ({ author, body, replyComments, deleteSelf }) => {
  const [isReplying, setIsReplying] = useState(false);
  const [replys, setReplys] = useState(replyComments);

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
            <img
              style={{
                borderRadius: "50%",
                width: "64px",
                height: "64px",
                border: "2px solid #e5e7e8",
              }}
              src="https://i.imgur.com/stD0Q19.jpg"
            />
            <div
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "column",
                paddingLeft: "8px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <h4 style={{ marginLeft: ".5rem" }}>{author}</h4>
                <span style={{ marginLeft: "2rem", fontSize: "12px" }}>
                  - 2 hours ago
                </span>
              </div>
              <p>{body}</p>
            </div>
            <div style={{ marginRight: "8px" }}>
              <FavoriteIcon />
            </div>
            <div style={{ marginRight: "8px" }}>
              <ReplyIcon onClick={() => setIsReplying(true)} />
            </div>
            <div style={{ marginRight: "8px" }}>
              <FlagIcon />
            </div>

            {/* 글쓴이가 자기자신이 쓴글에다만 지울 수 있게 만들어놓는다 */}
            {author === userName && (
              <div style={{ marginRight: "20px" }}>
                <DeleteIcon onClick={deleteSelf} />
              </div>
            )}
          </div>
        </div>
      </div>

      {isReplying && (
        <InputReply
          add={(replyData) => setReplys([...replys, replyData])}
          finish={() => setIsReplying(false)}
        />
      )}

      <div>
        {replys &&
          replys.map((reply) => (
            <Reply key={reply} author={reply.author} body={reply.body} />
          ))}
      </div>
    </>
  );
};

//댓글에 댓글 reply ro reply
const InputReply = ({ add, finish }) => {
  const inputRef = useRef();

  const postReply = async () => {
    const replyData = {
      author: userName,
      body: inputRef.current.value,
    };

    // await axiosInstance.post("url", replyData)
    add(replyData);
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

const Reply = ({ author, body }) => {
  return (
    <div className="media mt-4" style={{ display: "flex", marginLeft: "4rem" }}>
      <a className="pr-3" href="#">
        <img
          style={{
            borderRadius: "50%",
            width: "64px",
            height: "64px",
            border: "2px solid #e5e7e8",
          }}
          src="https://i.imgur.com/xELPaag.jpg"
        />
      </a>
      <div style={{ flex: 1, flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h4 style={{ marginLeft: ".5rem" }}>{author}</h4>
          <span style={{ marginLeft: "2rem", fontSize: "12px" }}>
            - 2 hours ago
          </span>
        </div>

        {/*reply to reply contents*/}
        <p>{body}</p>
      </div>
      <FavoriteIcon style={{ marginRight: "8px" }} />
      <FlagIcon style={{ marginRight: "8px" }} />
    </div>
  );
};
