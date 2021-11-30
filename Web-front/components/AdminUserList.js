import * as React from "react";
import { useState, useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0";
//Importing MUI
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import { Box, ListItem } from "@mui/material";
import Link from "@mui/material/Link";
import LinkIcon from "@mui/icons-material/Link";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";

import axiosInstance from "../utils/routeUtil";

const FLAGGEDENDPOINT = "/flagged";
const USERS = "/users";

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

export default function AdminUserList() {
  const [rows, setRows] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const { user, isLoading, error } = useUser();

  //Load users
  useEffect(() => {
    axiosInstance.get(FLAGGEDENDPOINT + USERS).then((response) => {
      console.log("dsad");
      setRows(JSON.parse(response.data));
      console.log(JSON.parse(response.data));
      console.log(rows);
      setIsDataLoading(false);
    });
  }, [isDataLoading, isLoading]);

  const blackListUser = (user_id) => {
    // Add a request interceptor
    axiosInstance.interceptors.request.use((request) => {
      console.log("Starting Request", JSON.stringify(request, null, 2));
      return request;
    });

    axiosInstance.interceptors.response.use((response) => {
      console.log("Response:", JSON.stringify(response, null, 2));
      return response;
    });
    if (user) {
      console.log("row", row.report_id);
      const userID = user.sub;
      axiosInstance
        .delete(FLAGGEDENDPOINT + POSTDATAENDPOINT + "/" + user_id, {
          params: {
            userID: userID,
          },
        })
        .then((response) => {
          console.log("dsad");
          console.log(JSON.parse(response.data));
          setIsDataLoading(true);
        });
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (isDataLoading) {
    return <div> Loading... </div>;
  } else {
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
                            <DeleteIcon />
                          </IconButton>
                        </>
                      }
                    ></ListItem>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </BoxWrapper>
    );
  }
}
