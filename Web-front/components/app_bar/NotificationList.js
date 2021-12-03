// react imports
import * as React from "react";
import { useState, useEffect } from "react";

// MUI imports
import NotificationsOffOutlinedIcon from "@mui/icons-material/NotificationsOffOutlined";
import { Box } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

// package imports
import LoadingProgress from "../Loading";
import { useUser } from "@auth0/nextjs-auth0";
import axiosInstance from "../../utils/routeUtil";
import { getTimeDisplay } from "../../utils/utils";

// constants
const USERSENDPOINT = "/users";
const NOTIFICATIONENDPOINT = "/notifications";

// HRWrapper styling
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

// PaperWrapper styling
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

// BoxContainerWrapper styling
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

// DataWrapper Styling
const DateWrapper = ({ style, children }) => {
  return (
    <p style={{ color: "#888", margin: 0, fontSize: "0.8rem", ...style }}>
      {" "}
      {children}{" "}
    </p>
  );
};

// notifications with their types
const Notification = ({ data, handleNotifDelete }) => {
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
      <BoxContainWrapper>
        <div
          style={{
            display: "flex",
            fontSize: "1rem",
            overflow: "hidden",
            maxHeight: "2.15rem",
            margin: 0,
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

// functional component for the list of notifications
export default function NotificationList() {
  const [notifications, setNotifications] = useState([]); // notifications state
  const [isDataLoading, setIsDataLoading] = useState(true); // data loading state
  const { user, isLoading, error } = useUser(); // user session data from Auth0

  // load notifications for user
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

  // user deleting a notification
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

  // user clearing their notifications list
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

  // user session is loading
  if (isLoading) return <LoadingProgress />;
  if (error) return <div>{error.message}</div>;

  // notification data is loading
  if (isDataLoading) {
    return <></>;
  }
  // no notifications for user
  else if (notifications.length === 0) {
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
  }
  // user has some unseen notifications
  else {
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
