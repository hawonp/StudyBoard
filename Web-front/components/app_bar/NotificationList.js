import * as React from "react";
import { useState, useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import LoadingProgress from "../Loading";
//Importing MUI
import NotificationsOffOutlinedIcon from "@mui/icons-material/NotificationsOffOutlined";
import { Paper, Box } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import IconButton from "@mui/material/IconButton";
import axiosInstance from "../../utils/routeUtil";
import { getTimeDisplay } from "../../utils/utils";
import Button from "@mui/material/Button";

const USERSENDPOINT = "/users";
const NOTIFICATIONENDPOINT = "/notifications";

const HrLineWrapper = ({ style, children }) => {
  return (
    <div
      style={{
        margin: "0px",
        flexShrink: "0",
        borderWidth: "0px 0px thin",
        borderStyle: "solid",
        marginBottom: "10px",
        opacity: 1,
        borderColor: "rgb(227, 242, 253)",
        ...style,
      }}
    >
      {" "}
      {children}{" "}
    </div>
  );
};

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

const Notification = ({ data, handleNotifDelete }) => {
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

  //Construct the text
  let actionText = "";
  let contentText = "";
  if (notifType < 1) {
    // Reply
    actionText += "replied to your";
    if (notifType == 0) {
      contentText += " post";
    } else if (notifType == 0.1) {
      contentText += " reply";
    }
  } else if (notifType < 2) {
    //Like
    actionText += "liked your";
    if (notifType == 1) {
      contentText += " post";
    } else if (notifType == 1.1) {
      contentText += " reply";
    }
  } else {
    //Herro
    if (notifType == 2) {
      actionText +=
        "The content you have recently reported has been removed. Thank you for making Studyboard cleaner!";
    } else if (notifType == 2.1) {
      actionText +=
        "The content you have recently posted was deemed inappropirate and removed.";
    } else if (notifType == 3) {
      actionText +=
        "You are now an endorsed user! Please continue with us in making Studyboard a more helpful place.";
    } else if (notifType == 3.1) {
      actionText += "You are no longer an endorsed user.";
    }
  }

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
            {actionText}
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
              <strong>{contentText}</strong>
            </a>
          </div>
          <IconButton onClick={() => handleNotifDelete(data.notification_id)}>
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

  const handleNotifDelete = (notifID) => {
    if (!isLoading && !error) {
      let userID = "";
      if (user) {
        userID = user.sub;
      }
      axiosInstance
        .delete(
          USERSENDPOINT + "/" + userID + NOTIFICATIONENDPOINT + "/" + notifID
        )
        .then((response) => {
          setNotifications(
            notifications.filter(
              (notification) => notification.notification_id !== notifID
            )
          );
        });
    }
  };

  const clearAll = () => {
    if (!isLoading && !error) {
      let userID = "";
      if (user) {
        userID = user.sub;
      }
      axiosInstance
        .delete(USERSENDPOINT + "/" + userID + NOTIFICATIONENDPOINT)
        .then((response) => {
          setNotifications([]);
        });
    }
  };

  if (isLoading) return <LoadingProgress />;
  if (error) return <div>{error.message}</div>;

  if (isDataLoading) {
    return <></>;
  } else if (notifications.length === 0) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "60px",
          paddingTop: "30px",
          paddingBottom: "30px",
        }}
      >
        <NotificationsOffOutlinedIcon sx={{ fontSize: "3.2rem" }} />
        <div style={{ fontSize: "1.2", color: "lightgray" }}>
          No notification
        </div>
      </Box>
    );
  } else {
    return (
      <>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0rem",
            margin: "0rem",
          }}
        >
          <h2
            style={{
              fontSize: "1.0rem",
              // marginBottom: "2rem",
              marginLeft: "0.5rem",
            }}
          >
            Notifications
          </h2>{" "}
          <Button
            size="small"
            variant="text"
            style={{ markerStart: "0.5rem", marginRight: "0.5rem" }}
            onClick={clearAll}
          >
            Clear All
          </Button>
        </div>
        <HrLineWrapper />
        {notifications.map((notif) => (
          <Notification
            key={notif.notification_id}
            data={notif}
            handleNotifDelete={handleNotifDelete}
          />
        ))}
      </>
    );
  }
} //functional component closure
