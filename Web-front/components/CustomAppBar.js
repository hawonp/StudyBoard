import React from "react";
import Link from "next/link";
import { Container, Toolbar, Badge, Box } from "@mui/material";
import { Menu as MenuIcon, AccountCircle } from "@mui/icons-material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CustomMenu from "./CustomMenu";
import NavButton from "./NavButton";
import SearchBar from "./SearchBar";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import Login from "./Login";
import Logout from "./Logout";
import Cookies from "universal-cookie";

const ContainerWrapper = ({ style, children }) => {
  return (
    <Container style={{ maxWidth: "1338px ", ...style }}>
      {" "}
      {children}{" "}
    </Container>
  );
};

export default function CustomAppBar() {
  const cookies = new Cookies();
  const user_id = cookies.get("user_token");
  console.log("App Bar:\nID_TOKEN= ", user_id);

  const menuThreeList = [
    {
      title: "Profile",
      onClick: () => {
        // alert("Profile");
        window.location.href = "/user/profile";
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
        <Box sx={{ display: "flex", flex: 2, flexDirection: "row" }}>
          <NavButton to={"/board"} title={"❓ AskQuestion"} />
          <NavButton to={"/about"} title={"📢 About"} sx={{ ml: 3 }} />
          <NavButton to={"/rank"} title={"👍 Rank"} sx={{ ml: 3 }} />
        </Box>
        <Box sx={{ display: "flex", flex: 2.0 }}>
          <SearchBar />
        </Box>

        <div>
          {user_id == undefined || user_id == "null" ? <Login /> : <Logout />}
        </div>
        <div>
          {user_id == undefined || user_id == "null" ? (
            <> </>
          ) : (
            <div>
              <Box sx={{ color: "action.active", ml: 2, mr: 2 }}>
                <Link href="/notification/notification">
                  <IconButton edge="end" aria-label="delete">
                    <Badge color="secondary" variant="dot">
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
                </Link>
              </Box>
            </div>
          )}
        </div>
        <div>
          {user_id == undefined || user_id == "null" ? (
            <> </>
          ) : (
            <div>
              {/*<CustomMenu icon={<MenuIcon />} itemList={menuTwoList} />*/}
              <CustomMenu icon={<AccountCircle />} itemList={menuThreeList} />
            </div>
          )}
        </div>
      </Toolbar>
    </ContainerWrapper>
  );
}
