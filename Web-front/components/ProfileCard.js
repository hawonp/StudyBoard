import Link from 'next/link'
import Avatar from "@mui/material/Avatar";
import {CardMedia, Tooltip} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DescriptionIcon from "@mui/icons-material/Description";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Grid from "@mui/material/Grid";
import React from "react";
import Card from "@mui/material/Card";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
export default function ProfileCard() {
    return (
        <Grid item xs={2}>

            <aside className="profile-card">

                <div style={{display: 'flex'}}>
                    <Link sx={{ justifyContent: 'end'}} href="/admin/admin">
                        <a>
                            <AdminPanelSettingsIcon />
                        </a>
                    </Link>
                    {/*양 옆으로 해야함 flex 사용해서 사용*/}
                    <div>
                        <Avatar>H</Avatar>
                    </div>
                    <div style={{  flex: 1, justifyContent:'end' }}>

                        {/*양 옆으로 해야함 flex 사용해서 사용*/}
                        <h3>PK HONG</h3>
                    </div>

                </div>

                <div className="profile-bio" style={{display: 'flex'}}>
                    <div className="article-content" style={{display: 'flex', flexDirection: 'column'}}>
                        <h5>HASH TAG</h5>
                        <div className="nav tag-cloud" style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'start'}}>
                            <a href="#">Math</a>
                            <a href="#">Hard</a>
                            <a href="#">Help</a>
                            <a href="#">Need</a>
                            <a href="#">Meaningofquesion</a>
                        </div>
                    </div>
                </div>

                <ul className="profile-social-links">
                    <li>
                        <Tooltip title="Post">
                            <IconButton aria-label="favorites">
                                <Link href="/myPost">
                                    <a><DescriptionIcon /></a>
                                </Link>
                            </IconButton>
                        </Tooltip>
                    </li>

                    <li>
                        <Tooltip title="favorite">
                            <IconButton aria-label="favorites">
                                <Link href="/favorite/favorite">
                                    <a><BookmarkIcon /></a>
                                </Link>
                            </IconButton>
                        </Tooltip>
                    </li>

                    <li>
                        <Tooltip title="Notification">
                            <IconButton aria-label="favorites">
                                <Link href="/notification/notification">
                                    <a><NotificationsIcon /></a>
                                </Link>
                            </IconButton>
                        </Tooltip>
                    </li>
                </ul>
            </aside>
        </Grid>);
}