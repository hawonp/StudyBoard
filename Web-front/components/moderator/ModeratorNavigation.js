// react imports
import * as React from "react";
import { useRouter } from "next/router";

// MUI imports
import Box from "@mui/material/Box";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Home from "@mui/icons-material/Home";
import People from "@mui/icons-material/People";
import PermMedia from "@mui/icons-material/PermMedia";
import Dns from "@mui/icons-material/Dns";

// constants
const data = [
  { icon: <People />, label: "User", href: "/" + "moderator/users" },
  { icon: <PermMedia />, label: "Post", href: "/" + "moderator/posts" },
  { icon: <Dns />, label: "Replies", href: "/" + "moderator/replies" },
];

const FireNav = styled(List)({
  "& .MuiListItemButton-root": {
    paddingLeft: 24,
    paddingRight: 24,
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
});

// functional component renders the moderator page
export default function ModeratorNavigation() {
  const router = useRouter(); // used for redirection

  return (
    <Box sx={{ display: "flex", margin: "1rem 1rem" }}>
      <ThemeProvider
        theme={createTheme({
          components: {
            MuiListItemButton: {
              defaultProps: {
                disableTouchRipple: true,
              },
            },
          },
          palette: {
            primary: { main: "rgb(8,48,105)" },
            background: { paper: "rgb(255,255,255)" },
          },
        })}
      >
        <Paper>
          <FireNav component="nav" disablePadding>
            <ListItem component="div" disablePadding>
              <ListItemButton sx={{ margin: "1rem 1rem" }}>
                <ListItemIcon>
                  <Home color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="StudyBoard"
                  primaryTypographyProps={{
                    color: "primary",
                    fontWeight: "medium",
                    variant: "body2",
                  }}
                />
              </ListItemButton>
            </ListItem>
            <Divider />

            <Box
              sx={{
                bgcolor: "rgb(35,47,152)",
                pb: 2,
              }}
            >
              {data.map((item) => (
                <ListItemButton
                  key={item.label}
                  sx={{ py: 0, minHeight: 32, color: "rgb(255,255,255)" }}
                  onClick={() => router.push(item.href)}
                >
                  <ListItemIcon sx={{ color: "inherit" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: 14,
                      fontWeight: "medium",
                    }}
                  />
                </ListItemButton>
              ))}
            </Box>
          </FireNav>
        </Paper>
      </ThemeProvider>
    </Box>
  );
} //end of functional component
