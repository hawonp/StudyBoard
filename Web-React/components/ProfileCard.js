import Link from 'next/link'
import Avatar from "@mui/material/Avatar";
import {CardMedia} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DescriptionIcon from "@mui/icons-material/Description";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Grid from "@mui/material/Grid";
import React from "react";

export default function ProfileCard() {
    return (<Grid item xs={2}>
        <aside className="profile-card">
            <header>
                {/*양 옆으로 해야함 flex 사용해서 사용*/}
                <Avatar style={{display: 'flex'}} >H</Avatar>
                <CardMedia style={{flex: 1}}
                           src="https://microlancer.lancerassets.com/v2/avatars/74/c1d56008ae11e5985a9fe42fd62f9f/medium_metro-logo-2.jpg"
                />
                {/*양 옆으로 해야함 flex 사용해서 사용*/}
                <h1>PK HONG</h1>

            </header>

            <div className="profile-bio" style={{display: 'flex'}}>
                <div className="article-content" style={{display: 'flex', flexDirection: 'column'}}>
                    <h5>HASH TAG</h5>
                    <div className="nav tag-cloud" style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'start'}}>
                        <a href="#">Math</a>
                        <a href="#">Hard</a>
                        <a href="#">Help</a>
                        <a href="#">Meaningofquesion</a>
                        <a href="#">Need</a>
                    </div>
                </div>
            </div>

            <ul className="profile-social-links">
                <li>
                    <IconButton aria-label="favorites">
                        <Link href="/myPost">
                            <a>
                                <DescriptionIcon />
                            </a>
                        </Link>
                    </IconButton>
                </li>

                <li>
                    <IconButton aria-label="favorites">
                        <Link href="/favorite/favorite">
                            <a>
                                <BookmarkIcon />
                            </a>
                        </Link>
                    </IconButton>
                </li>

                <li>
                    <IconButton aria-label="favorites">
                        <Link href="/components/Notification">
                            <a>
                                <NotificationsIcon />
                            </a>
                        </Link>
                    </IconButton>
                </li>
            </ul>
        </aside>
    </Grid>);
}