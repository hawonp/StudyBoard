// react imports
import * as React from "react";

// MUI imports
import Box from "@mui/material/Box";

// package imports
import ProfileCard from "../../components/user/ProfileCard";
import NotificationList from "../../components/app_bar/NotificationList";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

// functional component that renders the notification page
export default withPageAuthRequired(function Notifications() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <Box sx={{ marginLeft: "20px", marginRight: "20px" }}>
          <Box
            style={{
              border: "0.1rem solid lightgray",
              borderRadius: "8px",
              marginBottom: "16px",
              marginTop: "20px",
              padding: "10px 12px",
              backgroundColor: "white",
            }}
          >
            <div className="row gutters m-4">
              <NotificationList />
            </div>
          </Box>
        </Box>
      </div>
      <ProfileCard />
    </div>
  );
}); // functional component closure
