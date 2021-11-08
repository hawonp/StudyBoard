import Head from 'next/head'
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import * as React from "react";

export default function Rank() {
    return (
        <div>
            <Container >

                <Box style={{border:'0.1rem solid lightgray',
                    borderRadius: '4px',marginBottom: '16px', marginTop: '20px', padding: '10px 12px', backgroundColor:'white' }}
                >
                    <h1 style={{textAlign: 'center'}}> TOP RANK</h1>
                    <hr style={{
                        margin: '0px',
                        flexShrink: '0',
                        borderWidth: '0px 0px thin',
                        borderStyle: 'solid',
                        marginBottom: '10px',
                        opacity: 1,
                        borderColor: 'rgb(227, 242, 253)'
                    }}/>






                </Box>
            </Container>

        </div>
    )
}

