import * as React from 'react';
import Head from 'next/head'
import ProfileCard from "../components/ProfileCard";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import BookmarkIcon from "@mui/icons-material/Bookmark";


export default function MyPost() {
    return (
        <div style={{display: 'flex'}}>
            <Container >
                <Box style={{border:'0.1rem solid lightgray',
                    borderRadius: '8px',marginBottom: '16px', marginTop: '20px', padding: '10px 12px', backgroundColor:'white' }}
                >
                    <h5 style={{ marginBottom: '2rem'}}>Pyungkang&apos;s Post</h5>
                    <hr style={{
                        margin: '0px',
                        flexShrink: '0',
                        borderWidth: '0px 0px thin',
                        borderStyle: 'solid',
                        marginBottom: '16px',
                        opacity: 1,
                        borderColor: 'lightgray'
                    }}/>

                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                src="https://static01.nyt.com/images/2019/08/02/science/02EQUATION1/merlin_158743359_ff291f8a-d473-4849-9d81-9762826b55f4-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Title
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Text question
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>

                            <IconButton aria-label="favorites">
                                <Link href="">
                                    <a><BookmarkIcon /></a>
                                </Link>
                            </IconButton>

                            <IconButton aria-label="favorites">
                                <Link href="">
                                    <a><BookmarkIcon /></a>
                                </Link>
                            </IconButton>

                            <IconButton aria-label="favorites">
                                <Link href="">
                                    <a><BookmarkIcon /></a>
                                </Link>
                            </IconButton>

                            <IconButton aria-label="favorites">
                                <Link href="">
                                    <a><BookmarkIcon /></a>
                                </Link>
                            </IconButton>

                            <IconButton aria-label="favorites">
                                <Link href="">
                                    <a><BookmarkIcon /></a>
                                </Link>
                            </IconButton>

                        </CardActions>
                    </Card>


                </Box>

            </Container>

            <ProfileCard/>
        </div>
    )
}

