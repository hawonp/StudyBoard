import Link from "next/link";
import Avatar from "@mui/material/Avatar";
import { CardMedia, Tooltip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DescriptionIcon from "@mui/icons-material/Description";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Grid from "@mui/material/Grid";
import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
export default function ProfileCard() {
  return (
    <Grid item xs={2}>
      <Box
        sx={{
          backgroundColor: "#ffffff",
          borderRadius: "24px",
          boxShadow: "0 68px 118px lightgray",
          margin: "1.0rem auto 0",
          padding: "1.3rem",
          width: "300px",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <div>
          <div style={{ alignItems: "right" }}>
            <Link href="/admin/admin">
              <AdminPanelSettingsIcon />
            </Link>
          </div>
          {/*양 옆으로 해야함 flex 사용해서 사용*/}
          <div>
            <Avatar>H</Avatar>
          </div>
          <div style={{ flex: 1, justifyContent: "end" }}>
            {/*양 옆으로 해야함 flex 사용해서 사용*/}
            <h3>PK HONG</h3>
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h5>HASH TAG</h5>
            <div
              style={{
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "start",
              }}
            >
              <a
                href="#"
                style={{
                  padding: "4px 15px",
                  fontSize: "13px",
                  color: "#ffffff",
                  background: "#20247b",
                  borderRadius: "3px",
                  marginRight: "4px",
                  marginBottom: "4px",
                }}
              >
                Math
              </a>
              <a
                href="#"
                style={{
                  padding: "4px 15px",
                  fontSize: "13px",
                  color: "#ffffff",
                  background: "#20247b",
                  borderRadius: "3px",
                  marginRight: "4px",
                  marginBottom: "4px",
                }}
              >
                Hard
              </a>
            </div>
          </div>
        </div>

        <ul
          className="profile-social-links"
          style={{
            listStyle: "outside none none",
            paddingTop: "30px",
            textAlign: "center",
            marginLeft: "-40px",
          }}
        >
          <li style={{ display: "inline-block" }}>
            <Tooltip title="Post">
              <IconButton aria-label="favorites">
                <Link href="/myPost">
                  <DescriptionIcon />
                </Link>
              </IconButton>
            </Tooltip>
          </li>

          <li style={{ display: "inline-block" }}>
            <Tooltip title="favorite">
              <IconButton aria-label="favorites">
                <Link href="/favorite/favorite">
                  <BookmarkIcon />
                </Link>
              </IconButton>
            </Tooltip>
          </li>

          <li style={{ display: "inline-block" }}>
            <Tooltip title="Notification">
              <IconButton aria-label="favorites">
                <Link href="/notification/notification">
                  <NotificationsIcon />
                </Link>
              </IconButton>
            </Tooltip>
          </li>
        </ul>
      </Box>
    </Grid>
  );
}
