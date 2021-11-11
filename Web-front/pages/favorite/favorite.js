import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ProfileCard from "../../components/ProfileCard";
import * as React from "react";

import FavoriteCard from "../../components/FavoriteCard";
import {useEffect, useState} from "react";

export default function Favorite() {
    const [favorites, setFavorites] = useState([
        'id1',
        'id2',
        'id3',
        'id4',
        'id5',
        'id6',
        'id6',
    ]);


    useEffect(() => {
        // TODO: API CALL (BACKEND)

    }, [])



    return (
        <div style={{display: 'flex'}}>
            <div  style={{flex: 1}}>
                <Container >
                    <Box style={{border:'0.1rem solid lightgray',
                        borderRadius: '8px',marginBottom: '16px', marginTop: '20px', padding: '10px 12px', backgroundColor:'white' }}
                    >
                        <h5 style={{ marginBottom: '2rem'}}>Pyungkang&apos;s favorite</h5>
                        <hr style={{
                            margin: '0px',
                            flexShrink: '0',
                            borderWidth: '0px 0px thin',
                            borderStyle: 'solid',
                            opacity: 1,
                            borderColor: 'lightgray'
                        }}/>
                        {/*고정되는거가 minwidth , */}
                        <Box sx={{minWidth: '750px', display: 'flex', flexWrap: 'wrap', justifyContent: "space-around",alignItems:"space-around"}}>
                        {
                            favorites.map((id) => <FavoriteCard key={id} favorite={id}/>)
                        }
                        </Box>

                    </Box>
                </Container>
            </div>

            <ProfileCard/>
        </div>
    )
}

