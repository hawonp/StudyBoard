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

import axiosInstance from "../utils/routeUtil";

const USERSENDPOINT = "/users";
const RANKENDPOINT = "/rank";

const HashtagWrapper = ({ style, children }) => {
  return (
    <div
      style={{
        padding: "4px 10px",
        fontSize: "12px",
        color: "#ffffff",
        background: "#20247b",
        borderRadius: "4px",
        marginRight: "2px",
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
        flexFlow: "row wrap",
        justifyContent: "left",
        ...style,
      }}
    >
      {" "}
      {children}{" "}
    </div>
  );
};

const dummy_rank = {
  user_id: 1,
  user_nickname: "Nick PK",
  tags: "#math #cse",
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
    <div style={{ minWidth: 750 }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Nick Name</TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="center">
                Rank
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="left">
                Like
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
                <TableCell component="th" scope="row">
                  {user.user_nickname}
                </TableCell>
                <TableCell align="center">{i + 1}</TableCell>
                <TableCell align="left">{user.user_likes_received}</TableCell>
                <TableCell align="left">
                  <TagWrapper>
                    {/* {post.post_tags.map((post_tags, i) => (
                                        <Link key={i} href="/board">
                                            <a>
                                                <HashtagWrapper key={i}>{post_tags}</HashtagWrapper>
                                            </a>
                                        </Link>
                                    ))} */}

                    {user.tags &&
                      user.tags.map((tag) => (
                        <HashtagWrapper key={tag}>{tag}</HashtagWrapper>
                      ))}
                  </TagWrapper>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
