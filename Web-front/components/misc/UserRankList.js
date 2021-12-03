// react imports
import * as React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";

// MUI imports
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import Tooltip from "@mui/material/Tooltip";

// package imports
import axiosInstance from "../../utils/routeUtil";

// constants
const USERSENDPOINT = "/users";
const RANKENDPOINT = "/rank";

// HashtagWrapper styling
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

// TagWrapper styling
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

// functional component for displaying the user ranks
export default function UserRankList() {
  const [list, setList] = useState([]); // rank list state

  // load in rank data
  useEffect(() => {
    axiosInstance.get(USERSENDPOINT + RANKENDPOINT).then((response) => {
      setList(JSON.parse(response.data));
    });
  }, []);

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
            {/* make a tablerow for each user (top 10 users) */}
            {list.map((user, i) => (
              <TableRow
                key={user.user_id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {/* display endorsed icon if user is endorsed */}
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
                {/* username */}
                <TableCell component="th" scope="row" align="center">
                  {user.user_nickname}
                </TableCell>
                {/* user rank */}
                <TableCell align="center">{i + 1}</TableCell>
                {/* number of rank points for user */}
                <TableCell align="center">{user.user_rank_points}</TableCell>
                {/* display personal for each user */}
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
