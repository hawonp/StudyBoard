// react imports
import { useState, useEffect, useContext } from "react";
import * as React from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";
import LoadingProgress from "../components/Loading";
import { useRouter } from "next/router";

// MUI imports
import Box from "@mui/material/Box";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import LinkIcon from "@mui/icons-material/Link";
import { ListItem } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";

// package imports
import axiosInstance from "../utils/routeUtil";
import { ReportContext } from "../contexts/ReportContext";

// constants
const FLAGGEDENDPOINT = "/flagged";
const POSTDATAENDPOINT = "/posts";
const ROUTE_ID = "/posts/[id]";

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

// functional component that renders the list of reported posts
export default function AdminPostList() {
  const [rows, setRows] = useContext(ReportContext);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const { user, isLoading, error } = useUser();
  const router = useRouter();

  //Load posts
  useEffect(() => {
    axiosInstance.get(FLAGGEDENDPOINT + POSTDATAENDPOINT).then((response) => {
      setRows(JSON.parse(response.data));
      setIsDataLoading(false);
    });
  }, [isDataLoading, isLoading]);

  const respondToReport = (row, decision) => {
    // Add a request interceptor
    axiosInstance.interceptors.request.use((request) => {
      return request;
    });

    axiosInstance.interceptors.response.use((response) => {
      return response;
    });
    if (user) {
      const userID = user.sub;
      if (decision == 1) {
        axiosInstance
          .delete(FLAGGEDENDPOINT + POSTDATAENDPOINT + "/" + row.report_id, {
            params: {
              contentID: row.post_id,
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
          .put(FLAGGEDENDPOINT + POSTDATAENDPOINT + "/" + row.report_id, {
            params: {
              contentID: row.post_id,
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
                <TableCell align="center">Report Content</TableCell>
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
                        {/* link to the post */}
                        <LinkIcon />
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
              <div>No report yet!</div>
            )}
          </Table>
        </TableContainer>
      </BoxWrapper>
    );
  }
}
