import { useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import * as React from "react";

export const CommentBox = () => {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "landiggity",
      body: "This is my first comment on this forum so don't be a dick",
      replyComments: ["123", "abc"],
    },
    {
      id: 2,
      author: "scarlett-jo",
      body: "That's a mighty fine comment you've got there my good looking fellow...",
    },
    {
      id: 3,
      author: "rosco",
      body: "What is the meaning of all of this 'React' mumbo-jumbo?",
    },
  ]);

  let buttonText = showComments ? "Hide Comments" : "Show Comments";

  const _addComment = (author, body) => {
    const comment = {
      id: comments.length + 1,
      author,
      body,
    };
    setComments(comments.concat([comment]));
  };

  const toggleComments = () => setShowComments(!showComments);

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
  let commentNodes = showComments ? (
    <div className="comment-list">{_getComments()}</div>
  ) : (
    <></>
  );

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
      <h5 className="comment-count">{_getCommentsTitle(comments.length)}</h5>
      <hr />
      {commentNodes}
    </div>
  );
};

const CommentForm = ({ addComment }) => {
  const inputRef = useRef();
  const textRef = useRef();

  const _handleSubmit = (event) => {
    event.preventDefault(); // prevents page from reloading on submit
    const author = inputRef.current.value;
    const body = textRef.current.value;
    addComment(author, body);
  };

  return (
    <form className="comment-form" onSubmit={_handleSubmit}>
      <div className="comment-form-fields">
        <TextField
          fullWidth
          id="outlined-multiline-static"
          sx={{ marginTop: "1rem" }}
          label="User Name"
          multiline
          required
          inputRef={inputRef}
        ></TextField>
        <br />
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

const Comment = ({ author, body, replyComments, deleteSelf }) => {
  return (
    <>
      <div className="comment">
        <p className="comment-header">{author}</p>
        <p className="comment-body">{body}</p>
        <div className="comment-footer">
          <a href="#" className="comment-footer-delete" onClick={deleteSelf}>
            Delete Comment
          </a>
        </div>
      </div>
      <div>
        {replyComments &&
          replyComments.map((reply) => <Reply key={reply} body={reply} />)}
      </div>
    </>
  );
};

const Reply = ({ body }) => {
  return <div>{body}</div>;
};
