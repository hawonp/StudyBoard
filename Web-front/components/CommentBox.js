import * as React from 'react';
import { useRef, useState } from 'react';
import Cookies from 'universal-cookie';
//Importing MUI
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlagIcon from '@mui/icons-material/Flag';
import ReplyIcon from '@mui/icons-material/Reply';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import axiosInstance from '../utils/routeUtil';
import Switch from '@mui/material/Switch';
import { Avatar, Modal, Alert, Box, TextField } from '@mui/material';

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

//dummy user (글쓴이)
const POSTDATAENDPOINT = '/posts';
const REPLYDATAENDPOINT = '/replies';
const cookies = new Cookies();
const userName = 'dummy user';

// Comment whole thing Container
export const CommentBox = ({ postID }) => {
    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState([
        // 더미 데이터 , 그리고 replyComment 는 댓글에 댓글 더미데이터
        {
            id: 1,
            author: 'landiggity',
            body: "This is my first comment on this forum so don't be a dick",
            replyComments: [
                {
                    id: 11,
                    author: 'scarlett-jo',
                    body: "That's a mighty fine comment you've got there my good looking fellow...",
                },
                {
                    id: 22,
                    author: 'rosco',
                    body: "That's a mighty fine comment you've got there my good looking fellow...",
                },
            ],
        },
        {
            id: 2,
            author: 'scarlett-jo',
            body: "That's a mighty fine comment you've got there my good looking fellow...",
            replyComments: [],
        },
        {
            id: 3,
            author: 'rosco',
            body: "What is the meaning of all of this 'React' mumbo-jumbo?",
            replyComments: [],
        },
    ]);

    // 댓글이 보기고 안보이게하는거
    let buttonText = showComments ? 'Hide Comments' : 'Show Comments';
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const toggleComments = () => setShowComments(!showComments);

    const _addComment = (body) => {
        // Add reply to db
        console.log(postID);
        axiosInstance
            .post(POSTDATAENDPOINT + '/' + postID + REPLYDATAENDPOINT, {
                params: { userID: cookies.get('user_id'), text: body },
            })
            .then((response) => {
                const responseData = JSON.parse(response['data']);
                //Assign data according to whether the user liked the post
                if (responseData != -1) {
                    const comment = {
                        id: responseData,
                        author: userName,
                        body,
                        replyComments: [],
                    };
                    setComments(comments.concat([comment]));
                }
            });
    };

    const _getComments = () => {
        //Get the comments from db
        // axiosInstance
        //   .get(POSTDATAENDPOINT + postID + REPLYDATAENDPOINT)
        //   .then((response) => {
        //     const responseData = JSON.parse(response["data"]);
        //     //Assign data according to whether the user liked the post
        //     console.log(responseData);
        //   });
        console.log(comments);
        return comments.map((comment) => (
            <Comment
                author={comment.author}
                body={comment.body}
                replyComments={comment.replyComments}
                deleteSelf={
                    //기능 전달하는곳
                    //delete function
                    () => setComments(comments.filter((deleteComment) => deleteComment !== comment))
                }
                key={comment.id}
            />
        ));
    };
    let commentNodes = showComments ? <div>{_getComments()}</div> : <></>;

    const _getCommentsTitle = (commentCount) => {
        if (commentCount === 0) {
            return 'No comments yet';
        } else if (commentCount === 1) {
            return '1 comment';
        } else {
            return `${commentCount} comments`;
        }
    };

    return (
        <div style={{ disply: 'flex' }}>
            <h2>Join the Discussion!</h2>
            <CommentForm addComment={_addComment} />
            {/* Switich 버튼 */}
            <div style={{ display: 'flex' }}>
                <h3 style={{ display: 'flex', flex: 1 }}>Comments</h3>
                <Switch
                    sx={{ display: 'flex', justifyContent: 'end', marginTop: '1.2rem' }}
                    // variant="contained"
                    // type="submit"

                    {...label}
                    onClick={toggleComments}
                >
                    {buttonText}
                </Switch>
            </div>

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
                <TextField fullWidth label="Comment" sx={{ marginTop: '1rem' }} multiline rows={4} inputRef={textRef}></TextField>
            </div>
            <div
                className="comment-form-actions"
                style={{
                    display: 'flex',
                    flex: 1,
                    justifyContent: 'end',
                    marginTop: '0.5rem',
                }}
            >
                <Button sx={{ borderRadius: '8px' }} variant="contained" color="success" type="submit">
                    Submit Reply
                </Button>
            </div>
        </form>
    );
};

