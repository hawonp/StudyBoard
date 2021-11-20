// import * as React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Cookies from 'universal-cookie';
//Importing MUI
import { Alert, Box, Modal, TextField } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ShareIcon from '@mui/icons-material/Share';
import FlagIcon from '@mui/icons-material/Flag';
import EditIcon from '@mui/icons-material/Edit';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import Button from '@mui/material/Button';
import { useState, useContext } from 'react';
import { ReportContext } from '../contexts/ReportContext';

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

const CountNumber = ({ style, children }) => {
    return <div style={{ fontSize: '1.2rem', ...style }}> {children} </div>;
};

const HashtagWrapper = ({ style, children }) => {
    return (
        <div
            style={{
                padding: '4px 15px',
                fontSize: '13px',
                color: '#ffffff',
                background: '#20247b',
                borderRadius: '3px',
                marginRight: '4px',
                marginBottom: '4px',
                ...style,
            }}
        >
            {' '}
            {children}{' '}
        </div>
    );
};

const DetailWrapper = ({ style, children }) => {
    return (
        <div
            style={{
                alignItems: 'center',
                border: '0.1rem solid lightgray',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxSizing: 'border-box',
                padding: '10px 12px',
                ...style,
            }}
        >
            {' '}
            {children}{' '}
        </div>
    );
};

function createData(number, name, nickname, contents, conform) {
    return { number, name, nickname, contents, conform };
}

export default function DetailPost({ postData, onLikePressed, onFavouritePressed, edit }) {
    const [open, setOpen] = useState(false);
    const [reportText, setReportText] = useState('');
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [reportList, setReportList] = useContext(ReportContext);
    const report = () => {
        // const reportData = createData(reportList.length+1, postData.user, postData.user, "입력값")
        // setReportList([...reportList, reportData])
        // TODO: API POST (BACKEND NEED)

        setReportText('');
        setOpen(false);
    };

    return (
        <DetailWrapper>
            <Box style={{ flex: 1, paddingRight: '1rem', paddingLeft: '1rem' }}>
                {/*title*/}
                <header style={{ marginBottom: '1.5rem' }}>
                    <h1>{postData.title}</h1>
                    {/*username*/}
                    <div style={{ display: 'flex', marginBottom: '1.5rem' }}>
                        <div>{postData.user}</div>
                        {/*date*/}
                        <div style={{ display: 'flex', flex: 1, justifyContent: 'end' }}>{postData.date}</div>
                    </div>
                </header>
                <div>
                    {postData.images == 'None' ? (
                        <></>
                    ) : (
                        <img
                            style={{
                                maxHeight: '800px',
                                maxWidth: '100%',
                                objectFit: 'contain',
                            }}
                            src={postData.images}
                        />
                    )}
                </div>

                {/* question text */}
                <section>
                    <p>{postData.text}</p>
                </section>

                {/*hashtag*/}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div
                        style={{
                            display: 'flex',
                            flexFlow: 'row wrap',
                            justifyContent: 'start',
                        }}
                    >
                        {postData.tags.map((tag, i) => (
                            <HashtagWrapper key={i}>{tag}</HashtagWrapper>
                        ))}
                    </div>
                </div>

                <CardActions disableSpacing sx={{ justifyContent: 'end' }}>
                    <IconButton title={'I want to edit'} onClick={edit}>
                        <EditIcon />
                    </IconButton>

                    {/*일반유저좋아요*/}
                    <IconButton aria-label="thumbup" onClick={() => onLikePressed(postData.id, postData.didUserLike)}>
                        {postData.didUserLike ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </IconButton>
                    {/* Post like Count */}
                    {/* : {post_like_count} */}
                    <CountNumber>: 0</CountNumber>

                    {/*즐겨찾기 저장버튼*/}
                    <IconButton aria-label="favorites" onClick={() => onFavouritePressed(postData.id, postData.didUserFavourite)}>
                        {postData.didUserFavourite ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                    </IconButton>

                    {/* copy the link */}
                    <IconButton
                        aria-label="share"
                        onClick={() => {
                            navigator.clipboard.writeText(window.location.href);
                            // {
                            //     alert ? <Alert severity="success"> Copy Successfuly </Alert> : <></>;
                            // }
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
                </CardActions>
            </Box>
        </DetailWrapper>
    );
}
