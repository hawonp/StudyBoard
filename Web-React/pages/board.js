import React from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
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

import Tooltip from '@mui/material/Tooltip';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';


export default function Board() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <div className={styles.container}>
            <Head>
                <title>StudyBoard</title>
            </Head>

            <Card sx={{ maxWidth: 1250 }}>
                <CardHeader
                    style={{ textAlign: 'left' }}
                    avatar={
                        // user icon
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">

                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Math is really hard please hlep this question"
                    subheader="2021.11.01"
                />

                <CardMedia
                    component="img"
                    height="194"
                    // <Image  alt="Trulli" width="100%" height="100%" />
                    src="https://static01.nyt.com/images/2019/08/02/science/02EQUATION1/merlin_158743359_ff291f8a-d473-4849-9d81-9762826b55f4-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
                    alt="Paella dish"
                />

                {/* card content  */}
                <CardContent
                    style={{ textAlign: 'left' }}
                >
                    <Typography variant="body2" color="text.secondary">
                        I want to know this question would you answer this please help us
                    </Typography>
                </CardContent>

                {/* this is icon */}
                <CardActions disableSpacing
                             style={{ textAlign:'right' }}
                >
                    <IconButton aria-label="favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <Tooltip title="Delete">
                        <IconButton>
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>

                </CardActions>
            </Card>

        </div>
    )
}

