import React from 'react';
import Link from 'next/link'
import Head from 'next/head'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import EditIcon from '@mui/icons-material/Edit';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import SmsIcon from '@mui/icons-material/Sms';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import Fab from '@mui/material/Fab';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ProfileCard from "../components/ProfileCard";
import pagination from "../components/pagination";
import Container from "@mui/material/Container";
import PostNavigation from "../components/PostNavigation";




//popover
const options = [
    'Edit',
    'Delete'
];

const ITEM_HEIGHT = 48;

export default function Board() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    //popover
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };



    return (
        <div style={{display: 'flex'}}>
                <Container >
                    <Head>
                        <title>StudyBoard</title>
                    </Head>


                    {/* Write Qeustion */}
                    <PostNavigation />

                    {/*filter*/}
                    <div style={{ alignItems: 'center',
                        backgroundColor: 'white',
                        border:'0.1rem solid lightgray',
                        borderRadius: '4px',
                        boxSizing: 'border-box',
                        display: 'flex', marginBottom: '16px', padding: '10px 12px' }}>

                        <Stack direction="row" spacing={1}>
                            <Chip
                                label="Recently"
                                component="a"
                                href="#basic-chip"
                                variant="outlined"
                                clickable
                            />
                            <Chip
                                label="Most popular"
                                component="a"
                                href="#basic-chip"
                                variant="outlined"
                                clickable
                            />
                            <Chip
                                label="preferred tags"
                                component="a"
                                href="#basic-chip"
                                variant="outlined"
                                clickable
                            />
                        </Stack>
                    </div>

                    <div >
                        <Card sx={{ maxWidth: 1250 }}>
                            <CardHeader
                                style={{ textAlign: 'left' }}
                                avatar={
                                    // user icon
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">

                                    </Avatar>
                                }

                                action={
                                    <div>
                                        <Tooltip title="Edit">
                                            <IconButton aria-label="EditIcon">
                                                <EditIcon />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Delete">
                                            <IconButton>
                                                <DeleteIcon />
                                            </IconButton>
                                        </Tooltip>
                                    </div>
                                }

                                title="Math is really hard please hlep this question"
                                subheader="2021.11.01"
                            />
                            <Link href="/postdetail"><a>
                                <CardMedia

                                    component="img"
                                    height="194"
                                    // <Image  alt="Trulli" width="100%" height="100%" />
                                    src="https://static01.nyt.com/images/2019/08/02/science/02EQUATION1/merlin_158743359_ff291f8a-d473-4849-9d81-9762826b55f4-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
                                    alt="Paella dish"
                                />
                            </a></Link>

                            {/* card content  */}
                            <CardContent
                                style={{ textAlign: 'left' }}
                            >
                                <Link href="/postdetail"><a>
                                    <Typography variant="body2" color="text.secondary">
                                        I want to know this question would you answer this please help us
                                    </Typography>
                                </a></Link>
                            </CardContent>

                            {/* this is icon */}

                            <CardActions disableSpacing sx ={{ justifyContent:'end' }} >
                                <IconButton aria-label="favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="thoumup">
                                    <ThumbUpIcon />
                                </IconButton>
                                <IconButton aria-label="SmsIcon">
                                    <SmsIcon />
                                </IconButton>
                                <IconButton aria-label="BookmarkIcon">
                                    <BookmarkIcon />
                                </IconButton>

                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                            </CardActions>
                        </Card>
                        <pagination />
                    </div>
                </Container>

            <ProfileCard />
        </div>
    )
}

