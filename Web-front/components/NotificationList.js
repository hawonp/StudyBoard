import * as React from "react";
import { useState, useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0";
//Importing MUI
import { Paper } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import IconButton from "@mui/material/IconButton";
import axiosInstance from "../utils/routeUtil";
import { getTimeDisplay } from "../utils/utils";
const USERSENDPOINT = "/users";
const NOTIFICATIONENDPOINT = "/notifications";

const PaperWrapper = ({ style, children }) => {
  return (
    <div
      style={{
        borderRadius: "4px",
        boxShadow: "#d5d5d5 0 0 5px",
        maxWidth: "1200px",
        margin: "0.5rem",
        padding: "0.5rem",
        height: "5rem",
        ...style,
      }}
    >
      {" "}
      {children}{" "}
    </div>
  );
};

const BoxContainWrapper = ({ style, children }) => {
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        // marginLeft: "2%",
        // marginTop: ".35rem",
        ...style,
      }}
    >
      {" "}
      {children}{" "}
    </div>
  );
};

const DateWrapper = ({ style, children }) => {
  return (
    <p style={{ color: "#888", margin: 0, fontSize: "0.8rem", ...style }}>
      {" "}
      {children}{" "}
    </p>
  );
};
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
  // Reply to post, reply to reply (post) 00 01
  // LIke to post, like to reply 10 11
  // Report accepted, your post/reply deleted 20 21 22
  // DB(TABLE)는 모든 유저, 모든 게시글, 모든 댓글에 대한 활동을 기록한다
  // GET 호출을 할때, 유저의 id를 보내면 그걸로 필터링된 것을 응답

  // 프론트가 필요한건
  // 1. 노티 ID
  // 2. 활동 주체
  // 3. 게시글 ID 혹은 댓글 ID (활동이 일어난 곳)
  // 4. 활동 타입 (좋아요 혹은 댓글)
  // 5. 시간
  // 6. 확인 유무
  // const {
  //   notification_id, // 1
  //   user_id, // 2
  //   interactor_nickname, // 2
  //   post_id, // 3 (
  //   reply_id, // 3
  //   notification_type, // 4 ('like' or 'reply')
  //   notification_date, // 5
  //   notification_seen, // 6
  // } = data;
  const notifType = data.notification_type / 10;
  const timeDiff = getTimeDisplay(new Date(), data.notification_date);
  console.log(notifType);
  let typeText = "";
  if (notifType < 1) {
    // Reply
    typeText += "replied to your";
    if (notifType == 0) {
      typeText += " post";
    } else if (notifType == 0.1) {
      typeText += " reply";
    }
  } else if (notifType < 2) {
    //Like
    typeText += "liked your";
    if (notifType == 1) {
      typeText += " post";
    } else if (notifType == 1.1) {
      typeText += " reply";
    }
  } else if (notifType < 3) {
    //Herro
    typeText +=
      "The content you have recently reported has been removed. Thank you for making Studyboard cleaner!";
  }
  console.log(typeText);
  return (
    <PaperWrapper>
      {/* <DivEmptyWrapper /> */}
      <BoxContainWrapper>
        <div
          style={{
            display: "flex",
            fontSize: "1rem",
            overflow: "hidden",
            maxHeight: "2.15rem",
            margin: 0,
            // lineHeight: "normal",
            marginTop: "0.2rem",
            alignItems: "center",
          }}
        >
          <div
            style={{
              flex: 1,
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            {notifType < 2 ? (
              <span>
                <b>{data.interactor_nickname}</b>&nbsp;
              </span>
            ) : (
              <></>
            )}
            {/* {reply_id ? (
              <a
                style={{ textDecoration: "none" }}
                href={`/postdetail?post_id=${post_id}&comment_id=${reply_id}`}
              >
                <strong>이 댓글</strong>
              </a>
            ) : ( */}
            <a
              style={{ textDecoration: "none" }}
              href={`/posts/${data.post_id}`}
            >
              <strong>{typeText}</strong>
            </a>
          </div>
          <IconButton>
            <CancelIcon sx={{ justifyContent: "end" }} />
          </IconButton>
        </div>

        <DateWrapper style={{ justifyContent: "end" }}>{timeDiff}</DateWrapper>
      </BoxContainWrapper>
    </PaperWrapper>
  );
};

export default function NotificationList() {
  const [notifications, setNotifications] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const { user, isLoading, error } = useUser();
  useEffect(() => {
    if (!isLoading && !error) {
      let userID = "";
      if (user) {
        userID = user.sub;
      }
      axiosInstance
        .get(USERSENDPOINT + "/" + userID + NOTIFICATIONENDPOINT)
        .then((response) => {
          setNotifications(JSON.parse(response.data));
          console.log("notifs", notifications);
          setIsDataLoading(false);
        });
    }
  }, [isLoading]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (isDataLoading) {
    return <div> Loading... </div>;
  } else {
    return (
      <>
        {notifications.map((notif) => (
          <Notification key={notif.notification_id} data={notif} />
        ))}
      </>
    );
  }
}
