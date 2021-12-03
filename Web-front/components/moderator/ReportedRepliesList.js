import { useState, useEffect } from "react";
import * as React from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";

//Importing MUI
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
import LoadingProgress from "../Loading";

// constants
const FLAGGEDENDPOINT = "/flagged";
const REPLYDATAENDPOINT = "/replies";
const ROUTE_ID = "/posts/[id]";

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
  const [rows, setRows] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const { user, isLoading, error } = useUser();
  const router = useRouter();

  useEffect(() => {
    axiosInstance.get(FLAGGEDENDPOINT + REPLYDATAENDPOINT).then((response) => {
      setRows(JSON.parse(response.data));
      setIsDataLoading(false);
    });
  }, [isDataLoading, isLoading]);

  const respondToReport = (row, decision) => {
    if (user) {
      const userID = user.sub;
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
      } else {
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
  if (isLoading) return <LoadingProgress />;
  if (error) return <div>{error.message}</div>;

  if (isDataLoading) {
    return <LoadingProgress />;
  } else {
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
              <div>There are no reported replies yet!</div>
            )}
          </Table>
        </TableContainer>
      </BoxWrapper>
    );
  }
} //end of functional component
