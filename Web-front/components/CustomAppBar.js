import React from "react";
import Link from "next/link";
import { Container, Toolbar, Badge, Box, useMediaQuery } from "@mui/material";
import { Menu as MenuIcon, AccountCircle } from "@mui/icons-material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CustomMenu from "./CustomMenu";
import NavButton from "./NavButton";
import SearchBar from "./SearchBar";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Image from "next/image";
import Login from "./Login";
import Logout from "./Logout";
import Cookies from "universal-cookie";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import NotificationList from "../components/NotificationList";
import Popover from "@mui/material/Popover";
import { useUser } from "@auth0/nextjs-auth0";
import { useEffect } from "react";
import axiosInstance from "../utils/routeUtil";

const HrWrapper = ({ style, children }) => {
  return (
    <div
      style={{
        margin: "0px",
        flexShrink: "0",
        borderWidth: "0px 0px thin",
        borderStyle: "solid",
        marginBottom: "10px",
        opacity: 1,
        borderColor: "lightgray",
        ...style,
      }}
    >
      {" "}
      {children}{" "}
    </div>
  );
};

const ContainerWrapper = ({ style, children }) => {
  return (
    <Container style={{ maxWidth: "1338px ", ...style }}>
      {" "}
      {children}{" "}
    </Container>
  );
};

export default function CustomAppBar() {
  const { user } = useUser();
  const isBig = useMediaQuery("(min-width:800px)");

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "" : undefined;

  const menuThreeList = [
    {
      type: "normal",

      title: "Profile",
      onClick: () => {
        // alert("Profile");
        window.location.href = "/user/profile";
      },
    },
    // {
    //   type: 'special',
    //   component: <Logout />
    // },
  ];

  const menuList = [
    {
      type: "normal",
      title: "AskQuestion",
      onClick: () => {
        // alert("Profile");
        window.location.href = "/board";
      },
    },
    {
      type: "normal",
      title: "About",
      onClick: () => {
        // alert("Profile");
        window.location.href = "/about";
      },
    },
    {
      type: "normal",
      title: "Rank",
      onClick: () => {
        // alert("Profile");
        window.location.href = "/rank";
      },
    },
    {
      type: "special",
      title: "Profile",
      onClick: () => {
        // alert("Profile");
        window.location.href = "/user/profile";
      },
    },
  ];

  useEffect(() => {
    if (user) {
      console.log("adding new user");
      axiosInstance
        .get("/login", {
          params: {
            user_id: user.sub,
            user_nickname: user.nickname,
            user_email: user.email,
          },
        })
        .then((response) => {
          console.log("response from backend" + response);
          if (response["status"] == 200) {
            console.log("success");
          }
        })
        .catch((e) => {
          const resp = e.response;
          if (resp["status"] == 403) {
            // TODO temp redirection
            // cookies.remove("user_token", { path: "/" });
            // cookies.remove("user_id", { path: "/" });
            // window.location.href = "./error/403";
          }
        });
    }
  }, []);

  return (
    <ContainerWrapper>
      <Toolbar>
        <Link href={"/"}>
          <img
            style={{ height: "4rem", display: "flex", marginTop: "1.2rem" }}
            src="/images/StudyBoard-logo.png"
            alt="logo"
          />
        </Link>
        {isBig && (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <NavButton to={"/board"} title={"AskQuestion"} />
            <NavButton to={"/about"} title={"About"} sx={{ ml: 3 }} />
            <NavButton to={"/rank"} title={"Rank"} sx={{ ml: 3 }} />
          </Box>
        )}
        <Box sx={{ display: "flex", flex: 1.0 }}>
          <SearchBar />
        </Box>

        <div>
          {user ? (
            <Link href="/api/auth/logout">
              <a>Log Out</a>
            </Link>
          ) : (
            <Link href="/api/auth/login">
              <a>Logged In</a>
            </Link>
          )}
        </div>

        <div>
          {user ? (
            <div>
              <Box sx={{ color: "action.active", ml: 2, mr: 2 }}>
                <IconButton
                  edge="end"
                  aria-describedby={id}
                  variant="contained"
                  onClick={handleClick}
                >
                  <Badge color="secondary" variant="dot">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  <NotificationList />

                  <HrWrapper />
                  <Link href="/notification/notification">
                    <a style={{ textDecoration: "none", color: "#191970" }}>
                      <div
                        style={{ textAlign: "center", marginBottom: "0.5rem" }}
                        onClick={handleClose}
                      >
                        View all
                      </div>
                    </a>
                  </Link>
                </Popover>
              </Box>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div>
          {isBig ? (
            user ? (
              <div>
                {/*<CustomMenu icon={<MenuIcon />} itemList={menuTwoList} />*/}
                <Link href="/user/profile">
                  <IconButton edge="end" aria-label="delete">
                    <AccountCircleIcon />
                  </IconButton>
                </Link>
              </div>
            ) : (
              <> </>
            )
          ) : (
            <CustomMenu icon={<MenuIcon />} itemList={menuList} />
          )}
        </div>
      </Toolbar>
    </ContainerWrapper>
  );
}
