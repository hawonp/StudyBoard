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

import axiosInstance from "../utils/routeUtil";

const BoxWrapper = ({ style, children }) => {
  return (
    <div
      style={{
        marginTop: "1.3rem",
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
        padding: "4px 15px",
        fontSize: "13px",
        color: "#ffffff",
        background: "#20247b",
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
  const [nickname, setNickname] = useState("");
  const [userId, setUserId] = useState("");
  const [tags, setTags] = useState([]);
  const { user, error, isLoading } = useUser();
  const users = "/users/";

  // console.log(user);
  // console.log(user.sub);
  // console.log(user.nickname);
  // console.log(user.email);
  // console.log(user.last_ip);

  // setUserId(user.sub);

  useEffect(() => {
    if (!isLoading && !error) {
      console.log("Crawling User Profile Data");
      axiosInstance.get(users + user.sub).then((response) => {
        console.log("response from backend" + response);
        if (response["status"] == 200) {
          const temp = response["data"];
          const temp_json = JSON.parse(temp);
          const user_nickname = temp_json.user.user_nickname;
          const tag = temp_json.tags;
          console.log("tag", tag);
          setNickname(user_nickname);
          setUserId(temp_json.user.user_id);
          setTags(tag);
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
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ flex: 1, marginLeft: "1rem" }}>
                {/*user name*/}
                <h4>{nickname}</h4>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                  marginRight: "0.8rem",
                }}
              >
                {/*만약 수퍼유저가 아니면 안보이게 */}
                <Link href="/admin/admin">
                  <AdminPanelSettingsIcon
                    sx={{ marginLeft: "1rem", color: "darkred" }}
                  />
                </Link>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flex: "1",
                flexDirection: "column",
                marginLeft: "1rem",
              }}
            >
              {tags.length > 0 ? (
                <TagWrapper>
                  {tags.map((tag, i) => (
                    <HashtagWrapper key={i}>{tag}</HashtagWrapper>
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
                    aria-label="favorites"
                    sx={{ borderRadius: "4px" }}
                  >
                    <DescriptionIcon sx={{ fontSize: "1.2rem" }} />

                    <p style={{ fontSize: "0.8rem", fontWeight: "bold" }}>
                      My Post
                    </p>
                  </IconButton>
                </Link>
              </div>

              {/* 자기가 좋아하는걸 모이게 하는곳*/}
              <div style={{ display: "inline-block" }}>
                <Link href="/favorite/favorite">
                  <IconButton
                    aria-label="favorites"
                    sx={{ borderRadius: "4px" }}
                  >
                    <BookmarkIcon sx={{ fontSize: "1.2rem" }} />
                    <p style={{ fontSize: "0.8rem", fontWeight: "bold" }}>
                      Favorite
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
