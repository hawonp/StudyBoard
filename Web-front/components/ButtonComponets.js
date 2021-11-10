import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import SmsIcon from "@mui/icons-material/Sms";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ShareIcon from "@mui/icons-material/Share";
import CardActions from "@mui/material/CardActions";
import React from "react";
import FlagIcon from "@mui/icons-material/Flag";


export default function ButtonComponets() {
    return (
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
            <IconButton aria-label="report">
                <FlagIcon />
            </IconButton>
        </CardActions>
    )
}