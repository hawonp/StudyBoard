import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AdminNav from "../../components/AdminNav";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {Button} from "@mui/material";


const columns = [
    { id: 'no', label: 'Number', minWidth: 10 },
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'nick', label: 'Nick Name', minWidth: 170 },
    { id: 'text', label: 'Text', minWidth: 170 },
    {
        id: 'population',
        label: 'Population',
        minWidth: 200,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },


];

function createData(no,name, nick, text, size) {
    return { no,name, nick, text, size };
}

const rows = [
    createData(1, 'PK', 'Aioin', 1324171354, 3287263),
    createData(2, 'LC', 'Pro', 9596961),
    createData(3, 'DK', 'Peppsi', 301340),
    createData(4, 'HW', 'coke', 9833520),
    createData(5, 'JW', 'Aioin', 9984670),
    createData(6, 'JP', 'Money', 7692024),
    createData(7, 'HL', 'Show', 357578),
    createData(8, 'PARK','Trou' , 70273),
    createData(9, 'NA', 'Troll', 1972550),
    createData(10, 'JP','ISRSYS' , 377973),
    createData(11, 'SP', 'ICE', 640679),
    createData(12,'Zeck','Box' , 67545757, 242495),

];


export default function Admin() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
            <div className={styles.container}>

                <Container >

                    <Box style={{border:'0.1rem solid lightgray',
                        borderRadius: '4px',marginBottom: '16px', marginTop: '20px', padding: '10px 12px', backgroundColor:'white' }}
                    >

                        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                            <TableContainer sx={{ maxHeight: 1000 }}>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                            {columns.map((column) => (
                                                <TableCell
                                                    key={column.id}
                                                    align={column.align}
                                                    style={{ minWidth: column.minWidth }}
                                                >
                                                    {column.label}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows
                                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            .map((row) => {
                                                return (
                                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                        {columns.map((column) => {
                                                            const value = row[column.id];
                                                            return (
                                                                <TableCell key={column.id} align={column.align}>
                                                                    {column.format && typeof value === 'number'
                                                                        ? column.format(value)
                                                                        : value}
                                                                </TableCell>
                                                            );
                                                        })}
                                                    </TableRow>
                                                );
                                            })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>

                    </Box>
                </Container>
            </div>


    )
}

