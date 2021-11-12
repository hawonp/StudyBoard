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
import Cookies from "universal-cookie";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { useState, useEffect } from "react";

//Importing and settings vars for axios parse
import axiosInstance from "../utils/routeUtil";
const users = "/users/";

export default function ProfileCard() {
  const cookies = new Cookies();
  const id = cookies.get("user_token");

  const [nickname, setNickname] = useState("");

  //Load posts when component mounts
  useEffect(() => {
    const user_info_url = users + id;
    axiosInstance.get(user_info_url).then((response) => {
      const temp = response["data"];
      const chars = temp.split(",");
      setNickname(chars[2]);
    });
  }, []);

  return (
    <div>
      {id == undefined ? (
        <></>
      ) : (
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
            <div style={{ justifyContent: "end" }}>
              <Link href="/admin/admin">
                <AdminPanelSettingsIcon />
              </Link>
            </div>

            <div style={{ display: "flex" }}>
              {/*양 옆으로 해야함 flex 사용해서 사용*/}
              <div>
                <Avatar></Avatar>
              </div>
              <div style={{ flex: 1 }}>
                {/*양 옆으로 해야함 flex 사용해서 사용*/}
                <h3>{nickname}</h3>
              </div>
            </div>

            <div style={{ display: "flex" }}>
              <div style={{ flex: "1", flexDirection: "column" }}>
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
                  {/*<a href="#" style={{padding: '4px 15px', fontSize: '13px', color: '#ffffff',*/}
                  {/*    background: '#20247b', borderRadius: '3px', marginRight: '4px', marginBottom: '4px'}}>*/}
                  {/*    Hard</a>*/}
                </div>
              </div>
            </div>

            {/*Link to My Post, Favorite, Notification*/}
            <div
              style={{
                display: "block",
                paddingTop: "30px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <div style={{ display: "inline-block" }}>
                <Tooltip title="Post">
                  <IconButton aria-label="favorites">
                    <Link href="/myPost">
                      <DescriptionIcon />
                    </Link>
                  </IconButton>
                </Tooltip>
              </div>

              <div style={{ display: "inline-block" }}>
                <Tooltip title="favorite">
                  <IconButton aria-label="favorites">
                    <Link href="/favorite/favorite">
                      <BookmarkIcon />
                    </Link>
                  </IconButton>
                </Tooltip>
              </div>

              <div style={{ display: "inline-block" }}>
                <Tooltip title="Notification">
                  <IconButton aria-label="favorites">
                    <Link href="/notification/notification">
                      <NotificationsIcon />
                    </Link>
                  </IconButton>
                </Tooltip>
              </div>
            </div>
          </Box>
        </Grid>
      )}
    </div>
  );
}
