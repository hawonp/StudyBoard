import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import {Container, ListItem} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import * as React from "react";
import CheckIcon from "@mui/icons-material/Check";


const BoxWrapper = ({ style, children }) => {
    return (
        <Container
            style={{flex: 1,
                border:'0.1rem solid lightgray',
                borderRadius: '8px',marginBottom: '16px', marginTop: '20px', padding: '10px 12px', backgroundColor:'white'
                ,...style,
            }}
        >
            {" "}
            {children}{" "}
        </Container>
    );
};

// Col table id,name,nick,contents,status
function createData( number ,name, nickname, contents, conform ) {
    return { number,name, nickname, contents, conform };
}

const rows = [
    createData(1,'PK', 'pk-dev', 'whawahwawh'),
    createData(2,'Hawon', 'hawonjjang', 'KIN'),
    createData(3,'JeongHo', 'HOHO', 'I am smart'),
    createData(4,'Tim', 'Temp', 'this is dumb'),
    createData(5,'Alex', 'Prof', 'this is stupid'),
];


export default function AdminUserList (){
    return(
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
                            <TableRow
                                key={row.number}
                            >
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
                                                <IconButton edge="end" aria-label="delete">
                                                    <DeleteIcon />
                                                </IconButton>
                                            </>
                                        }
                                    >
                                    </ListItem>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>


                </Table>
            </TableContainer>
        </BoxWrapper>
    )
}