import Typography from '@mui/material/Typography';
import * as React from 'react';

import { useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const HashtagWrapper = ({ style, children }) => {
    return (
        <div
            style={{
                padding: '4px 10px',
                fontSize: '12px',
                color: '#ffffff',
                background: '#20247b',
                borderRadius: '4px',
                marginRight: '2px',
                ...style,
            }}
        >
            {' '}
            {children}{' '}
        </div>
    );
};

const TagWrapper = ({ style, children }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexFlow: 'row wrap',
                justifyContent: 'left',
                ...style,
            }}
        >
            {' '}
            {children}{' '}
        </div>
    );
};

const dummy_rank = {
    user_id: 1,
    user_nickname: 'Nick PK',
    tags: '#math #cse',
};

function createData(name, rank, like, tag) {
    return { name, rank, like, tag };
}

const rows = [
    createData('Frozen yoghurt', 1, 6, 'CSE'),
    createData('Ice cream sandwich', 2, 9, 'MATH'),
    createData('Eclair', 3, 16, 'HARD'),
    createData('Cupcake', 4, 3, 'HELP'),
    createData('Gingerbread', 5, 16, 'END'),
];

export default function RankUserList() {
    const { user_nickname, tags } = dummy_rank;

    // const [user, setUser] = useState("");
    // const [tag, setTag] = useState("");

    return (
        <div style={{ minWidth: 750 }}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold' }}>Nick Name</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }} align="center">
                                Rank
                            </TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }} align="left">
                                Like
                            </TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }} align="left">
                                Tag
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">{row.rank}</TableCell>
                                <TableCell align="left">{row.like}</TableCell>
                                <TableCell align="left">
                                    <TagWrapper>
                                        {/* {post.post_tags.map((post_tags, i) => (
                                        <Link key={i} href="/board">
                                            <a>
                                                <HashtagWrapper key={i}>{post_tags}</HashtagWrapper>
                                            </a>
                                        </Link>
                                    ))} */}

                                        <HashtagWrapper>{row.tag}</HashtagWrapper>
                                        <HashtagWrapper>{row.tag}</HashtagWrapper>
                                        <HashtagWrapper>{row.tag}</HashtagWrapper>
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
