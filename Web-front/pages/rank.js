import Head from 'next/head'
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function Rank() {
    return (
        <div>
            <Container >

                <Box style={{border:'0.1rem solid lightgray',
                    borderRadius: '4px',marginBottom: '16px', marginTop: '20px', padding: '10px 12px', backgroundColor:'white' }}
                >
                    <h1 style={{textAlign: 'center'}}> TOP RANK</h1>


                </Box>
            </Container>

        </div>
    )
}

