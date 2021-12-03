import Head from "next/head";
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ProfileCard from "../../components/user/ProfileCard";
import { Paper } from "@mui/material";
import NotificationList from "../../components/app_bar/NotificationList";

export default function Notifications() {
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
}
