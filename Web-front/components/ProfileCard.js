import React from "react";
import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import DescriptionIcon from "@mui/icons-material/Description";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Grid from "@mui/material/Grid";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import TagIcon from "@mui/icons-material/Tag";
import Tooltip from "@mui/material/Tooltip";
import { useRouter } from "next/router";

import axiosInstance from "../utils/routeUtil";

const BoxWrapper = ({ style, children }) => {
  return (
    <div
      style={{
        marginTop: "20px",
        backgroundColor: "#ffffff",
        borderRadius: "4px",
        boxShadow: "0 3px 110px lightgray",
        margin: "1.0rem auto 0",
        width: "14rem",
        display: "flex",
        flexDirection: "column",
        border: "0.1rem solid lightgray",
        ...style,
      }}
    >
      {" "}
      {children}{" "}
    </div>
  );
};

const HashtagWrapper = ({ style, children }) => {
  return (
    <div
      style={{
        padding: "2px 6px",
        fontSize: "13px",
        color: "#3F8CB8",
        background: "#E1ECF4",
        borderRadius: "4px",
        marginRight: "4px",
        marginBottom: "2px",
        ...style,
      }}
    >
      {" "}
      {children}{" "}
    </div>
  );
};

const IconWrapper = ({ style, children }) => {
  return (
    <div
      style={{
        display: "block",
        paddingTop: "10px",
        marginLeft: "auto",
        marginRight: "auto",
        ...style,
      }}
    >
      {" "}
      {children}{" "}
    </div>
  );
};

const TagWrapper = ({ style, children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "start",
        ...style,
      }}
    >
      {" "}
      {children}{" "}
    </div>
  );
};

export default function ProfileCard() {
  const router = useRouter();
  const [nickname, setNickname] = useState("");
  const [userId, setUserId] = useState("");
  const [tags, setTags] = useState([]);
  const { user, error, isLoading } = useUser();
  const [mod, setMod] = useState();
  const users = "/users/";

  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
    router.push("/admin/admin");
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;

  // console.log(user);
  // console.log(user.sub);
  // console.log(user.nickname);
  // console.log(user.email);
  // console.log(user.last_ip);

  // setUserId(user.sub);

  useEffect(() => {
    if (!isLoading && !error && user) {
      console.log("Crawling User Profile Data");
      axiosInstance.get(users + user.sub).then((response) => {
        console.log("response from backend" + response);
        if (response["status"] == 200) {
          const temp = response["data"];
          const temp_json = JSON.parse(temp);
          const user_nickname = temp_json.user.user_nickname;
          const user_is_mod = temp_json.user.user_is_mod;
          const tag = temp_json.tags;
          console.log("tag", tag);
          setNickname(user_nickname);
          setUserId(temp_json.user.user_id);
          setTags(tag);
          setMod(user_is_mod);
          console.log(tag);
          console.log(user_nickname);
        }
      });
    }
  }, [isLoading]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      {user ? (
        <Grid item xs={2}>
          <BoxWrapper>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  // marginLeft: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <h4>{nickname}</h4>
              </div>

              {mod ? (
                <div
                  style={{
                    display: "flex",
                    // justifyContent: "end",
                    // marginRight: "0.8rem",
                  }}
                >
                  {/*만약 수퍼유저가 아니면 안보이게 */}

                  <IconButton
                    disableRipple
                    aria-describedby={id}
                    type="button"
                    onClick={handleClick}
                  >
                    <Tooltip title="Click to go to the moderator page">
                      <AdminPanelSettingsIcon sx={{ color: "darkred" }} />
                    </Tooltip>
                  </IconButton>
                </div>
              ) : (
                <></>
              )}
            </div>

            <div
              style={{
                display: "flex",
                flex: "1",
                flexDirection: "column",
                marginLeft: "1rem",
              }}
            >
              {/* <p> Your personal tags </p> */}
              <div
                style={{
                  display: "flex",
                  margin: 0,
                  fontSize: "0.9rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "#C4C4C4",
                    }}
                  >
                    Personal Tags
                  </div>
                  {/* <TagIcon sx={{ fontSize: "0.9rem", color: "gray" }} /> */}
                </div>
              </div>

              {tags.length > 0 ? (
                <TagWrapper>
                  {tags.map((tag, i) => (
                    <Link href={`/tags/${tag}`} key={tag}>
                      <a style={{ textDecoration: "none" }}>
                        <HashtagWrapper>{tag}</HashtagWrapper>
                      </a>
                    </Link>
                    // <HashtagWrapper key={i}>{tag}</HashtagWrapper>
                  ))}
                </TagWrapper>
              ) : (
                <p style={{ fontSize: "0.8rem", fontWeight: "bold" }}>
                  User has no tags
                </p>
              )}
            </div>

            {/*Link to My Post, Favorite, Notification*/}
            <IconWrapper>
              {/* 자기 자신이 쓴글들이 모이는곳*/}
              <div style={{ display: "inline-block" }}>
                <Link href="/myPost">
                  <IconButton
                    disableRipple
                    aria-label="favorites"
                    sx={{ borderRadius: "4px" }}
                  >
                    <DescriptionIcon sx={{ fontSize: "1.2rem" }} />

                    <p style={{ fontSize: "0.8rem", fontWeight: "bold" }}>
                      My Posts
                    </p>
                  </IconButton>
                </Link>
              </div>

              {/* 자기가 좋아하는걸 모이게 하는곳*/}
              <div style={{ display: "inline-block" }}>
                <Link href="/favorite/favorite">
                  <IconButton
                    disableRipple
                    aria-label="favorites"
                    sx={{ borderRadius: "4px" }}
                  >
                    <BookmarkIcon sx={{ fontSize: "1.2rem" }} />
                    <p style={{ fontSize: "0.8rem", fontWeight: "bold" }}>
                      Favorites
                    </p>
                  </IconButton>
                </Link>
              </div>
            </IconWrapper>
          </BoxWrapper>
        </Grid>
      ) : (
        <></>
      )}
    </div>
  );
}
