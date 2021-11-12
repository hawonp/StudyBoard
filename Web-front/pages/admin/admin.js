import Head from "next/head";
import styles from "../../styles/Home.module.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AdminNav from "../../components/AdminNav";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Button, ListItem } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

function createData(number, name, nickname, contents, conform) {
  return { number, name, nickname, contents, conform };
}

const rows = [
  createData(1, "PK", "pk-dev", "whawahwawh"),
  createData(2, "Hawon", "hawonjjang", "KIN"),
  createData(3, "JeongHo", "HOHO", "I am smart"),
  createData(4, "Tim", "Temp", "this is dumb"),
  createData(5, "Alex", "Prof", "this is stupid"),
];

export default function Admin() {
  return (
    <div style={{ display: "flex" }}>
      <AdminNav />

      <Box
        sx={{
          flex: 1,
          border: "0.1rem solid lightgray",
          borderRadius: "8px",
          marginBottom: "16px",
          marginTop: "20px",
          padding: "10px 12px",
          backgroundColor: "white",
        }}
      >
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
                        <IconButton edge="end" aria-label="delete">
                          <DeleteIcon />
                        </IconButton>
                      }
                    ></ListItem>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}