//Showing the comment
const Comment = ({ author, body, replyComments, deleteSelf }) => {
    const [open, setOpen] = useState(false);
    const [reportText, setReportText] = useState('');
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const report = () => {
        // const reportData = createData(reportList.length+1, postData.user, postData.user, "입력값")
        // setReportList([...reportList, reportData])

        // TODO: API POST (BACKEND NEED)

        setReportText('');
        setOpen(false);
    };

    const [isReplying, setIsReplying] = useState(false);
    const [replys, setReplys] = useState(replyComments);
    console.log('wads');
    return (
        <>
            <div style={{ diplay: 'flex' }} className="row">
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div
                        style={{
                            // display: 'flex',
                            paddingTop: '15px',
                            borderBottom: '1px #ddd',
                            paddingBottom: '20px',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                flex: 1,
                                flexDirection: 'column',
                                paddingLeft: '8px',
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <h4 style={{ marginLeft: '.5rem' }}>{author}</h4>
                                <span style={{ marginLeft: '2rem', fontSize: '12px' }}>- 2 hours ago</span>
                            </div>
                            <p>{body}</p>
                        </div>

                        {/* like button */}
                        <IconButton style={{ marginRight: '8px' }}>
                            <FavoriteIcon />
                        </IconButton>

                        {/* reply button */}
                        <IconButton style={{ marginRight: '8px' }}>
                            <ReplyIcon onClick={() => setIsReplying(true)} />
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
                                        label={'Report Information'}
                                        value={reportText}
                                        onChange={(e) => setReportText(e.target.value)}
                                    />
                                </div>
                                <div style={{ display: 'flex', flex: 1, justifyContent: 'end' }}>
                                    <Button
                                        sx={{ borderRadius: '8px', height: '2rem', marginTop: '0.5rem' }}
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
                        {author === userName && (
                            <div style={{ marginRight: '20px' }}>
                                <DeleteIcon onClick={deleteSelf} />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {isReplying && <InputReply add={(replyData) => setReplys([...replys, replyData])} finish={() => setIsReplying(false)} />}

            <div>{replys && replys.map((reply) => <Reply key={reply} author={reply.author} body={reply.body} />)}</div>
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
        inputRef.current.value = '';
        finish();
    };

    return (
        <div
            style={{
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
                marginLeft: '4rem',
                alignItems: 'start',
            }}
        >
            <TextField fullWidth label="REPLY" multiline inputRef={inputRef}></TextField>
            <div
                style={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'end',
                    marginTop: '0.5rem',
                    marginBottom: '1rem',
                }}
            >
                <Button
                    sx={{ borderRadius: '8px', height: '2rem', marginRight: '0.5rem' }}
                    variant="contained"
                    type="error"
                    color="error"
                    onClick={finish}
                >
                    CANCEL
                </Button>
                <Button sx={{ borderRadius: '8px', height: '2rem' }} variant="contained" color="success" type="submit" onClick={postReply}>
                    REPLY
                </Button>
            </div>
        </div>
    );
};

const Reply = ({ author, body }) => {
    const [open, setOpen] = useState(false);
    const [reportText, setReportText] = useState('');
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const report = () => {
        // const reportData = createData(reportList.length+1, postData.user, postData.user, "입력값")
        // setReportList([...reportList, reportData])
        // TODO: API POST (BACKEND NEED)

        setReportText('');
        setOpen(false);
    };

    return (
        <div style={{ display: 'flex', marginLeft: '4rem' }}>
            <div style={{ flex: 1, flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <h4 style={{ marginLeft: '.5rem' }}>{author}</h4>
                    <span style={{ marginLeft: '2rem', fontSize: '12px' }}>- 2 hours ago</span>
                </div>

                {/*reply to reply contents*/}
                <p>{body}</p>
            </div>
            <IconButton style={{ marginRight: '8px' }}>
                <FavoriteIcon />
            </IconButton>

            {/* Report reply contents */}
            <Modal open={open} onClose={handleClose} aria-labelledby="parent-modal-title" aria-describedby="parent-modal-description">
                <Box sx={{ ...modalStyle }}>
                    <h4 id="child-modal-title">Report</h4>
                    <div style={{ flex: 1 }}>
                        <TextField
                            fullWidth
                            multiline
                            label={'Report Information'}
                            value={reportText}
                            onChange={(e) => setReportText(e.target.value)}
                        />
                    </div>
                    <div style={{ display: 'flex', flex: 1, justifyContent: 'end' }}>
                        <Button
                            sx={{ borderRadius: '8px', height: '2rem', marginTop: '0.5rem' }}
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
