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
import { useRouter } from "next/router";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";

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
  const router = useRouter();
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
        router.push("/" + "user/profile");
      },
    },
  ];

  const menuList = [
    {
      type: "normal",
      title: "AskQuestion",
      onClick: () => {
        router.push("/" + "board");
      },
    },
    {
      type: "normal",
      title: "About",
      onClick: () => {
        // alert("Profile");
        router.push("/" + "about");
      },
    },
    {
      type: "normal",
      title: "Rank",
      onClick: () => {
        // alert("Profile");
        router.push("/" + "rank");
      },
    },
    {
      type: "special",
      title: "Profile",
      onClick: () => {
        // alert("Profile");
        router.push("/" + "user/profile");
      },
    },
  ];

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
              <Button variant="outlined" color="error">
                Log Out
              </Button>
            </Link>
          ) : (
            <Link href="/api/auth/login">
              <Button variant="outlined" color="success">
                Log In
              </Button>
            </Link>
          )}
        </div>

        <div>
          {user ? (
            <div>
              <PopupState variant="popover" popupId="demo-popup-popover">
                {(popupState) => (
                  <Box sx={{ color: "action.active", ml: 2, mr: 2 }}>
                    <IconButton
                      {...bindTrigger(popupState)}
                      edge="end"
                      variant="contained"
                    >
                      <Badge color="secondary">
                        <NotificationsIcon />
                      </Badge>
                    </IconButton>
                    <Popover
                      {...bindPopover(popupState)}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: 150,
                        // horizontal: "center",
                      }}
                    >
                      <NotificationList />

                      <HrWrapper />
                      <Link href="/notification/notification">
                        <a style={{ textDecoration: "none", color: "#191970" }}>
                          <div
                            style={{
                              textAlign: "center",
                              marginBottom: "0.5rem",
                            }}
                            onClick={handleClose}
                          >
                            View all
                          </div>
                        </a>
                      </Link>
                    </Popover>
                  </Box>
                )}
              </PopupState>
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
