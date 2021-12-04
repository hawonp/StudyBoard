// react imports
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// MUI imports
import IconButton from "@mui/material/IconButton";
import DescriptionIcon from "@mui/icons-material/Description";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Grid from "@mui/material/Grid";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import Tooltip from "@mui/material/Tooltip";

// package imports
import { useUser } from "@auth0/nextjs-auth0";
import axiosInstance from "../../utils/routeUtil";

// constants
const USERS = "/users/";

// BoxWrapper styling
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

// HashTagWrapper styling
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

// IconWrapper styling
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

// TagWrapper styling
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

// functional component for rendering the profile card positioned to the right of the feed
export default function ProfileCard() {
  const router = useRouter(); // used for redirection

  // profile information states
  const [nickname, setNickname] = useState("");
  const [tags, setTags] = useState([]);
  const [mod, setMod] = useState();

  const { user, error, isLoading } = useUser(); // user session data from Auth0

  // action handling to go to the moderator page
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
    router.push("/" + "moderator/users");
  };

  // load profile data from backend
  useEffect(() => {
    if (!isLoading && !error && user) {
      axiosInstance
        .get(USERS + user.sub)
        .then((response) => {
          if (response["status"] == 200) {
            // read in response as json
            const temp = response["data"];
            const temp_json = JSON.parse(temp);

            // extract basic profile info
            const user_nickname = temp_json.user.user_nickname;
            const user_is_mod = temp_json.user.user_is_mod;
            const json_tags = temp_json.tags;

            // set profile information
            setNickname(user_nickname);
            setTags(json_tags);
            setMod(user_is_mod);
          }
        })
        .catch((e) => {
          const resp = e.response;
          if (resp != undefined && resp["status"] == 500) {
            router.push("/" + "error/500");
          }
        });
    }
  }, [isLoading]);

  // user session data is loading
  if (isLoading) return <></>;
  if (error) return <div>{error.message}</div>;

  // user session data and profile data has loaded
  return (
    <div>
      {/* display profile card when user is logged in */}
      {user ? (
        <Grid item xs={2}>
          <BoxWrapper>
            {/* user nickname */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <h4>{nickname}</h4>
              </div>
              {console.log(mod, tags)}
              {mod == 1 ? (
                // display moderator icon if moderator
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <IconButton disableRipple type="button" onClick={handleClick}>
                    <Tooltip title="Click to go to the moderator page">
                      <AdminPanelSettingsIcon sx={{ color: "darkred" }} />
                    </Tooltip>
                  </IconButton>
                </div>
              ) : (
                <></>
              )}
            </div>

            {/* personal tags */}
            <div
              style={{
                display: "flex",
                flex: "1",
                flexDirection: "column",
                marginLeft: "1rem",
              }}
            >
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
                      fontWeight: "bold",
                    }}
                  >
                    Personal Tags
                  </div>
                </div>
              </div>

              {tags ? (
                <TagWrapper>
                  {tags.map((tag, i) => (
                    <Link href={`/tags/${tag}`} key={tag}>
                      <a style={{ textDecoration: "none" }}>
                        <HashtagWrapper>{tag}</HashtagWrapper>
                      </a>
                    </Link>
                  ))}
                </TagWrapper>
              ) : (
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "#C4C4C4",
                  }}
                >
                  No Personal Tags Set
                </p>
              )}
            </div>

            <IconWrapper>
              {/* MyPosts Button */}
              <div style={{ display: "inline-block" }}>
                <Link href="/user/posts">
                  <IconButton
                    aria-label="favorites"
                    disableRipple
                    sx={{
                      padding: "2px",
                      paddingRight: "6px",
                      borderRadius: "4px",
                    }}
                  >
                    <DescriptionIcon sx={{ fontSize: "1.2rem" }} />

                    <p style={{ fontSize: "0.8rem", fontWeight: "bold" }}>
                      My Posts
                    </p>
                  </IconButton>
                </Link>
              </div>

              {/* Favorites Button */}
              <div style={{ display: "inline-block" }}>
                <Link href="/user/favorites">
                  <IconButton
                    disableRipple
                    aria-label="favorites"
                    sx={{ padding: "2px", borderRadius: "4px" }}
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
        // profile card not displayed if user session does not exist
        <></>
      )}
    </div>
  );
} // functional component closure
