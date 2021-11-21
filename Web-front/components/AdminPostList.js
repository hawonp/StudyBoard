import { useState, useEffect, useContext } from "react";
import * as React from "react";
//Importing MUI
import Container from "@mui/material/Container";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import { ListItem } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";

import axiosInstance from "../utils/routeUtil";
import { ReportContext } from "../contexts/ReportContext";

const FLAGGEDENDPOINT = "/flagged";
const POSTDATAENDPOINT = "/posts";

const BoxWrapper = ({ style, children }) => {
  return (
    <Container
      style={{
        flex: 1,
        border: "0.1rem solid lightgray",
        borderRadius: "8px",
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

// export function createData( number ,name, nickname, contents, conform ) {
//     return { number,name, nickname, contents, conform };
// }
//
// export const rows = [
//     createData(1,'PK', 'pk-dev', 'whawahwawh'),
//     createData(2,'Hawon', 'hawonjjang', 'KIN'),
//     createData(3,'JeongHo', 'HOHO', 'I am smart'),
//     createData(4,'Tim', 'Temp', 'this is dumb'),
//     createData(5,'Alex', 'Prof', 'this is stupid'),
//
// ];

export default function AdminPostList() {
  const [rows, setRows] = useContext(ReportContext);
  const [isLoading, setIsLoading] = useState(true);

  //Load posts
  useEffect(() => {
    axiosInstance.get(FLAGGEDENDPOINT + POSTDATAENDPOINT).then((response) => {
      console.log("dsad");
      console.log(response.data);
      setRows(JSON.parse(response.data));
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div> Loading... </div>;
  } else {
    return (
      <BoxWrapper>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Number</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Nick Name</TableCell>
                <TableCell align="right">Contents</TableCell>
                <TableCell align="right">Conform</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.number}>
                  <TableCell component="th" scope="row">
                    {row.number}
                  </TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.nickname}</TableCell>
                  <TableCell align="right">{row.contents}</TableCell>

                  <TableCell>
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
}
