// react imports
import * as React from "react";
import { useState, useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";

// MUI imports
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import { Box, ListItem } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";

// package imports
import axiosInstance from "../../utils/routeUtil";
import LoadingProgress from "../utils/Loading";

// constants
const FLAGGEDENDPOINT = "/flagged";
const USERS = "/users";

// BoxWrapper styling
const BoxWrapper = ({ style, children }) => {
  return (
    <Box
      style={{
        flex: 1,
        border: "0.1rem solid lightgray",
        borderRadius: "4px",
        marginBottom: "16px",
        marginTop: "20px",
        marginLeft: "20px",
        marginRight: "20px",
        padding: "10px 12px",
        backgroundColor: "white",
        ...style,
      }}
    >
      {" "}
      {children}{" "}
    </Box>
  );
};

// functional component that renders the list of users with 10 or more reports
export default function ReportedUsersList() {
  const router = useRouter(); // used for redirection
  const [rows, setRows] = useState([]); // data state
  const [isDataLoading, setIsDataLoading] = useState(true); // data loading state
  const { user, isLoading, error } = useUser(); // user session data from Auth0

  // load users
  useEffect(() => {
    if (!isLoading && !error && user) {
      const userID = user.sub;
      console.log(userID);
      axiosInstance
        .get(FLAGGEDENDPOINT + USERS, {
          params: {
            userID: userID,
          },
        })
        .then((response) => {
          setRows(JSON.parse(response.data));
          setIsDataLoading(false);
        })
        .catch((e) => {
          const resp = e.response;
          console.log(resp);
          if (resp["status"] == 403) {
            router.push("/" + "error/403");
          } else if (resp["status"] == 400) {
            router.push("/" + "error/400");
          }
        });
    }
  }, [isDataLoading, isLoading]);

  // moderator blacklisting a user
  const blackListUser = (user_id) => {
    if (user) {
      const userID = user.sub;
      axiosInstance
        .post(FLAGGEDENDPOINT + USERS + "/" + user_id, {
          params: {
            userID: userID,
          },
        })
        .then((response) => {
          setIsDataLoading(true);
          // router.reload();
        })
        .catch((e) => {
          const resp = e.response;
          if (resp["status"] == 403) {
            router.push("/" + "error/403");
          } else if (resp["status"] == 400) {
            router.push("/" + "error/400");
          }
        });
    }
  };

  // user session is loading
  if (isLoading) return <LoadingProgress />;
  if (error) return <div>{error.message}</div>;

  // data is loading
  if (isDataLoading) {
    return <LoadingProgress />;
  }
  // user session, post data has loaded
  else {
    return (
      <BoxWrapper>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">User ID</TableCell>
                <TableCell align="left">User Nickname</TableCell>
                <TableCell align="center">Number of Flagged Posts</TableCell>
                <TableCell align="right">Blacklist User</TableCell>
              </TableRow>
            </TableHead>

            {rows.length > 0 ? (
              // render when user data exists
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.user_id}>
                    <TableCell component="th" scope="row">
                      {row.user_id}
                    </TableCell>

                    <TableCell align="left">{row.user_nickname}</TableCell>
                    <TableCell align="center">
                      {row.user_flags_received}
                    </TableCell>
                    <TableCell align="right">
                      <ListItem
                        secondaryAction={
                          <>
                            <IconButton
                              edge="end"
                              aria-label="delete"
                              onClick={() => blackListUser(row.user_id)}
                            >
                              <RemoveCircleOutlineIcon
                                style={{ color: "red" }}
                              />
                            </IconButton>
                          </>
                        }
                      ></ListItem>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            ) : (
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row" colSpan={4}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",

                        alignItems: "center",
                      }}
                    >
                      <ReportGmailerrorredOutlinedIcon
                        sx={{ fontSize: "7.2rem", color: "lightgray" }}
                      />
                      <p style={{ fontSize: "0.8rem" }}>
                        <div>
                          There are no users with 10 active reports so far!
                        </div>
                      </p>
                    </Box>
                  </TableCell>
                </TableRow>
              </TableBody>
            )}
          </Table>
        </TableContainer>
      </BoxWrapper>
    );
  }
} //end of functional component
