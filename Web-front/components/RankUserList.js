import * as React from "react";
import { useState, useEffect } from "react";
//Importing MUI
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

import axiosInstance from "../utils/routeUtil";
import Link from "next/link";

const USERSENDPOINT = "/users";
const RANKENDPOINT = "/rank";

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
        ...style,
      }}
    >
      {" "}
      {children}{" "}
    </div>
  );
};

const TagWrapper = ({ style, children }) => {
  return (
    <div
      style={{
        display: "flex",
        // flexFlow: "row wrap",
        justifyContent: "left",
        ...style,
      }}
    >
      {" "}
      {children}{" "}
    </div>
  );
};

export default function RankUserList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axiosInstance.get(USERSENDPOINT + RANKENDPOINT).then((response) => {
      setList(JSON.parse(response.data));
      console.log(response);
    });
  }, []);
  // const [user, setUser] = useState("");
  // const [tag, setTag] = useState("");

  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }} align="center">
                Endorsed Status
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="center">
                Nickname
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="center">
                Rank
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="center">
                Points
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="left">
                Tag
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((user, i) => (
              <TableRow
                key={user.user_id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell scope="row" align="center">
                  {user.user_is_endorsed ? (
                    <Tooltip title="This is an endorsed user">
                      <LightbulbIcon
                        sx={{
                          color: "#FFBF00",
                          fontSize: "0.8rem",
                        }}
                      />
                    </Tooltip>
                  ) : (
                    <></>
                  )}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  {user.user_nickname}
                </TableCell>
                <TableCell align="center">{i + 1}</TableCell>
                <TableCell align="center">{user.user_rank_points}</TableCell>
                <TableCell align="left">
                  {user.tags.length > 0 ? (
                    <TagWrapper>
                      {user.tags &&
                        user.tags.map((tag) => (
                          <Link href={`/tags/${tag}`} key={tag}>
                            <a style={{ textDecoration: "none" }}>
                              <HashtagWrapper>{tag}</HashtagWrapper>
                            </a>
                          </Link>
                        ))}
                    </TagWrapper>
                  ) : (
                    <span> No Tags Set</span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
