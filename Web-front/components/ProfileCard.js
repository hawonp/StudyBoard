import Link from "next/link";
import Avatar from "@mui/material/Avatar";
import { CardMedia, Tooltip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DescriptionIcon from "@mui/icons-material/Description";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Grid from "@mui/material/Grid";
import React from "react";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

const BoxWrapper = ({ style, children}) => {
    return (
        <div  style={{backgroundColor: "#ffffff",
            borderRadius: "24px",
            boxShadow: "0 68px 118px lightgray",
            margin: "1.0rem auto 0",
            padding: "1.3rem",
            width: "300px",
            display: "flex",
            flexDirection: 'column',
            ...style}}
        > {children} </div>
    )
}

const TagA = ({ style, children}) => {
    return (
        <div  style={{padding: "4px 15px",
            fontSize: "13px",
            color: "#ffffff",
            background: "#20247b",
            borderRadius: "3px",
            marginRight: "4px",
            marginBottom: "4px",
            ...style}}
        > {children} </div>
    )
}

const IconWrapper = ({ style, children}) => {
    return (
        <div  style={{display: "block",
            paddingTop: "30px",
            marginLeft: "auto",
            marginRight: "auto",
            ...style}}
        > {children} </div>
    )
}

const TagWrapper = ({ style, children}) => {
    return (
        <div  style={{display: "flex",
            flexFlow: "row wrap",
            justifyContent: "start",
            ...style}}
        > {children} </div>
    )
}


export default function ProfileCard() {
    return (
        <Grid item xs={2}>
            <BoxWrapper>

                <div style={{ display: 'flex', justifyContent: "end" }}>
                    {/*만약 수퍼유저가 아니면 안보이게 */}
                    {/* */}
                    <Link href="/admin/admin">
                        <AdminPanelSettingsIcon sx={{ color: 'darkred'}} />
                    </Link>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                    {/*프로필 아바타*/}
                    <div style={{ marginRight: '0.5rem'}}>
                        <Avatar></Avatar>
                    </div>
                    <div style={{ flex: 1 }}>
                        {/*user name*/}
                        <h3>PK HONG</h3>
                    </div>
                </div>

                <div style={{ display: 'flex', flex: "1", flexDirection: "column" }}>
                    <h5>HASH TAG</h5>
                    <TagWrapper>
                        {/*여기가 해쉬태그들 보이는곳*/}
                        <TagA href="#">
                            Math
                        </TagA>
                    </TagWrapper>
                </div>

                {/*Link to My Post, Favorite, Notification*/}
                <IconWrapper>

                    {/* 자기 자신이 쓴글들이 모이는곳*/}
                    <div style={{ display: "inline-block" }}>
                        <Tooltip title="Post">
                            <IconButton aria-label="favorites">
                                <Link href="/myPost">
                                    <DescriptionIcon />
                                </Link>
                            </IconButton>
                        </Tooltip>
                    </div>

                    {/* 자기가 좋아하는걸 모이게 하는곳*/}
                    <div style={{ display: "inline-block" }}>
                        <Tooltip title="favorite">
                            <IconButton aria-label="favorites">
                                <Link href="/favorite/favorite">
                                    <BookmarkIcon />
                                </Link>
                            </IconButton>
                        </Tooltip>
                    </div>

                    {/* 노티가 다 모여져서 보이는 곳 */}
                    <div style={{ display: "inline-block" }}>
                        <Tooltip title="Notification">
                            <IconButton aria-label="favorites">
                                <Link href="/notification/notification">
                                    <NotificationsIcon />
                                </Link>
                            </IconButton>
                        </Tooltip>
                    </div>
                </IconWrapper>

            </BoxWrapper>
        </Grid>
    );
}
