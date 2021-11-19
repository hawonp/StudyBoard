import {Paper} from "@mui/material";
import * as React from "react";
import {useState} from "react";

const PaperWrapper = ({ style, children}) => {
    return (
        <div style={{ borderRadius: '10rem', boxShadow: '#d5d5d5 0 0 15px',
            maxWidth: '1200px', margin: '1rem auto', height: '5rem',
            ...style}}
        > {children} </div>
    )
}

const DivEmptyWrapper = ({ style, children}) => {
    return (
        <div style={{borderRadius: '10rem', objectFit: 'cover',
            display:' inline-block', height: '5rem',
            width: '5rem', verticalAlign: 'middle',
            ...style}}
        > {children} </div>
    )
}

const BoxContainWrapper = ({ style, children}) => {
    return (
        <div style={{display: 'inline-block', width: 'calc(100% - 7rem)',
            verticalAlign: 'middle', marginLeft: '2%',
            marginTop: '.35rem',
            ...style}}
        > {children} </div>
    )
}

const DateWrapper = ({ style, children}) => {
    return (
        <p  style={{color:'#888', maginBottom: 0, fontSize: '0.8rem',
            ...style}}
        > {children} </p>
    )
}

const dummy_list = [
    {
        notification_id: "1",
        user_id: "1",
        user_nickname: 'Nick1',
        post_id: '1',
        comment_id: null,
        type: 1,
        notification_date: "Dummy Date ",
        notification_seen: false,
    },
    {
        notification_id: "2",
        user_id: "2",
        user_nickname: 'Nick2',
        post_id: '2',
        comment_id: null,
        type: 0,
        notification_date: "Dummy Date ",
        notification_seen: false,
    },
    {
        notification_id: "3",
        user_id: "3",
        user_nickname: 'Nick3',
        post_id: '1',
        comment_id: '1',
        type: 0,
        notification_date: "Dummy Date ",
        notification_seen: true,
    },
    {
        notification_id: "4",
        user_id: "4",
        user_nickname: 'Nick4',
        post_id: '2',
        comment_id: '1',
        type: 1,
        notification_date: "Dummy Date ",
        notification_seen: true,
    }
]

// const dummy_noti={
//     notification_id: "1",
//     user_id: "pk",
//     user_nickname: 'Nick PK',
//     post_id: '1',
//     comment_id:'1',
//     type: 1,
//     notification_date: "Dummy Date ",
//     notification_seen: null,
// };

const Notification = ({ data }) => {
    // 밑에 3개의 타입을 따로 만든다
    // 게시글 좋아요, 댓글, 댓글 좋아요
    // DB(TABLE)는 모든 유저, 모든 게시글, 모든 댓글에 대한 활동을 기록한다
    // GET 호출을 할때, 유저의 id를 보내면 그걸로 필터링된 것을 응답

    // 프론트가 필요한건
    // 1. 노티 ID
    // 2. 활동 주체
    // 3. 게시글 ID 혹은 댓글 ID (활동이 일어난 곳)
    // 4. 활동 타입 (좋아요 혹은 댓글)
    // 5. 시간
    // 6. 확인 유무
    const {
        notification_id, // 1
        user_id, // 2
        user_nickname, // 2
        post_id, // 3 (
        comment_id, // 3 (대댓글일 경우 그 댓글의 id)
        type, // 4 ('like' or 'reply')
        notification_date, // 5
        notification_seen, // 6
    } = data;

    return (
        <PaperWrapper >
            <DivEmptyWrapper />
            <BoxContainWrapper>

                <p style={{ display: 'inline-block',
                    fontSize: '1rem', overflow: 'hidden',
                    maxHeight: '2.15rem', margin: 0,
                    lineHeight: 'normal', marginTop: '0.2rem' }}>
                    <a><strong>{user_nickname}</strong></a> 님이 &nbsp;
                    { comment_id ?
                        <a href={`/postdetail?post_id=${post_id}&comment_id=${comment_id}`}><strong>이 댓글</strong></a>
                        : <a href={`/postdetail?post_id=${post_id}`}><strong>이 게시글</strong></a>}
                    { type === 0 ? '에 좋아요를 눌렀습니다' : '에 댓글을 달았습니다'}
                </p>

                <DateWrapper>
                    {notification_date}
                </DateWrapper>

            </BoxContainWrapper>
        </PaperWrapper>
    )
}

export default function NotificationList (){

    return(
        <>
            { dummy_list.map((dummy) => <Notification key={dummy.notification_id} data={dummy} />)}
        </>

    )
}
