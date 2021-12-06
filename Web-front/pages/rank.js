// react imports
import * as React from "react";

// MUI imports
import Box from "@mui/material/Box";

// package imports
import UserRankList from "../components/misc/UserRankList";

// functional component that renders the rank page
export default function Rank() {
  return (
    <div>
      <Box sx={{ marginLeft: "20px", marginRight: "20px" }}>
        <Box
          style={{
            backgroundColor: "white",
          }}
        >
          <h1 style={{ textAlign: "center", paddingTop: "1rem" }}>Top Users</h1>
          <hr
            style={{
              margin: "0px",
              flexShrink: "0",
              borderWidth: "0px 0px thin",
              borderStyle: "solid",
              marginBottom: "10px",
              opacity: 1,
              borderColor: "lightgray",
            }}
          />

          <UserRankList />
        </Box>
      </Box>
    </div>
  );
} // functional component closure
