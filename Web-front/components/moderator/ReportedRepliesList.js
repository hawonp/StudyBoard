import { useState, useEffect } from "react";
import * as React from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";

//Importing MUI
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import { Box, ListItem } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import LinkIcon from "@mui/icons-material/Link";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";

// package imports
import axiosInstance from "../../utils/routeUtil";
import LoadingProgress from "../utils/Loading";

// constants
const FLAGGEDENDPOINT = "/flagged";
const REPLYDATAENDPOINT = "/replies";
const ROUTE_ID = "/posts/[id]";

// BoxWrapper styling
const BoxWrapper = ({ style, children }) => {
  return (
    <Box
      style={{
        flex: 1,
        border: "0.1rem solid lightgray",
        borderRadius: "4px",
        marginBottom: "16px",

        marginLeft: "20px",
        marginRight: "20px",
        marginTop: "20px",
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

// functional component that renders the list of reported replies
export default function ReportedRepliesList() {
  const router = useRouter(); // used for redirection
  const [rows, setRows] = useState([]); // reply list state
  const [isDataLoading, setIsDataLoading] = useState(true); // data loading state
  const { user, isLoading, error } = useUser(); // user session data from Auth0

  // load replies from backend
  useEffect(() => {
    if (!isLoading && !error && user) {
      const userID = user.sub;

      axiosInstance
        .get(FLAGGEDENDPOINT + REPLYDATAENDPOINT, {
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
          if (resp["status"] == 403) {
            router.push("/" + "error/403");
          } else if (resp["status"] == 400) {
            router.push("/" + "error/400");
          }
        });
    }
  }, [isDataLoading, isLoading]);

  // moderator responding to a report
  const respondToReport = (row, decision) => {
    // check that current user session exists
    if (user) {
      const userID = user.sub;
      // moderator accepts the report
      if (decision == 1) {
        axiosInstance
          .delete(FLAGGEDENDPOINT + REPLYDATAENDPOINT + "/" + row.report_id, {
            params: {
              contentID: row.reply_id,
              userID: userID,
            },
          })
          .then((response) => {
            setIsDataLoading(true);
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
      // moderator denies the report
      else {
        axiosInstance
          .put(FLAGGEDENDPOINT + REPLYDATAENDPOINT + "/" + row.report_id, {
            params: {
              contentID: row.reply_id,
              userID: userID,
            },
          })
          .then((response) => {
            setIsDataLoading(true);
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
    }
  };

  // user session is loading
  if (isLoading) return <LoadingProgress />;
  if (error) return <div>{error.message}</div>;

  // data is loading
  if (isDataLoading) {
    return <LoadingProgress />;
  }
  // user session, reply data has loaded
  else {
    return (
      <BoxWrapper>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Report ID</TableCell>

                <TableCell align="left">Reported by</TableCell>
                <TableCell align="center">Contents</TableCell>
                <TableCell align="right">Link to Post</TableCell>
                <TableCell align="right">Accept / Deny</TableCell>
              </TableRow>
            </TableHead>

            {rows.length > 0 ? (
              // render when reply data exists
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.report_id}>
                    <TableCell component="th" scope="row">
                      {row.report_id}
                    </TableCell>

                    <TableCell align="left">{row.user_nickname}</TableCell>
                    <TableCell align="center">{row.report_text}</TableCell>
                    <TableCell align="right">
                      <Link
                        href={{
                          pathname: ROUTE_ID,
                          query: { id: row.post_id },
                        }}
                      >
                        <a>
                          {/* link to the post */}
                          <LinkIcon />
                        </a>
                      </Link>
                    </TableCell>

                    <TableCell align="right">
                      <ListItem
                        secondaryAction={
                          <>
                            <IconButton
                              edge="end"
                              aria-label="check"
                              onClick={() => respondToReport(row, 1)}
                            >
                              <CheckIcon />
                            </IconButton>
                            <IconButton
                              edge="end"
                              aria-label="delete"
                              onClick={() => respondToReport(row, 0)}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </>
                        }
                      ></ListItem>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            ) : (
              // render when reply data doesn't exist
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row" colSpan={5}>
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
                        <div>There are no reported replies yet!</div>
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
