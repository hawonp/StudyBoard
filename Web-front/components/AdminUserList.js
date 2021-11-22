import * as React from "react";
//Importing MUI
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import { Container, ListItem } from "@mui/material";
import Link from "@mui/material/Link";
import LinkIcon from "@mui/icons-material/Link";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";

import axiosInstance from "../utils/routeUtil";

const FLAGGEDENDPOINT = "/flagged";

const BoxWrapper = ({ style, children }) => {
  return (
    <Container
      style={{
        flex: 1,
        border: "0.1rem solid lightgray",
        borderRadius: "4px",
        marginBottom: "16px",
        marginTop: "20px",
        padding: "10px 12px",
        backgroundColor: "white",
        ...style,
      }}
    >
      {" "}
      {children}{" "}
    </Container>
  );
};

// Col table id,name,nick,contents,status
function createData(number, nickname, contents, link, conform) {
  return { number, nickname, contents, link, conform };
}

const rows = [
  createData(1, "pk-dev", "whawahwawh"),
  createData(2, "hawonjjang", "KIN"),
  createData(3, "HOHO", "I am smart"),
  createData(4, "Temp", "this is dumb"),
  createData(5, "Prof", "this is stupid"),
];

export default function AdminUserList() {
  return (
    <BoxWrapper>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Number</TableCell>

              <TableCell align="left">Nick Name</TableCell>
              <TableCell align="center">Contents</TableCell>
              <TableCell align="right">Link</TableCell>
              <TableCell align="right">Conform</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.number}>
                <TableCell component="th" scope="row">
                  {row.number}
                </TableCell>

                <TableCell align="left">{row.nickname}</TableCell>
                <TableCell align="center">{row.contents}</TableCell>
                <TableCell align="right">
                  <Link>
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
                        <IconButton edge="end" aria-label="check">
                          <CheckIcon />
                        </IconButton>
                        <IconButton
                          edge="end"
                          aria-label="delete"
                          onClick={() => deleteReport(row.number)}
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
