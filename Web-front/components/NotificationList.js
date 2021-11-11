import {Paper} from "@mui/material";
import * as React from "react";

export default function NotificationList (){


    return(
        <Paper sx={{ borderRadius: '10rem', boxShadow: '#d5d5d5 0 0 15px',
            maxWidth: '1200px', margin: '0.5rem auto', height: '5rem'}} >
            <div style={{ borderRadius: '10rem', objectFit: 'cover',
                display:' inline-block', height: '5rem',
                width: '5rem', verticalAlign: 'middle'}}/>


            <div style={{ display: 'inline-block', width: 'calc(100% - 7rem)',
                verticalAlign: 'middle', marginLeft: '2%',
                marginTop: '.35rem' }}>
                <a>
                    <p style={{ display: 'inline-block',
                        fontSize: '1rem', overflow: 'hidden',
                        maxHeight: '2.15rem', margin: 0,
                        lineHeight: 'normal', marginTop: '0.2rem' }}>
                        <a>
                            <strong>User name </strong> 님이
                        </a>
                        <a>
                            <strong>이 게시글</strong>에 Like를 눌렀습니다
                        </a>
                    </p>
                    <p style={{ color:'#888', maginBottom: 0, fontSize: '0.8rem' }}>
                        2021, 10 ,2
                    </p>
                </a>
            </div>
        </Paper>
    )
}